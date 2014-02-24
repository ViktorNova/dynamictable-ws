/** @jsx React.DOM */

//Table rendering function from data in JSON format
function tableRendering(myData){
	console.log(myData);
	var d = myData.axes[0].positions.length;//height of the header column
	var b = myData.axes[0].positions[0].members.length;//width of the header row
	var c = myData.axes.length > 1 ? myData.axes[1].positions[0].members.length : 0;//height of the header column
	var a = myData.axes.length > 1 ? myData.axes[1].positions.length : 1;//height of the header row
	console.log("a= "+a+" ; "+"b= "+b+" ; "+"c= "+c+" ; "+"d= "+d);

	var rows = [];//store all the Row components
	var map = {};

	for(var i = 0; i<c+d; i += 1){
		var cells = [];//store all cells of a given row
		var nextColValue = cellValue(myData, a, c, b, i, 0);//re/init when new row
		var colspan = 1;//default value
		for(var j = 0; j<a+b; j += 1){
			var value = nextColValue;//take the value previously computed

			if(j+1<a+b)
				nextColValue = cellValue(myData, a, c, b, i, j+1);//compute the value of the next cell

			var key = Cantor(i,j);//Cantor function for a unique key
			if(!(key in map)){
				//only the header cells are concerned
				if(i<c || j<b){
					if(nextColValue == value && j+1<a+b){
						colspan += 1;//increase colspan if the following value is the same
					}else{
						var rowspan = computeRowSpan(value, myData, c, b, d, i, j);//compute rowspan
						if(rowspan>1){
							for(var m = i+1; m<i+rowspan; m += 1){
								for(var n = j-colspan+1; n<=j; n += 1){
									map[Cantor(m,n)] = [i, j];//store the position of cells that won't be 
									//visited since rowspan is higher than one
								}
							}
						}
						// un/comment - useful for debugging
						// console.log('('+i+','+j+') || rowspan: '+rowspan+' || colspan: '+colspan +' || value: '+value);
						cells.push(<Header cellValue={value} key={key} colspan={colspan} rowspan={rowspan}/>);
						colspan = 1;
					}
				}else{
					//ordinary cell
					cells.push(<Cell cellValue={value} key={key}/>);
				}
			}
		}	
	rows.push(<Row row={cells} key={i}/>);//push new row in array
	}
	return rows;//final result
}

//return the value of a cell for a given position (i,j)
function cellValue(myData, a, c, b, i, j){
	var value = "";
	if(i<c && j>=b && myData.axes.length > 1)
		value = myData.axes[1].positions[j-b].members[i].displayName;
	else if(i>=c && j<b)
		value = myData.axes[0].positions[i-c].members[j].displayName;
	else if(i>=c && j>=b)
		value = myData.cells[(i-c)*a+(j-b)].formattedValue;
	return value;
}

//For a given column, compute the number of consecutive occurrences of a value (input parameter) 
function computeRowSpan(value, myData, c, b, d, i, j){
	var occ = 1;
	while((i<c || j<b) && i+occ<c+d && value == cellValue(myData, c, b, i+occ, j)){
		occ += 1;
	}
	return occ;
}

//Bijective function from NxN to N, used for unique keys
function Cantor(m, n){
	return 1/2*(m+n)*(m+n+1)+n;
}