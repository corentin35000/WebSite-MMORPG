const { db, mysql, sha1 } = require('../util.js');

module.exports = async(req, res) => {
    const pseudo = req.body.pseudo;
    const password = req.body.password;
    const passwordHash = sha1(password);

    const sql = "SELECT pseudo, password FROM users WHERE pseudo = " + mysql.escape(pseudo) + ' AND password = ' + mysql.escape(passwordHash);
    db.query(sql, async(err, resultQuery) => {
        if (err) throw err;
        else
        {
            if (resultQuery.length === 0)
                res.send("Identifiant ou password incorrect !");
            else
                res.send("Connection success !");
        }
    });
}