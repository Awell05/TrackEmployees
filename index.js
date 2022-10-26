const inquirer = require('inquirer');
const initialQs = require('./initial_options');
const mysql = require('mysql2');
const cTable = require('console.table');
const { viewAllDepartments, viewAllRoles, viewAllEmployees } = require('./viewAll');


inquirer.prompt(initialQs).then((answer) => {
  switch (answer.initialSelection) {
    case "View all Departments":
      viewAllDepartments()
      break;
    case "View all Roles":
      viewAllRoles()
      break;
    case "View all Employees":
      viewAllEmployees()
      break;
  }
}
).catch((err) => {
  console.log(err);
});