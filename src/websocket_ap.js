/**
 * Created by smouelhi on 17/02/14.
 */

// var queries =
    // 'SELECT NON EMPTY { [Measures].[rho.SUM], [Measures].[gamma.SUM], [Measures].[theta.SUM], [Measures].[pnl.CONTINUOUS_FOREX]} ON COLUMNS, NON EMPTY CrossJoin(Hierarchize([HostName].[HostName].[HostName].Members),Hierarchize(DrilldownLevel([Bookings].[Desk].[ALL].[AllMember]))) ON ROWS FROM [EquityDerivativesCube]';
//    +
//                    'SELECT NON EMPTY {         [Measures].[QTY.LONG],             [Measures].[QTY.SHORT],             [Measures].[QTY.NET],             [Measures].[QTY.GROSS],             [Measures].[QTY.MARKET_VALUE_LONG],             [Measures].[QTY.MARKET_VALUE_SHORT],             [Measures].[QTY.MARKET_VALUE_NET],             [Measures].[QTY.MARKET_VALUE_GROSS]     } ON COLUMNS,             NON EMPTY Hierarchize(             [Source].[Source].Members     ) ON ROWS     FROM [TradesCube];' +
//                    'WITH      Member [Measures].[Securities Count] AS DISTINCTCOUNT(             {                     [Security].[Symbol].Members     }     )     Member [Measures].[Percent] AS IIf(             IsEmpty(                     (                             [Side].CurrentMember.Parent,                                     [Measures].[QTY.GROSS]                             )             ),             NULL,             [Measures].[QTY.GROSS] / (                     [Side].CurrentMember.Parent,                             [Measures].[QTY.GROSS]                     )     ),             FORMAT_STRING="##%"     SELECT NON EMPTY CrossJoin(             Hierarchize(                     [Source].[Source].Members             ),             Order(                     {                             [Measures].[Securities Count],     [Measures].[Percent]     },     [Attribution].[ALL].[AllMember].[B],             BASC     )     ) ON ROWS,             [Side].[Side] ON COLUMNS     FROM [TradesCube];' +
//                    'SELECT NON EMPTY {         [Measures].[QTY.LONG],         [Measures].[QTY.SHORT],         [Measures].[QTY.NET],         [Measures].[QTY.GROSS],         [Measures].[VALUE.LONG],         [Measures].[VALUE.SHORT],         [Measures].[VALUE.NET],         [Measures].[VALUE.GROSS]     } ON COLUMNS,             NON EMPTY CrossJoin(             Hierarchize(                     [Source].[Source].Members             ),             Hierarchize(                     [Market Cap].[Market Cap].Members     )     ) ON ROWS     FROM [TradesCube];'+
//                    'SELECT NON EMPTY {         [Measures].[QTY.LONG],             [Measures].[QTY.SHORT],             [Measures].[QTY.NET],             [Measures].[QTY.GROSS],             [Measures].[VALUE.LONG],             [Measures].[VALUE.SHORT],             [Measures].[VALUE.NET],             [Measures].[VALUE.GROSS]     } ON COLUMNS,             NON EMPTY CrossJoin(             Hierarchize(                     [Source].[Source].Members             ),             Hierarchize(                     [Distribution].[Distribution].Members             )     ) ON ROWS     FROM [TradesCube];' +
//                    'SELECT NON EMPTY {         [Measures].[QTY.LONG],             [Measures].[QTY.SHORT],             [Measures].[QTY.NET],             [Measures].[QTY.GROSS],             [Measures].[VALUE.LONG],             [Measures].[VALUE.SHORT],             [Measures].[VALUE.NET],             [Measures].[VALUE.GROSS]     } ON COLUMNS,             NON EMPTY CrossJoin(             Hierarchize(                     [Source].[Source].Members             ),             Hierarchize(                     [Attribution].[Attribution].Members             )     ) ON ROWS     FROM [TradesCube];'+
//                    'SELECT NON EMPTY {         [Measures].[QTY.LONG],             [Measures].[QTY.SHORT],             [Measures].[QTY.NET],             [Measures].[QTY.GROSS],             [Measures].[VALUE.LONG],             [Measures].[VALUE.SHORT],             [Measures].[VALUE.NET],             [Measures].[VALUE.GROSS]     } ON COLUMNS,             NON EMPTY CrossJoin(             Hierarchize(                     [Source].[Source].Members             ),             Hierarchize(                     [Strategy].[Strategy].Members             )     ) ON ROWS     FROM [TradesCube];'+
//                    'SELECT NON EMPTY {                 [Measures].[QTY.LONG],             [Measures].[QTY.SHORT],             [Measures].[QTY.NET],             [Measures].[QTY.GROSS],             [Measures].[VALUE.LONG],             [Measures].[VALUE.SHORT],             [Measures].[VALUE.NET],             [Measures].[VALUE.GROSS]     } ON COLUMNS,             NON EMPTY CrossJoin(             Hierarchize(                     [Source].[Source].Members             ),             Hierarchize(                     [Aggression].[Aggression].Members             )     ) ON ROWS     FROM [TradesCube];'+
//                    'SELECT NON EMPTY {                 [Measures].[QTY.LONG],             [Measures].[QTY.SHORT],             [Measures].[QTY.NET],             [Measures].[QTY.GROSS],             [Measures].[VALUE.LONG],             [Measures].[VALUE.SHORT],             [Measures].[VALUE.NET],             [Measures].[VALUE.GROSS]     } ON COLUMNS,             CrossJoin(                     Hierarchize(                             [Source].[Source].Members                     ),                     [Security].[Sector].Members             ) ON ROWS     FROM [TradesCube];';

var queries = "SELECT NON EMPTY DrillDownLevel([Bookings].[Desk].[ALL].[AllMember]) ON ROWS FROM [EquityDerivativesCube]"
var wsUri = "ws://192.168.1.22:8080/socketQueryEngine";

function initWS() {
    setTimeout(testWebSocket(queries, new WebSocket(wsUri)),1000);
}

function testWebSocket(queryStr, websocket) {
    console.log(queryStr);
    websocket.onopen = function(evt) { 
       websocket.send(encodeURIComponent(queries));
    };
    websocket.onclose = function(evt) { 
        console.log("close");
    };
    websocket.onmessage = function(evt) { 
        var newData = eval('(' + evt.data + ')');
        console.log(newData);
    };
    websocket.onerror = function(evt) { 
        console.log("Error: "+evt.data);
    };
}

    // updates = JSON.parse(evt.data);
    // for (cellId in updates) {
    //     updates[cellId];
    // }

