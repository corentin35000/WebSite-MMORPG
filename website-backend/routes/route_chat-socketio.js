const { io } = require('../server.js');

let users = [];
let admins = []
let modos = [];
let numberUsers = 0;

module.exports = io.on("connection", (socket) => {
    socket.on("inscriptionChatClient", (data) => {
        console.log('Connexion de : ', data.nom);

        users[socket.id] = data; // Push les données de la personne qui viens de se connecté.
        numberUsers += 1; // +1 personne connecté

        data.socketId = socket.id;
        socket.join(socket.id); // Create Room for Client is connected.

        console.log("Les personnes connectés : ", users);

        socket.emit("getIdSocket", socket.id)
        io.emit("drawUsersConnected", { donnees: data, numberUsers: numberUsers }); // Envoie coté admin le nombre d'utilisateur connectées.
    });


    socket.on("adminRejoinRoomClient", (data) => {
        socket.join(data);
    });

    socket.on("chatAdmin", (data) => {
        io.sockets.in(data.conversationCurrent).emit('responseAdmin', data.message);
    });

    socket.on("chatClient", (data) => {
        io.sockets.in(data.socketID).emit('responseClient', data.message);
    });


    socket.on("disconnect", (reason) => {
        if (users[socket.id] !== undefined)
        {
            console.log('Deconnexion de : ', users[socket.id]);
            delete users[socket.id] // Supprime le pseudo de la personne qui viens de se déconnecter.
            numberUsers -= 1; // -1 personne connecté

            // ON REMET A JOUR LA LISTE DE PERSONNE CONNECTER (LEUR PSEUDO) + ON MET A JOUR LE NOMBRE DE USER CONNECTER à TOUT LES CLIENTS.
            io.emit("drawUsersMAJForDisconnected", { numberUsers: numberUsers, socketID: socket.id}); // Envoie cote admin le nombre d'utilisateur connectées pour mettre a jour
        }
    });
});

