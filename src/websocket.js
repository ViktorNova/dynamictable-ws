
//** Web socket **// 
function fetch(n, j, refreshTime){
  init = false;
  var ws = new WebSocket("ws://localhost:8888/data/?n="+n+"&refresh="+refreshTime);
  var info = document.getElementById("ws_info");
  var i = j;

  ws.onopen = function() {
    info.innerHTML = "Connexion open";
    ws.send("fetching data...");
  };
  ws.onmessage = function (evt) { 
    info.innerHTML = "Message received n° " + i;
    table.setState({ data: eval('(' + evt.data + ')') });
    i = i+1;
  };
  ws.onclose = function() { 
    info.innerHTML = "Connexion stopped";
  };
}

function WebSocketStart() {
  fetch(4, 1, 3);
}