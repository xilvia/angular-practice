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


    table() { // erre a metódusra itt most igazán nincs szükség, de létrehozni így lehetne egy táblát
        `
    CREATE TABLE products (
        ID INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL DEFAULT '0',
        price INT NOT NULL DEFAULT 0,
        stock INT NOT NULL DEFAULT 0,
        manufacturer INT NOT NULL DEFAULT 0,
        active TINYINT NULL DEFAULT NULL,
        insdate TIMESTAMP NOT NULL DEFAULT 0 ON UPDATE CURRENT_TIMESTAMP(),
        PRIMARY KEY (ID)
    )
    COMMENT='table for products'
    COLLATE='utf8_general_ci'
    `
    }
    // csak kezdő és záró backtick legyen
    async read() {
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
products p JOIN manufacturers m ON  p.manufacturer = m.id
`;


        let result = await this.conn.query(sql); // elküldöm a mariadb-nek ezt a lekérdezést
        return result;

    }
};