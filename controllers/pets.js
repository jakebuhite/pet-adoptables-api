const pool = require('../db/index');

module.exports = {
    getPetTypes: (req, res) => {
        pool.query(
            'SELECT * FROM pets', (err, results) => {
                if (err) { throw err; }
                res.send(results);
        });
    },
    getUsersPets: (req, res) => {
        pool.query(
            'SELECT * FROM userspets', (err, results) => {
                if (err) { throw err; }
                res.send(results);
        });
    },
    getPetById: (req, res) => {
        if (typeof req.params.id === undefined) {
            res.status(404).send('Pet not found.');
        } else {
            var petId = req.params.id; 
            pool.query(
                'SELECT * FROM userspets WHERE id=$1', [ petId ], (err, results) => {
                    if (err) { throw err; }
                    res.send(results);
            });
        }
    }
}