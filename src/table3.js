/** @jsx React.DOM */

//initial data
var data_json = '{"nAxis": 2, "cells": {"cells": [[194, 883, 91, 215, 109], [584, 876, 275, 357, 21], [625, 43, 190, 256, 37], [527, 905, 110, 227, 233], [408, 688, 388, 483, 163], [92, 309, 304, 69, 161]]}, "axis": [{"Positions": [{"Members": [{"name": "France"}]}, {"Members": [{"name": "USA"}]}, {"Members": [{"name": "Japan"}]}, {"Members": [{"name": "England"}]}, {"Members": [{"name": "Italy"}]}], "n": 0}, {"Positions": [{"Members": [{"name": "Jan"}, {"name": "pnl"}]}, {"Members": [{"name": "Jan"}, {"name": "count"}]}, {"Members": [{"name": "Mar"}, {"name": "pnl"}]}, {"Members": [{"name": "Mar"}, {"name": "count"}]}, {"Members": [{"name": "Apr"}, {"name": "pnl"}]}, {"Members": [{"name": "Apr"}, {"name": "count"}]}], "n": 1}]}';
var data = eval('(' + data_json + ')');

//data
var data_json2 = '{"nAxis": 2, "cells": {"cells": [[194, 883, 91, 215, 109], [584, 876, 275, 357, 21], [785, 865, 368, 978, 783], [449, 390, 859, 369, 762], [408, 688, 388, 483, 163], [92, 309, 304, 69, 161], [918, 505, 887, 551, 219], [215, 352, 94, 750, 715]]}, "axis": [{"Positions": [{"Members": [{"name": "France"}]}, {"Members": [{"name": "USA"}]}, {"Members": [{"name": "Japan"}]}, {"Members": [{"name": "England"}]}, {"Members": [{"name": "Italy"}]}], "n": 0}, {"Positions": [{"Members": [{"name": "Jan"}, {"name": "pnl"}]}, {"Members": [{"name": "Jan"}, {"name": "count"}]}, {"Members": [{"name": "Feb"}, {"name": "pnl"}]}, {"Members": [{"name": "Feb"}, {"name": "count"}]}, {"Members": [{"name": "Mar"}, {"name": "pnl"}]}, {"Members": [{"name": "Mar"}, {"name": "count"}]}, {"Members": [{"name": "Apr"}, {"name": "pnl"}]}, {"Members": [{"name": "Apr"}, {"name": "count"}]}], "n": 1}]}';
var data2 = eval('(' + data_json2 + ')');

//data 2
var data_json3 = '{"nAxis": 2, "cells": {"cells": [[194, 883, 91, 879, 340], [107, 876, 369, 772, 308], [625, 865, 368, 256, 37], [527, 905, 110, 227, 233], [805, 742, 211, 904, 163], [825, 309, 226, 884, 161], [777, 305, 453, 243, 469], [583, 668, 656, 74, 637]]}, "axis": [{"Positions": [{"Members": [{"name": "France"}]}, {"Members": [{"name": "USA"}]}, {"Members": [{"name": "Japan"}]}, {"Members": [{"name": "England"}]}, {"Members": [{"name": "Italy"}]}], "n": 0}, {"Positions": [{"Members": [{"name": "Jan"}, {"name": "pnl"}]}, {"Members": [{"name": "Jan"}, {"name": "count"}]}, {"Members": [{"name": "Feb"}, {"name": "pnl"}]}, {"Members": [{"name": "Feb"}, {"name": "count"}]}, {"Members": [{"name": "Mar"}, {"name": "pnl"}]}, {"Members": [{"name": "Mar"}, {"name": "count"}]}, {"Members": [{"name": "Apr"}, {"name": "pnl"}]}, {"Members": [{"name": "Apr"}, {"name": "count"}]}], "n": 1}]}';
var data3 = eval('(' + data_json3 + ')');

