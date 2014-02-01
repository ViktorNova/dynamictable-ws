//data used for test
var data_json = '{"nAxis": 2, "cells": {"cells": [[194, 883, 91, 879, 340], [107, 876, 369, 772, 308], [625, 865, 368, 256, 37], [527, 905, 110, 227, 233], [805, 742, 211, 904, 163], [825, 309, 226, 884, 161], [777, 305, 453, 243, 469], [583, 668, 656, 74, 637]]}, "axis": [{"Positions": [{"Members": [{"name": "France"}]}, {"Members": [{"name": "USA"}]}, {"Members": [{"name": "Japan"}]}, {"Members": [{"name": "England"}]}, {"Members": [{"name": "Italy"}]}], "n": 0}, {"Positions": [{"Members": [{"name": "Jan"}, {"name": "pnl"}]}, {"Members": [{"name": "Jan"}, {"name": "count"}]}, {"Members": [{"name": "Feb"}, {"name": "pnl"}]}, {"Members": [{"name": "Feb"}, {"name": "count"}]}, {"Members": [{"name": "Mar"}, {"name": "pnl"}]}, {"Members": [{"name": "Mar"}, {"name": "count"}]}, {"Members": [{"name": "Apr"}, {"name": "pnl"}]}, {"Members": [{"name": "Apr"}, {"name": "count"}]}], "n": 1}]}';

var data = eval('(' + data_json + ')');

//tr row
//th header
//td cell

var a = data.axis[0].Positions.length;
var b = data.axis[1].Positions[0].Members.length;
var c = data.axis[0].Positions[0].Members.length;
var d = data.axis[1].Positions.length;
console.log("a = "+a+" // "+"b = "+b+" // "+"c = "+c+" // "+"d = "+d);

var table = '<table><tbody>';

//HEADER Columns
for(var i = 0; i<c; i += 1){
	table += '<tr>';
	for(var j = 0; j<a+b; j +=1){
		if(j<b){
			table += '<td></td>';
		}else{
			table +='<th>'+data.axis[0].Positions[j-b].Members[i].name+'</th>';
		}
	}
	table += '</tr>';
}

//HEADER Rows
//start from c here because the blank cells are already built
for(var i = c; i<d; i += 1){
	table += '<tr>';
	for(var j = 0; j<b; j +=1){
		table +='<th>'+data.axis[1].Positions[i].Members[j].name+'</th>';
	}
	//Cells
	buildRowCell(i);
	table += '</tr>';
}

function buildRowCell(i){
	for(var j = 0; j<a; j +=1){
		table +='<td>'+data.cells.cells[i-c][j]+'</td>';
	}
}

table += '</table></tbody>';

document.getElementById('table').innerHTML = table;




