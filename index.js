const inquirer = require('inquirer');

//link lib files
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

var teamMembers = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'role',
            message: 'What is your role?',
            choices: ['Employee, Engineer, Intern, Manager']
        },
        {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },

    ])
}