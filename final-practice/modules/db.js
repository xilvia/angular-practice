const mariadb = require('mariadb');
const pool = mariadb.createPool({
  database: 'employee',
  user: 'root',
  password: 'root',
  connectionLimit: 5
});

module.exports = class DB {

  constructor() {
    pool.getConnection().then(conn => this.conn = conn)
  }
  async read() {
    let sql = `
    SELECT * FROM employees
    `
    let result = await this.conn.query(sql);
    return result;
  }

  create() { }
  update() { }
  delete(id) {
    const sql = `
    DELETE FROM employees
    WHERE id=${id}
    `
    let result = await this.conn.query(sql);
    return result;
   }
}