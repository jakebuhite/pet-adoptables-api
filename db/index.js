const dbConfig = require('../config/database');
const { Pool } = require("pg");

const pool = new Pool(dbConfig);

module.exports = pool;