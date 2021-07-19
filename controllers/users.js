const pool = require("../db")

module.exports = {
    getUsers: (req, res) => {
        pool.query(
            'SELECT id, username, email, avatar, role FROM users', (err, results) => {
                if (err) { throw err; }
                res.status(200).send(results);
        });
    },
    getUserById: (req, res) => {
        pool.query(
            'SELECT id, username, email, avatar, role FROM users WHERE id=$1', [ id ], (err, results) => {
                if (err) { throw err; }
                res.status(200).send(results);
        });
    },
    createUser: (req, res) => {
        pool.query(
            'INSERT INTO users VALUES ($1, $2, $3, $4)', [ username, email, password, avatar ], (err, results) => {
                if (err) { throw err; }
                res.status(201).send('User created successfully.')
        });
    },
    deleteUser: (req, res) => {
        var userId = req.params.id;
        pool.query(
            'DELETE FROM users WHERE id=$1', [ userId ], (err, results) => {
                if (err) { throw err; }
                res.status(200).send('User has been deleted.');
        });
    },
    editUser: (req, res) => {
        var { username, email, password, avatar } = req.body;
        var userId = req.params.id;
        pool.query(
            'UPDATE users SET username=$1, email=$2, password=$3, avatar=$4 WHERE id=$5', [ username, email, password, avatar, userId ], (err, results) => {
                if (err) { throw err; }
                res.status(200).send('User has been modified.');
        });
    }
}