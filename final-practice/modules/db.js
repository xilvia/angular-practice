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

  async readOne(id) {

    let sql = `
    
    SELECT * FROM employees 
    WHERE id=${id}
    `;

    let result = await this.conn.query(sql);
    return result;
  }
  async create(employee) {
    let sql =
      `
        INSERT INTO employees (name, department, email, password, token)
        VALUES ('${employee.name}', 
        ${employee.department}, 
        '${employee.email}', 
        SHA1('${employee.password}'), 
        '${employee.token}');
    `;

    let result = await this.conn.query(sql);
    return result;
  }

  async update(employee) {
    let sql =
      `
    UPDATE employees 
    SET 
        name = '${employee.name}', 
        department = '${employee.department}', 
        email = '${employee.email}',
        password ='${employee.password}',
        token = '${employee.token}'
        
    WHERE id = ${employee.id}
    `;
    let result = await this.conn.query(sql);
    return result;
  }


  async delete(id) {
    const sql = `
    DELETE FROM employees
    WHERE id=${id}
    `
    let result = await this.conn.query(sql);
    return result;
  }
}