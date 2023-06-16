const dbPool = require('../config/database');

const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM tbl_account';

  return dbPool.execute(SQLQuery);
}

const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO tbl_account (name, username, email, password, number, address) 
                    VALUES ('${body.name}', '${body.username}', '${body.email}','${body.password}','${body.number}','${body.address}')`;

  return dbPool.execute(SQLQuery);
}

const updateUser = (body, id) => {
  const SQLQuery = `UPDATE tbl_account 
                    SET name='${body.name}', username='${body.username}', email='${body.email}', password='${body.password}', number='${body.number}', address='${body.address}'
                    WHERE id=${id}`;

  return dbPool.execute(SQLQuery);
}

const deleteUser = (id) => {
  const SQLQuery = `DELETE FROM tbl_account WHERE id=${id}`;

  return dbPool.execute(SQLQuery);
}

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser
}