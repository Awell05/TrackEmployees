const inquirer = require('inquirer');
const initialQs = require('./initial_options');
// Import and require mysql2
const mysql = require('mysql2');
const cTable = require('console.table');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '!like2ChaCha',
      database: 'cms_db'
    },
    console.log(`Connected to the cms_db database.`)
  );

inquirer.prompt(initialQs).then((answer) => {
    // console.log(answer);
    switch(answer.initialSelection) {
        case "View all Departments":
                 const viewAllDepartments = () =>{
                   const departments = db.query('SELECT * FROM department', function (err, results) {
                        // console.log(results);
                        const table = cTable.getTable(results);
                        console.log(table);
                      });
                    return departments};

                    viewAllDepartments()
                    break;
        case "View all Roles":
              const viewAllRoles = () =>{
                const roles = db.query('SELECT * FROM role', function (err, results) {
                    const table = cTable.getTable(results);
                    console.log(table);
                  });
                return roles};
                viewAllRoles()
                break;
        case "View all Employees":
            const viewAllEmployees = () => {
                const employee = db.query('SELECT * FROM employee', function (err, results) {
                    const table = cTable.getTable(results);
                    console.log(table);
                  });
                  return employee};
                  viewAllEmployees()
                  break;
            }}
            ).catch((err) => {
                    console.log(err);
            });