//data 3
var data_json4 = '{"nAxis": 2, "cells": {"cells": [[194, 883, 879, 340], [107, 876, 772, 308], [625, 865, 256, 37], [527, 905, 227, 233], [805, 742, 904, 163], [825, 309, 884, 161], [777, 305, 243, 469], [583, 668, 74, 637]]}, "axis": [{"Positions": [{"Members": [{"name": "France"}]}, {"Members": [{"name": "USA"}]}, {"Members": [{"name": "England"}]}, {"Members": [{"name": "Italy"}]}], "n": 0}, {"Positions": [{"Members": [{"name": "Jan"}, {"name": "pnl"}]}, {"Members": [{"name": "Jan"}, {"name": "count"}]}, {"Members": [{"name": "Feb"}, {"name": "pnl"}]}, {"Members": [{"name": "Feb"}, {"name": "count"}]}, {"Members": [{"name": "Mar"}, {"name": "pnl"}]}, {"Members": [{"name": "Mar"}, {"name": "count"}]}, {"Members": [{"name": "Apr"}, {"name": "pnl"}]}, {"Members": [{"name": "Apr"}, {"name": "count"}]}], "n": 1}]}';
var data4 = eval('(' + data_json4 + ')');

function range(start, end) {
    var foo = new Array();
    for (var i = start; i < end; i++) {
        foo.push(i);
    }
    return foo;
}

var i = 0;

function getColor() {
  if(i === 0) {
    return "white";
  } else {
    return "red";
  }
}

var Cell = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return nextProps.cellValue != this.props.cellValue || nextProps.color == "white";
  },
  render: function () {
    var style = {"backgroundColor": this.props.color};
    return (
      <td style={style} key={this.props.key}>{this.props.cellValue}</td>
     );
  }
});

var Row = React.createClass({
  render: function () {
    return (
      <tr key={this.props.key}>{this.props.row}</tr>
     );
  }
});

var Table = React.createClass({
	render: function () {
		var color = this.props.color;
		var myData = this.props.data;

		var a = myData.axis[0].Positions.length;
		var b = myData.axis[1].Positions[0].Members.length;
		var c = myData.axis[0].Positions[0].Members.length;
		var d = myData.axis[1].Positions.length;
		var rowArray = range(0,c+d);
		var colArray = range(0,a+b);
		console.log("a = "+a+" // "+"b = "+b+" // "+"c = "+c+" // "+"d = "+d);
		return (
			<table>
			{
				rowArray.map(function(i) {
					var r = colArray.map(function(j) {
						if(j<b && i<c)
							return(<Cell cellValue={""} color={color} key={i+100*j}/>);
						else if(i<c && j>=b)
							return(<Cell cellValue={myData.axis[0].Positions[j-b].Members[i].name} color={color} key={i+100*j}/>);
						else if(i>=c && j<b)
							return(<Cell cellValue={myData.axis[1].Positions[i-c].Members[j].name} color={color} key={i+100*j}/>);
						else
							return(<Cell cellValue={myData.cells.cells[i-c][j-b]} color={color} key={i+100*j}/>);
					});
					return(<Row row={r} key={10000*i}/>);
				})
			}
			</table>
			);
	}
});

var PivotTable = React.createClass({
	getInitialState: function() {
		return {
			data: this.props.data,
			state: this.props.color
		};
	},
	reinitColor: function(event){
		this.setState({color : "white"});
	},
	changeData: function(data2){
		console.log(data2);
		this.setState({data : data2, color : "red"});
	},
	render: function(){
		return (
			<div>
				<div style={{"float": "left" , "margin-right" : "20px"}}>
				<div onClick={this.reinitColor} style={{"border" : "1px dotted black"}}>Reinit color</div>
				<br/>
				<div onClick={this.changeData.bind(this,data2)} style={{"border" : "1px dotted black"}}>Add Feb</div>
				<div onClick={this.changeData.bind(this,data3)} style={{"border" : "1px dotted black"}}>Update cells</div>
				<div onClick={this.changeData.bind(this,data4)} style={{"border" : "1px dotted black"}}>Remove Japan</div>
				</div>
				<Table data={this.state.data} color={this.state.color}/>
			</div>
			);
	}
});

// var data = [[1,2,3],[4,5,6],[7,8,9]];
var table = React.renderComponent(
  <PivotTable data={data} color={"white"}/>,
  document.getElementById('table')
);




