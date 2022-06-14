const { db, mysql, sha1 } = require('../util.js');

module.exports = async(req, res) => {
    const email = req.body.email;
    const pseudo = req.body.pseudo;
    const password = req.body.password;
    const passwordConfirm = req.body.passwordconfirm;
    const passwordHash = sha1(password);

    if (password != passwordConfirm)
    {
        res.send("Les deux password ne sont pas identique, réessayez !");
        return;
    }

    // Test si il y a un email qui est déjà existant
    const sql = "SELECT email, pseudo FROM users WHERE pseudo = " + mysql.escape(pseudo);
    db.query(sql, async(err, resultQuery) => {
        if (err) throw err;
        else
        {
            if (resultQuery.length === 1)
            {
                res.send("Ce pseudo existe déjà !");
                return;
            }
        }
    });

    // Insert dans la DB un nouveau joueur - Crée un compte
    const sql2 = "INSERT INTO users (email, pseudo, password) VALUES (" + mysql.escape(email) + ', ' + mysql.escape(pseudo) + ', ' + mysql.escape(passwordHash) + ')';
    db.query(sql2, async(err, resultQuery) => {
        if (err) throw err;
        else res.send("Compte créer !");
    });
}