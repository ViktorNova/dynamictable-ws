//** Web socket **// 

//n: number of time a new set of data is retrieve from server
//refreshTime: time between each server push
function fetchData(n, refreshTime){
  var ws = new WebSocket("ws://localhost:8888/data/?n="+n+"&refresh="+refreshTime);

  ws.onopen = function() {
    ws.send("fetching data...");
  };
  ws.onmessage = function(evt) { 
    table.setState({ data: eval('(' + evt.data + ')') });
  };
  ws.onclose = function() { 
  };
}

function WebSocketStart() {
  fetchData(4, 3);
}