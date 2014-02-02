/** @jsx React.DOM */

function range(start, end) {
    var foo = new Array();
    for (var i = start; i < end; i++) {
        foo.push(i);
    }
    return foo;
}

var init = true;

var Cell = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return nextProps.cellValue != this.props.cellValue;
  },
  /* uncomment these two methods to see what has changed between updates */
  // componentDidMount: function(rootNode){
  // 	rootNode.className= "cell";
  // },
  // componentWillUpdate: function(){
  // 	if(!init && this.getDOMNode() != null){
  // 		this.getDOMNode().className= "cell2";
  // 		var self = this;
  // 		setTimeout(function(){
  // 			self.getDOMNode().className= "";
  // 		}, 2300);
  // 	}
  // },
  render: function () {
    return (
      <td key={this.props.key}>{this.props.cellValue}</td>
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
		};
	},
	render: function () {
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
							return(<Cell cellValue={""} key={key}/>);
						else if(i<c && j>=b)
							return(<Cell cellValue={myData.axis[0].Positions[j-b].Members[i].name} key={key}/>);
						else if(i>=c && j<b)
							return(<Cell cellValue={myData.axis[1].Positions[i-c].Members[j].name} key={key}/>);
						else
							return(<Cell cellValue={myData.cells.cells[i-c][j-b]} key={key}/>);
					});
					return(<Row row={r} key={i}/>);
				})
			}
			</tbody></table>
			); 
	}
});

var handlerReactjs = function(dataNew){
	init = false;
	table.setState({data : dataNew});
}

React.renderComponent(
  <RequestButtons handler={handlerReactjs}/>,
  document.getElementById('requestButtons')
);

var table = React.renderComponent(
  <Table data={data}/>,
  document.getElementById('pivotTable')
);

//override boostrap css for width (100% normaly)
document.getElementById('pivotTable').style.width = "10px";


