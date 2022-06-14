const { db, mysql } = require('../util.js');

module.exports = async(req, res) => {
    const pseudo = req.body.pseudo;
    const bannedTime = req.body.bannedTime;
    const boolBan = req.body.boolban; // Si boolban = true ALORS c'est pour banir si c'est = false alors c'est pour DEBAN.

    let sql;
    if (boolBan === true)
    {
        // Bannir un joueur
        sql = "UPDATE users SET banned = " + mysql.escape(true) + ", bannedTime = " + mysql.escape(bannedTime) + ' WHERE pseudo = ' + mysql.escape(pseudo);
    }
    else
    {
        // Enlever le ban d'un joueur.
        sql = "UPDATE users SET banned = " + mysql.escape(false) + ", bannedTime = " + mysql.escape(null) + ' WHERE pseudo = ' + mysql.escape(pseudo);
    }

    db.query(sql, async(err, resultQuery) => {
        if (err) throw err;
        else res.send("OK");
    });
}