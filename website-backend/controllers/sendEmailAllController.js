const { db, sendMail } = require('../util.js');

module.exports = async(req, res) => {
    const sujetObject = req.body.sujetobject;
    const textEmail =  req.body.textemail;

    const sql = "SELECT email FROM users";
    db.query(sql, async(err, resultQuery) => {
        if (err) throw err;
        else
        {
            let listAllClients = "";
            let i = 0;
            while (i < resultQuery.length)
            {
                listAllClients += resultQuery[i].email + ', ';
                i++;
            }

            sendMail(listAllClients, sujetObject, textEmail);
            res.send("Email envoyer à tout les clients !");
        }
    });
}