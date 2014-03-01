/**
 * Created by smouelhi on 17/02/14.
 */

// function initWS() {
//     setTimeout(testWebSocket(queries, new WebSocket(wsUri)),1000);
// }

var wsUri = "ws://192.168.1.22:8080/socketQueryEngine";//server adress
function createWebSocket(queryStr) {
    var ws = new WebSocket(wsUri)
    ws.onopen = function(evt) { 
       ws.send(encodeURIComponent(queryStr));
    };
    ws.onclose = function(evt) { 
        console.log("close");
    };
    ws.onmessage = function(evt) { 
        var newData = eval('(' + evt.data + ')');
        console.log("newData:");
        console.log(newData);
        console.log(evt.data);
        table.setState({ data: newData });
    };
    ws.onerror = function(evt) { 
        console.log("Error: "+evt.data);
    };
}

// updates = JSON.parse(evt.data);
// for (cellId in updates) {
//     updates[cellId];
// }

