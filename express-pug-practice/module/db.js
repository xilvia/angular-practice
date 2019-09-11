const path = require('path');
const fs = require('fs');
const mariadb = require('mariadb');
const pool = mariadb.createPool({ database: 'shop', host: 'localhost', user: 'root', password: 'root', connectionLimit: 5 });



module.exports = class DB {
    constructor() {
        pool.getConnection().then(conn => this.conn = conn);
        // itt egy gyári bugot kezelünk, mert alapból a getconnection() mindig
        // újrakapcsolódik a szerverhez. viszont van egy connection limit
        // ezt küszöbölöm ki
        // ezen kívül még a product.js-ben kell a példányosítást a legelején megcsinálni:
        // const db = new DB

    }

    mockData() {
        return new Promise((resolve, reject) => {
            let filePath = path.join(__dirname, 'products.json');
            fs.readFile(filePath, 'utf8', (err, content) => {
                if (err) {
                    return reject(err);
                }
                resolve(JSON.parse(content));
            });
        });
    }

    table() {
        `
        CREATE TABLE products (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(100) NOT NULL DEFAULT '0',
            price INT NOT NULL DEFAULT 0,
            stock INT NOT NULL DEFAULT 0,
            manufacturer INT NOT NULL DEFAULT 0,
            active TINYINT NULL,
            insdate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
            PRIMARY KEY (id)
        )
        COMMENT='Tabler for products.'
        COLLATE='utf8_general_ci'
        `
    }

    async read(id) {
        let sql = `
        SELECT 
            p.id, 
            p.name, 
            p.price,
            p.stock, 
            p.active, 
            p.insdate, 
            m.name AS manufacturer, 
            m.contact AS contact	
        FROM 
            products p JOIN manufacturers m ON p.manufacturer = m.id 
        `;

        if (id) {
            sql += ` WHERE p.id = ${id}`;
        }

        let result = await this.conn.query(sql);
        return result;

    }



    async create(product) {
        let sql =
            `
        INSERT INTO products 
        (name, manufacturer, price, stock, active) 
        VALUES
        ('${product.name}', ${product.manufacturer}, ${product.price}, ${product.stock}, 1)
        `;

        let result = await this.conn.query(sql);
        return result;
    }



    async delete(id) {
        let sql = `
            DELETE FROM products WHERE id = ${id}
        `;
        let result = await this.conn.query(sql);
        return result;
    }


    async update(product) {
        let sql =
            `
        UPDATE products 
        SET 
            name = '${product.name}', 
            manufacturer = ${product.manufacturer}, 
            price = ${product.price}, 
            stock = ${product.stock},
            active = ${product.active}
        WHERE id = ${product.id}
        `;
        let result = await this.conn.query(sql);
        return result;
    }

    async readUser(id) {
        let sql = `
        SELECT 
            u.id, 
            u.name, 
            u.email,
            u.password, 
            u.token	
        FROM 
            users u
        `;

        if (id) {
            sql += ` WHERE u.id = ${id}`;
        }

        let result = await this.conn.query(sql);
        return result;

    }

    async createUser(user) {


        let sql =
            `
        INSERT INTO users 
        (name, email, password, token) 
        VALUES
        ('${user.name}', '${user.email}', SHA1('${user.password}'), '${user.token}')
        `;


        let result = await this.conn.query(sql);
        return result;
    }


    async deleteUser(id) {
        let sql = `
            DELETE FROM users WHERE id = ${id}
        `;
        let result = await this.conn.query(sql);
        return result;
    }


    async updateUser(user) {
        let sql =
            `
        UPDATE users 
        SET 
            name = '${user.name}', 
            email = '${user.email}', 
            password = '${user.password}', 
            token = '${user.token}'
        WHERE id = ${user.id}
        `;
        let result = await this.conn.query(sql);
        return result;
    }


};
