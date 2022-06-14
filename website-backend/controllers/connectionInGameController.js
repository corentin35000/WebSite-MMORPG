const { db, mysql, sha1 } = require('../util.js');

module.exports = async(req, res) => {
    const pseudo = "xxx";
    const password = "test35";
    const passwordHash = sha1(password);

    const sql = "SELECT pseudo, password FROM users WHERE pseudo = " + mysql.escape(pseudo) + ' AND password = ' + mysql.escape(passwordHash);
    db.query(sql, async(err, resultQuery) => {
        if (err) throw err;
        else
        {
            if (resultQuery.length === 0)
                res.send("Identifiant ou password incorrect !");
            else
            {
                let allServersToAccount = [];
                let i = 0;
                while(i < resultQuery.length)
                {
                    allServersToAccount.push(resultQuery[i]);

                    i++;
                }

                res.json(allServersToAccount);
            }
        }
    });
}