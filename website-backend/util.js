const nodemailer = require('nodemailer');
const mysql = require('mysql');
const { sha1 } = require('./server.js');

// Node mailer
const transporter = nodemailer.createTransport({
    host: "pro2.mail.ovh.net",
    auth: {
        user: 'support@seatyrants.com',
        pass: 'Marylene59'
    }
});

const mailOption = (pTo, pSubject, pText) => {
    const mailOptions = {
        from: 'support@seatyrants.com',
        to: pTo,
        subject: pSubject,
        html: pText
        /*from: 'support@seatyrants.com',
        to: 'shoutteur@hotmail.fr', // Pour envoyer a plusieurs destinataire séparer de virgule.
        subject: 'Object EMAIL',
        text: 'Bonjour, test email' // ou pour envoyer du HTML -> html: '<h1>Welcome</h1><p>That was easy!</p>'*/
    };

    return mailOptions;
}

const sendMail = (pTo, pSubject, pText) => {
    transporter.sendMail(mailOption(pTo, pSubject, pText), (error, info) => {
        if (error)
            console.log(error);
        else {
            console.log('Email sent: ' + info.response);
            return info.response;
        }
    });
}



// Connection to Database MySQL Private OVH for Node.js
const db = mysql.createConnection({
    host: "rc56529-002.eu.clouddb.ovh.net",
    port: 35902,
    user: "corentin35",
    password: "Marylene59",
    database: "seatyrants"
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to DB MySQL !");
});



// Mise à jour des badgePVE et PVP -> MAJ toute les 24H00
const majBadgeToPlayer = () => {
    // Met à jour les badgePVE en solo par rapport a leur PE.
    const sql = "SELECT pseudo,pe FROM users ORDER BY pe DESC";
    db.query(sql, async(err, resultQuery) => {
        if (err) throw err;
        else {
            let userClassementPVE = await resultQuery; // Récupèrer le classement des joueurs
                                                       // l'index de chaque key c'est le classement de la personne (ex: userClassementPVE[0] c'est le premier du classement)
            let badgePVE;

            for (let i = 0; i < userClassementPVE.length; i++)
            {
                if (i === 0) badgePVE = 1; // Si c'est le premier du classement, le premier badge. (qui sera unique au premier)
                else badgePVE = 3;
                // faire par exemple ensuite pour le 2eme badge mettre que 5% des joueurs.

                const sql = "UPDATE users SET badgePVE = " + mysql.escape(parseInt(badgePVE)) + " WHERE pseudo = " + mysql.escape(userClassementPVE[i].pseudo);
                db.query(sql, async(err, resultQuery) => {
                    if (err) throw err;
                    //else console.log(resultQuery);
                });
            }
        }
    });

    // Met à jour les badgePVP en solo par rapport a leur points de combat.
    const sql2 = "SELECT pseudo,points_combat FROM users ORDER BY points_combat DESC";
    db.query(sql2, async(err, resultQuery) => {
        if (err) throw err;
        else {
            let userClassementPVP = await resultQuery; // l'index de chaque key c'est le classement de la personne (ex: index[0] c'est le premier du classement)
            let badgePVP;

            for (let i = 0; i < userClassementPVP.length; i++)
            {
                if (i === 0) badgePVP = 1; // Si c'est le premier du classement, le premier badge. (qui sera unique au premier)
                else badgePVP = 3;
                // faire par exemple ensuite pour le 2eme badge mettre que 5% des joueurs.

                const sql = "UPDATE users SET badgePVP = " + mysql.escape(parseInt(badgePVP)) + " WHERE pseudo = " + mysql.escape(userClassementPVP[i].pseudo);
                db.query(sql, async(err, resultQuery) => {
                    if (err) throw err;
                    //else console.log(resultQuery);
                });
            }
        }
    });
}

// Lors de l'initialisation du server web une mise à jour est faite PUIS ENSUITE toute les 24H00
majBadgeToPlayer();
setInterval(() => {
    majBadgeToPlayer();
}, 1000 * 60 * 60 * 24);

module.exports = { db, transporter, mysql, sendMail, sha1 };