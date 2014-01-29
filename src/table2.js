/** @jsx React.DOM */

var data_json = '{"nAxis": 2, "axis": [{"Positions": [{"Members": [{"name": "France"}, {"name": "USA"}, {"name": "Japan"}, {"name": "England"}, {"name": "Italy"}]}], "n": 0}, {"Positions": [{"Members": [{"name": "Jan"}, {"name": "Jan"}, {"name": "Feb"}, {"name": "Feb"}, {"name": "Mar"}, {"name": "Mar"}, {"name": "Apr"}, {"name": "Apr"}]}, {"Members": [{"name": "pnl"}, {"name": "count"}, {"name": "pnl"}, {"name": "count"}, {"name": "pnl"}, {"name": "count"}, {"name": "pnl"}, {"name": "count"}]}], "n": 1}]}';
var data = eval('(' + data_json + ')');

//tr row
//th header
//td cell

var a = data.axis[0].Positions[0].Members.length;
var b = data.axis[1].Positions.length;
var c = data.axis[0].Positions.length;
var d = data.axis[1].Positions[0].Members.length;
console.log("a = "+a+" // "+"b = "+b+" // "+"c = "+c+" // "+"d = "+d);

var table = '<table><tbody>';

for(var i = 0; i<c+d; i+=1){
	table += '<tr>';
	for(var j = 0; j<a+b; j+=1){
		if(i<c && j<b)
			table += '<td></td>';//for the top left hand side corner of the table
		else{
			if(i<c && j>=b){
			//Column header
			//try and catch just in case
				try{
					table += '<th>'+data.axis[0].Positions[i].Members[j-b].name+'</th>';
				}catch(err){
					console.log("i="+i+ " // j="+j+ "| error: "+err);
				}
			}else if(i>=c && j<b){
			//Row header
			//try and catch just in case
				try{
					table += '<th>'+data.axis[1].Positions[j].Members[i-c].name+'</th>';
				}catch(err){
					console.log("i="+i+ " // j="+j+ "| error: "+err);
				}
			}else{
				//cell of the table, ready to get some values
				table += '<td></td>';
			}
		}
	}
	table += '</tr>';
}

table += '</table></tbody>';

// data.axis.map(function(axis){
// 	//0 -> columns
// 	//1 -> rows
// 	console.log(axis);
// 	if(axis.n == "0")
// 		table += '<tr>';

// 	axis.Positions.map(function(position){
// 		console.log(position);
// 		position.Members.map(function(member){
// 			if(axis.n == "1")
// 				table += '<tr>';
// 			console.log(member.name);
// 			table += '<th>'+member.name+'</th>';
// 			// for(var i = 0; i<d; i+=1){
// 			// 	table += '<td>cell</td>';
// 			// }
// 			if(axis.n == "1")
// 				table += '</tr>';
// 		});
// 	});

// 	if(axis.n == "0")
// 		table += '</tr>';
// });


document.getElementById('table').innerHTML = table;