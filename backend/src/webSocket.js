
export default function(wss){
    return (ws) => {
        ws.on('message', (message) => {
            //log the received message and send it back to the client
            console.log('received: %s', message);
            wss.clients.forEach(client => {
                client.send(message)
            });
        });
    }
}