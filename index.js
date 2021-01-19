const WebSocket = require('ws');

const app = new WebSocket.Server({
  port: 81
})

let client = []

function broadcast(clientList, msgToBroadcast) {
  clientList.forEach(function (client) {
    client.send(msgToBroadcast);
  })
}

app.on('connection', function (wsc, req) {
  console.log("connection made!");
  clients.push(wsc);

wsc.on('message', function(message) {
  console.log(message);
  broadcast(clients, message);
 });

})
