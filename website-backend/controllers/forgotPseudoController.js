const { db, mysql, sendMail } = require('../util.js');

module.exports = async(req, res) => {
    const email = req.body.email;

    const sql = "SELECT pseudo,email FROM users WHERE email = " + mysql.escape(email);
    db.query(sql, async(err, resultQuery) => {
        if (err) throw err;
        else
        {
            const pseudo = resultQuery[0].pseudo;
            sendMail(email, 'OUBLIE DE PSEUDO', 'Voici le pseudo : ' + pseudo);

            res.send("" +
                "Si votre nom d'utilisateur correspond à un compte existant, nous vous enverrons un e-mail de réinitialisation de mot de passe dans quelques minutes. " +
                "Si vous n'avez pas reçu d'e-mail, vérifiez votre dossier de courrier indésirable ou contactez le support." +
            "");
        }
    });
}