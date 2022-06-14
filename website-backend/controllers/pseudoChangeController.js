const { db, mysql, sendMail } = require('../util.js');

module.exports = async(req, res) => {
    const email = req.body.email;
    const currentPseudo = req.body.currentpseudo;
    const newPseudo = req.body.newpseudo;

    // Vérifie si c'est pas déjà sont pseudo actuelle
    if (currentPseudo == newPseudo)
    {
        res.send("Ceci est le même pseudo !");
        return;
    }

    // Vérifie si sont nouveau pseudo existe déjà par un autre joueur
    const sql = "SELECT pseudo FROM users WHERE pseudo = " + mysql.escape(newPseudo);
    db.query(sql, async(err, resultQuery) => {
        if (err) throw err;
        else
        {
            console.log(resultQuery);
            if (resultQuery.length != 0)
            {
                res.send("Ce pseudo est déjà utiliser !");
                return;
            }
        }
    });

    // Si c'est OK on Update sont pseudo
    const sql2 = "UPDATE users SET pseudo = " + mysql.escape(newPseudo) + " WHERE pseudo = " + mysql.escape(currentPseudo);
    db.query(sql2, async(err, resultQuery) => {
        if (err) throw err;
        else
        {
            console.log(resultQuery);
            sendMail(mailOption(email, 'CHANGEMENT DE PSEUDO', 'Voici le nouveau pseudo du compte : ' + newPseudo));
            res.send("Changement de pseudo effectuer !");
        }
    });
}