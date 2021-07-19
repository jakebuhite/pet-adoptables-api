const pool = require('../db/index');

module.exports = {
    getPetTypes: (req, res) => {
        pool.query(
            'SELECT * FROM pets', (err, results) => {
                if (err) { throw err; }
                res.status(200).send(results);
        });
    },
    getUsersPets: (req, res) => {
        pool.query(
            'SELECT * FROM userspets', (err, results) => {
                if (err) { throw err; }
                res.status(200).send(results);
        });
    },
    getPetById: (req, res) => {
        var petId = req.params.id; 
        pool.query(
            'SELECT * FROM userspets WHERE id=$1', [ petId ], (err, results) => {
                if (err) { throw err; }
                res.status(200).send(results);
        });
    },
    createPet: (req, res) => {
        var { petType, ownerId } = req.body;
        pool.query(
            'INSERT INTO userspets VALUES ($1, $2)', [ petType, ownerId ], (err, results) => {
                if (err) { throw err; }
                res.status(201).send('Pet created successfully.');
        });
    },
    deletePet: (req, res) => {
        var petId = req.params.id;
        pool.query(
          'DELETE FROM userspets WHERE id=$1', [ petId ], (err, results) => {
              if (err) { throw err; }
              res.status(200).send('Pet has been deleted.');
        }); 
    },
    editPet: (req, res) => {
        var petId = req.params.id;
        var { petType, ownerId } = req.body;
        pool.query(
            'UPDATE userspets SET pet_type=$1, owner_id=$2 WHERE id=$3', [ petType, ownerId, petId ], (err, results) => {
                if (err) { throw err; }
                res.status(200).send('Pet has been modified');
        });
    }
}