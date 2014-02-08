/** @jsx React.DOM */

var Cell = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return nextProps.cellValue != this.props.cellValue;
  },
  render: function () {
    var style = {"backgroundColor": this.props.color};
    return (
      <td style={style}>{this.props.cellValue}</td>
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

var Table = React.createClass({
  getInitialState: function() {
    return {
      data: this.props.data,
      color: this.props.color
    };
  },
  render: function () {
    var color = this.state.color;
    return (
      <table>
      {
        this.state.data.map(function(row) {
          var r = row.map(function(cell) {
            return <Cell cellValue={cell} color={color}/>;
          });

          return (<Row row={r}/>);
        })
      }
      </table>
      );
  }
});

function getColor(i) {
  if(i === 0) {
    return "black";
  } else {
    return "red";
  }
}

var data = [[1,2,3],[4,5,6],[7,8,9]];
//data can be called from data.js file
var table = React.renderComponent(
  <Table data={data} color={getColor(0)}/>,
  document.getElementById('pivotTable')
);

function changeData(){
  var newData = [[1,1,1],[1,1,1],[1,1,1],[1,1,1]];
  table.setState({data : newData});
}
function changeData2(){
  var newData = [[1,1],[1,1],[1,1],[1,1]];
  table.setState({data : data});
}

fetch(1, 0, 0);

//** Web socket **// 
function fetch(n, j, refreshTime){
  var ws = new WebSocket("ws://localhost:8888/data/?n="+n+"&refresh="+refreshTime);
  var info = document.getElementById("ws_info");
  var i = j;

  ws.onopen = function() {
    info.innerHTML = "Connexion open";
    ws.send("fetching data...");
  };
  ws.onmessage = function (evt) { 
    info.innerHTML = "Message received n° " + i;
    table.setState({ data: convertJSON2dArray(evt.data), color: getColor(i) });
    i = i+1;
    return evt.data;
  };
  ws.onclose = function() { 
    info.innerHTML = "Connexion stopped";
  };
}

function WebSocketStart() {
  fetch(10, 1, 1);
}
