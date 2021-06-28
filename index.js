const inquirer = require('inquirer');
const fs = require('fs');
//link lib files

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamMembers = [];

function startApp() {
    startHtml();
    addMember();

}

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
        .then(function ({ name, role, id, email }) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "GitHub username";
            } else if (role === "Intern") {
                roleInfo = "school name";
            } else {
                roleInfo = "office phone number";
            }
            inquirer.prompt([{
                type: 'input',
                name: 'roleInfo',
                message: `Enter your ${roleInfo}`,
            },

            {
                type: 'list',
                name: 'moreMembers',
                message: 'Would you like to add more team members?',
                choices: [
                    'yes',
                    'no'
                ],

            }
            ])
                .then(function ({ roleInfo, addMembers }) {
                    let newMember;
                    if (role === "Engineer") {
                        let newMember;
                        if (role === "Engineer") {
                            newMember = new Engineer(name, id, email, roleInfo);
                        } else if (role === "Intern") {
                            newMember = new Intern(name, id, email, roleInfo);
                        } else {
                            newMember = new Manager(name, id, email, roleInfo);
                        }
                        teamMembers.push(newMember);
                        addHtml(newMember)
                            .then(function () {
                                if (moreMembers === "yes") {
                                    addMember();
                                } else {
                                    finishHtml();
                                }
                            });

                    };
                });
    )
};