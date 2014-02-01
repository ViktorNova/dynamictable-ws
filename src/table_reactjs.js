/** @jsx React.DOM */

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
	getInitialState: function() {
		return {
			data: this.props.data,
			color: this.props.color
		};
	},
	render: function () {
		var color = this.state.color;
		var myData = this.state.data;

		var a = myData.axis[0].Positions.length;
		var b = myData.axis[1].Positions[0].Members.length;
		var c = myData.axis[0].Positions[0].Members.length;
		var d = myData.axis[1].Positions.length;
		var rowArray = range(0,c+d);
		var colArray = range(0,a+b);
		return (
			<table className="table table-bordered"><tbody>
			{
				rowArray.map(function(i) {
					var r = colArray.map(function(j) {
						var key = 1/2*(i+j)*(i+j+1)+j;//Cantor function for a unique key
						if(j<b && i<c)
							return(<Cell cellValue={""} color={color} key={key}/>);
						else if(i<c && j>=b)
							return(<Cell cellValue={myData.axis[0].Positions[j-b].Members[i].name} color={color} key={key}/>);
						else if(i>=c && j<b)
							return(<Cell cellValue={myData.axis[1].Positions[i-c].Members[j].name} color={color} key={key}/>);
						else
							return(<Cell cellValue={myData.cells.cells[i-c][j-b]} color={color} key={key}/>);
					});
					return(<Row row={r} key={i}/>);
				})
			}
			</tbody></table>
			);
	}
});

var table = React.renderComponent(
  <Table data={data} color={"white"}/>,
  document.getElementById('pivotTable')
);

//override boostrap css for width (100% normaly)
document.getElementById('pivotTable').style.width = "10px";


