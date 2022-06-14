const { db, mysql } = require('../util.js');

module.exports = async(req, res) => {
    const service = req.body.service; // Sois client, server, launcher
    const version = req.body.version; // Le numéro de version

    const sql = "UPDATE statusservices SET version = " + mysql.escape(version) + " WHERE type = " + mysql.escape(service); // Mettre la bonne table pour récupèrer la version du Client stocker sur le server web.
    db.query(sql, async(err, resultQuery) => {
        if (err) throw err;
        else res.json(resultQuery);
    });
}