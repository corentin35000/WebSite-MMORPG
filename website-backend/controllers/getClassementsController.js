const { db } = require('../util.js');

module.exports = async(req, res) => {
    let classements = [];

    // Request get Users to Classement PVE
    const sql = "SELECT pseudo,pe FROM users ORDER BY pe DESC";
    db.query(sql, async(err, resultQuery) => {
        if (err) throw err;
        else
        {
            await classements.push(resultQuery);
        }
    });

    // Request get Users to Classement PVP
    const sql2 = "SELECT pseudo,points_combat FROM users ORDER BY points_combat DESC";
    db.query(sql2, async(err, resultQuery) => {
        if (err) throw err;
        else
        {
            await classements.push(resultQuery);
            res.json(classements); // Retourne les classements du : PVE/PVP en solo -> trier du 1er jusqu'aux dernier
        }
    });
}