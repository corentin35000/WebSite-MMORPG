const { sendMail } = require('../util.js');

module.exports = async(req, res) => {
    const emailUser = req.body.email;
    const sujetObjet = req.body.sujetobjet;
    const textEmail = req.body.textemail;

    sendMail("support@seatyrants.com", 'EMAIL SUPPORT [CLIENT : ' + emailUser + "] - " + sujetObjet, textEmail);
    res.send("Email envoyer au support !");
}