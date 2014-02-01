/** @jsx React.DOM */

var Cell = React.createClass({
  render: function () {
    return (
      <td>{this.props.cellValue}</td>
     );
  }
});

var Row = React.createClass({
  render: function () {
    return (
      <tr>{this.props.row}</tr>
     );
  }
});

function range(start, end) {
    var foo = new Array();
    for (var i = start; i < end; i++) {
        foo.push(i);
    }
    return foo;
}

var Table = React.createClass({
  getInitialState: function() {
    return {
      data: this.props.data,
    };
  },
  render: function () {
    var da = range(0, this.state.data.length);
    var val = this.state.data;
    return (
      <table><tbody>
      {
          da.map(function(row) {
          var r = val[row].map(function(cell) {
            return <Cell cellValue={cell}/>;
          });

          return (<Row row={r}/>);
        })
      }
      </tbody></table>
      );
  }
});

var data1 = [[1,2,3],[4,5,6],[7,8,9]];
var table = React.renderComponent(
  <Table data={data1}/>,
  document.getElementById('table')
);

var data2 = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
var data3 = [[1,2,3],[10,11,12]];

var Switch = React.createClass({
  changeData: function(dataNew){
    table.setState({data : dataNew});
  },
  render: function() {
    return (
      <div>
      <div onClick={this.changeData.bind(this,data2)} >list 1</div>
      <div onClick={this.changeData.bind(this,data3)} >list 2</div>
      </div>
      );
  }
});

React.renderComponent(
  <Switch/>,
  document.getElementById('switch')
);
