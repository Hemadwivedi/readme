var inquirer = require('inquirer');
var api=require('./utils/api');
let ejs = require('ejs');

const questions = [{
        type: "input",
        message: "What is your github username?",
        name: "username"
    },
   /* {
        type: "input",
        message: "What is the project title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the installation process?",
        name: "install"
    },
    {
        type: "input",
        message: "Explain how to run your project.",
        name: "runproject"
    },
    {
        type: "input",
        message: "What is the usage of this project?",
        name: "usage"
    },
    {
        type: "input",
        message: "Add other contributors besides yourself, if any:",
        name: "credits"
    },
    {
        type: "input",
        message: "What are the licenses used for this project?",
        name: "license"
    }*/
];

function writeToFile(fileName, data) {

}

function init() {
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<title><%= people.join(", "); %></title>', {people: people});
    console.log(html);
    inquirer
        .prompt(questions)
        .then(answers => {
            debugger
            console.log(answers);
            api.getUser(answers.username)
        });
}

init();