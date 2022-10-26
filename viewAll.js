
const mysql = require('mysql2');
const cTable = require('console.table');
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '!like2ChaCha',
    database: 'cms_db'
  }
);


const viewAllDepartments = () => {
  const departments = db.query('SELECT * FROM department', function (err, results) {
    const table = cTable.getTable(results);
    console.log(table);
  });
  return departments
};


const viewAllRoles = () => {
  const roles = db.query('SELECT * FROM role', function (err, results) {
    const table = cTable.getTable(results);
    console.log(table);
  });
  return roles
};


const viewAllEmployees = () => {
  const employee = db.query('SELECT * FROM employee', function (err, results) {
    const table = cTable.getTable(results);
    console.log(table);
  });
  return employee
};


module.exports = { viewAllDepartments, viewAllRoles, viewAllEmployees };