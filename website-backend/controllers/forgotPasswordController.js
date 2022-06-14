const { db, mysql, sendMail } = require('../util.js');

module.exports = async(req, res) => {
    const pseudo = req.body.pseudo;

    const sql = "SELECT pseudo,email,password FROM users WHERE pseudo = " + mysql.escape(pseudo);
    db.query(sql, async(err, resultQuery) => {
        if (err) throw err;
        else
        {
            const email = resultQuery[0].email;
            const password = resultQuery[0].password;

            sendMail(email, 'OUBLIE DE MOT DE PASSE', 'Voici le password : ' + password);

            res.send("" +
                "Si votre nom d'utilisateur correspond à un compte existant, nous vous enverrons un e-mail de réinitialisation de mot de passe dans quelques minutes. " +
                "Si vous n'avez pas reçu d'e-mail, vérifiez votre dossier de courrier indésirable ou contactez le support." +
            "");
        }
    });
}