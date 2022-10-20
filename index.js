const inquirer = require('inquirer');
const initialQs = require('./initial_options');

inquirer.prompt(initialQs).then((answer) => {
    console.log(answer);
});


