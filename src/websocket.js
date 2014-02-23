//** Web socket **// 

//n: number of time a new set of data is retrieve from server
//refreshTime: time between each server push
function fetchData(n, refreshTime, data){
  var ws = new WebSocket("ws://localhost:8888/data/?n="+n+"&refresh="+refreshTime);

  ws.onopen = function() {
    // ws.send("fetching data...");
    if(data != null){
      ws.send(JSON.stringify(data));
    }
  };
  ws.onmessage = function(evt) { 
    // table.setState({ data: eval('(' + evt.data + ')') });
  };
  ws.onclose = function() { 
  };
}

function WebSocketStart() {
  console.log(currentData);
  console.log(JSON.stringify(currentData));
  fetchData(4, 3, currentData);
}