const mariadb = require('mariadb');
const pool = mariadb.createPool({ 
  user: 'root', 
  password: 'root', 
  database: 'colleague' })


module.exports = class DB {

  constructor() {
    pool.getConnection().then(conn => this.conn = conn)
  }

  async read() {
    let sql = `
    SELECT * FROM colleagues
    `
    let result = await this.conn.query(sql);
    return result;
  }

  async readOne(id) {
    let sql = `
  SELECT * FROM colleagues
  WHERE id = ${id}
  `;
    let result = await this.conn.query(sql);
    return result;
  }

  async create(user) {
    let sql =
      `
      INSERT INTO colleagues (name, job, salary, email, password, token)
      VALUES ('${user.name}', 
      '${user.job}',
      ${user.salary}, 
      '${user.email}', 
      SHA1('${user.password}'), 
      '${user.token}');
  `;

    let result = await this.conn.query(sql);
    return result;
  }
  async update(user) {
    let sql =
      `
    UPDATE colleagues 
    SET 
        name = '${user.name}', 
        job = '${user.job}', 
        salary = '${user.salary}', 
        email = '${user.email}',
        password ='${user.password}',
        token = '${user.token}'
        
    WHERE id = ${user.id}
    `;
    let result = await this.conn.query(sql);
    return result;
  }

  async delete(id) {
    const sql = `
    DELETE FROM colleagues
    WHERE id=${id}
    `
    let result = await this.conn.query(sql);
    return result;
  }
}