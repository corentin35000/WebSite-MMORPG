const { db, mysql, sendMail, sha1 } = require('../util.js');

module.exports = async(req, res) => {
    const email = req.body.email;
    const pseudo = req.body.pseudo;
    const currentPassword = req.body.currentpassword;
    const newPassword = req.body.newpassword;
    const confirmNewPassword = req.body.confirmnewpassword;

    if (newPassword != confirmNewPassword)
    {
        res.send("Les deux mot de passe ne sont pas identique !")
    }

    const sql = "UPDATE users SET password = " + mysql.escape(newPassword) + " WHERE pseudo = " + mysql.escape(pseudo) + " AND password = " + mysql.escape(currentPassword);
    db.query(sql, async(err, resultQuery) => {
        if (err) throw err;
        else
        {
            console.log(resultQuery);
            sendMail(email, 'CHANGEMENT DE MOT DE PASSE', 'Voici le nouveau password : ' + newPassword);
            res.send("Changement de mot de passe éffectuer !");
        }
    });
}