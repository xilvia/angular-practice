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

    
};
