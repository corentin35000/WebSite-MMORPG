const { db } = require('../util.js');

module.exports = async(req, res) => {
    const sql = "SELECT * FROM statusservices"; // Mettre la bonne table pour récupèrer la version du Client stocker sur le server web.
    db.query(sql, async(err, resultQuery) => {
        if (err) throw err;
        else res.json(resultQuery);
    });
}