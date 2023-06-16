const dbPool = require('../config/database');

const getAllRestaurant = () => {
  const SQLQuery = 'SELECT * FROM tbl_namaresto';

  return dbPool.execute(SQLQuery);
}

const createNewRestaurant = (body) => {
  const SQLQuery = `INSERT INTO tbl_namaresto (name, address, phone_number) 
                    VALUES ('${body.name}', '${body.address}', '${body.phone_number}')`;

  return dbPool.execute(SQLQuery);
}

const updateRestaurant = (body, id) => {
  const SQLQuery = `UPDATE tbl_namaresto 
                    SET name='${body.name}', address='${body.address}', phone_number='${body.phone_number}'
                    WHERE id=${id}`;

  return dbPool.execute(SQLQuery);
}

const deleteRestaurant = (id) => {
  const SQLQuery = `DELETE FROM tbl_namaresto WHERE id=${id}`;

  return dbPool.execute(SQLQuery);
}

module.exports = {
  getAllRestaurant,
  createNewRestaurant,
  updateRestaurant,
  deleteRestaurant
}