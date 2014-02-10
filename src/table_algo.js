/** @jsx React.DOM */

//Table rendering function from data in JSON format
function tableRendering(myData){
	var a = myData.axis[0].Positions.length;//width of the header column
	var b = myData.axis[1].Positions[0].Members.length;//width of the header row
	var c = myData.axis[0].Positions[0].Members.length;//height of the header column
	var d = myData.axis[1].Positions.length;//height of the header row

	var rows = [];//store all the Row components
	var map = {};

	for(var i = 0; i<c+d; i += 1){
		var cells = [];//store all cells of a given row
		var nextColValue = cellValue(myData, c, b, i, 0);//re/init when new row
		var colspan = 1;//default value
		for(var j = 0; j<a+b; j += 1){
			var value = nextColValue;//take the value previously computed

			if(j+1<a+b)
				nextColValue = cellValue(myData, c, b, i, j+1);//compute the value of the next cell

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
function cellValue(myData, c, b, i, j){
	var value = "";
	if(i<c && j>=b)
		value = myData.axis[0].Positions[j-b].Members[i].name;
	else if(i>=c && j<b)
		value = myData.axis[1].Positions[i-c].Members[j].name;
	else if(i>=c && j>=b)
		value = myData.cells.cells[i-c][j-b];
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