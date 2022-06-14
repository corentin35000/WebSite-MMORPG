const { db, mysql, sendMail } = require('../util.js');

module.exports = async(req, res) => {
    const currentEmail = req.body.currentemail;
    const newEmail = req.body.newemail;

    if (currentEmail == newEmail)
    {
        res.send("Ce compte est déjà relier à cette email");
        return;
    }

    const sql = "UPDATE users SET email = " + mysql.escape(newEmail) + " WHERE email = " + mysql.escape(currentEmail);
    db.query(sql, async(err, resultQuery) => {
        if (err) throw err;
        else
        {
            console.log(resultQuery);
            sendMail(currentEmail, 'CHANGEMENT EMAIL', 'Voici le nouveau EMAIL du compte : ' + newEmail);
            res.send("Changement d'email effectuer !");
        }
    });
}