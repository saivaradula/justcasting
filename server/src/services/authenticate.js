const db = require('./db.service');
const helper = require('../utils/helper.util');
const config = require('../configs/general.config');

async function login(username, password) {

    const rows = await db.query(
        `SELECT id, name FROM users WHERE username = ? AND password = ?`,
        [username, password]
    );
    const data = helper.emptyOrRows(rows);

    return {
        data
    }
}

module.exports = {
    login
}