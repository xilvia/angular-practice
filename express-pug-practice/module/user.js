const path = require('path');
const fs = require('fs');
const mariadb = require('mariadb');
const pool = mariadb.createPool({ database: 'shop', user: 'root', password: 'root', connectionLimit: 5 });

module.exports = class DB {
    constructor() {
        pool.getConnection().then(conn => this.conn = conn);
    }

    async login(user) {
        let sql = `
            SELECT * FROM users 
            WHERE email = '${user.email}' 
                AND password = SHA1('${user.password}')
        `;
        let result = await this.conn.query(sql);
        return result;
    }

    async setUserToken(id, token) {
        let sql = `
        UPDATE users SET token = '${token}' WHERE id = ${id}
        `;
        let result = await this.conn.query(sql);
        return true;
    }

    async checklogin(req) {
        if (!req.cookies.uuid) {
            return false;
        }

        let sql = `
        SELECT * FROM users WHERE token = '${req.cookies.uuid}'
        `;
        let result = await this.conn.query(sql);
        return result[0]; 
        // a query mindig tömböt ad vissza
        // azért [0], mert az maga a user az adataival
    }


};
