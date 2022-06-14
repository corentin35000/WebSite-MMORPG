const glob = require("glob");

module.exports = async(req, res) => {
    getDirectories('jeu/data', async (err, resultAllFilesDir) => {
        if (err)
            console.log('Error', err);
        else {
            console.log(resultAllFilesDir);
            res.json(resultAllFilesDir);
        }
    });
}

const getDirectories = (src, callback) => {
    glob(src + '/**/*', callback);
};