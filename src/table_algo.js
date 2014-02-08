/** @jsx React.DOM */

function tableRendering(myData){
	var a = myData.axis[0].Positions.length;
	var b = myData.axis[1].Positions[0].Members.length;
	var c = myData.axis[0].Positions[0].Members.length;
	var d = myData.axis[1].Positions.length;

	var rows = [];
	var nextRowValue = new Map();//store the next header value on the next row
	for(var i = 0; i<c+d; i += 1){
		var nextColValue = cellValue(myData, c, b, i, 0);
		var cells = [];
		var colspan = 1;
		for(var j = 0; j<a+b; j += 1){
			var value = nextColValue;

			if(j+1<a+b)
				nextColValue = cellValue(myData, c, b, i, j+1);

			var key = 1/2*(i+j)*(i+j+1)+j;//Cantor function for a unique key
			if(i<c || j<b){
				if(nextColValue == value && j+1<a+b)
					colspan += 1;
				else{
					cells.push(<Cell cellValue={value} key={key} colspan={colspan}/>);
					colspan = 1;
				}
			}else {
				cells.push(<Cell cellValue={value} key={key}/>);
			}
		}	

	rows.push(<Row row={cells} key={i}/>);
	}
	return rows;
}

function cellValue(myData, c, b, i, j){
	value = "";
	if(i<c && j>=b)
		value = myData.axis[0].Positions[j-b].Members[i].name;
	else if(i>=c && j<b)
		value = myData.axis[1].Positions[i-c].Members[j].name;
	else if(i>=c && j>=b)
		value = myData.cells.cells[i-c][j-b];

	return value;
}