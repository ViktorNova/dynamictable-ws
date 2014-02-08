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
      <td key={this.props.key} colSpan={this.props.colspan}>{this.props.cellValue}</td>
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
		return (
			<table className="table table-bordered"><tbody>
			{
				tableRendering(this.state.data)
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


