// Server Express.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 4242;

// Server Sockets.io
const http = require('http');
const httpServer = http.createServer(app);
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
});

// Librairies externes
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const sha1 = require('js-sha1');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(jsonParser);
app.use(cors());

// Export modules for instance to express (app), socketio (io), sha1 (hashing password)
module.exports = { app, io, sha1 };

// Routes - Express.js
require('./routes/routes.js');

// "Route" for Socket.io
require('./routes/route_chat-socketio.js');

// Host + Port
httpServer.listen(port, () => {
    console.log("Ecoute sur l'adresse --> localhost:" + port);
});