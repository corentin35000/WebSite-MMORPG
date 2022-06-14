const { db } = require('../util.js');

module.exports = async(req, res) => {
    const sql = "SELECT type,status FROM statusservices";
    db.query(sql, async(err, resultQuery) => {
        if (err) throw err;
        else res.json(resultQuery);
    });
}