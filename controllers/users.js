const pool = require("../db")

module.exports = {
    getUsers: (req, res) => {
        pool.query(
            'SELECT id, username, email, avatar, role FROM users', (err, results) => {
                if (err) { throw err; }
                res.send(results);
        });
    },
    getUserById: (req, res) => {
        pool.query(
            'SELECT id, username, email, avatar, role FROM users WHERE id=$1', [ id ], (err, results) => {
                if (err) { throw err; }
                res.send(results);
        });
    }
}