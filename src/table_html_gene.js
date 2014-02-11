/** @jsx React.DOM */

var init = true;

var drawTable = function(data){ 
	var a = data.axis[0].Positions.length;
	var b = data.axis[1].Positions[0].Members.length;
	var c = data.axis[0].Positions[0].Members.length;
	var d = data.axis[1].Positions.length;
	// console.log("a = "+a+" // "+"b = "+b+" // "+"c = "+c+" // "+"d = "+d);

	var table = [];
	table.push("<table class=\"table table-bordered\">");

	//HEADER Columns
	for(var i = 0; i<c+d; i += 1){
		if(i == c)
			table.push("<tbody>");
		table.push("<tr>");
		for(var j = 0; j<a+b; j +=1){
			if(j<b && i<c)
				table.push("<td></td>");
			else if(i<c && j>=b)
				table.push("<td>", data.axis[0].Positions[j-b].Members[i].name, "</td>");
			else if(i>=c && j<b)
				table.push("<td>", data.axis[1].Positions[i-c].Members[j].name, "</td>");
			else{
				table.push("<td>", data.cells.cells[i-c][j-b], "</td>");
			}
		}
		table.push("</tr>");
		if(i == c+d-1)
			table.push("</tbody>");
	}

	table.push("</table>");

	document.getElementById('pivotTable').innerHTML = table.join("");
	//override boostrap css for width (100% normaly)
	document.getElementById('pivotTable').style.width = "10px";
}

if(init){
	drawTable(data);
	init = false;
}

var handlerJs = function(dataNew){
	drawTable(dataNew);
}

React.renderComponent(
  <RequestButtons handler={handlerJs}/>,
  document.getElementById('requestButtons')
);


