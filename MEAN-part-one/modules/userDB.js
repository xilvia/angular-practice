const mariadb = require('mariadb');
const pool = mariadb.createPool({
  user: 'root',
  password: 'root',
  database: 'colleague'
})


module.exports = class UserDB {
  constructor() {
    pool.getConnection().then(conn => this.conn = conn);
  }

  async login(user) {
    let sql = `
          SELECT * FROM colleagues 
          WHERE email = '${user.email}' 
              AND password = SHA1('${user.password}')
      `;
    let result = await this.conn.query(sql);
    return result;
  }

  async setUserToken(id, token) {
    let sql = `
      UPDATE colleagues SET token = '${token}' WHERE id = ${id}
      `;
    let result = await this.conn.query(sql);
    return true;
  }

  async checklogin(req) {
    if (!req.cookies.uuid) {
      return false;
    }

    let sql = `
      SELECT * FROM colleagues  WHERE token = '${req.cookies.uuid}'
      `;
    let result = await this.conn.query(sql);
    return result[0];
    // a query mindig tömböt ad vissza
    // azért [0], mert az maga a user az adataival
  }


  async readUser() {
    let sql = `
    SELECT * FROM colleagues
    `
    let result = await this.conn.query(sql);
    return result;
  }

  async readOneUser(id) {
    let sql = `
  SELECT * FROM colleagues
  WHERE id = ${id}
  `;
    let result = await this.conn.query(sql);
    return result;
  }

  async createUser(user) {
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
  async updateUser(user) {
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

  async deleteUser(id) {
    const sql = `
    DELETE FROM colleagues
    WHERE id=${id}
    `
    let result = await this.conn.query(sql);
    return result;
  }
};
