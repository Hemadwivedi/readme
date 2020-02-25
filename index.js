var inquirer = require('inquirer');
var api = require('./utils/api');
var markdownGenerator = require('./utils/generateMarkdown');
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [{
        type: "input",
        message: "Enter your github username :",
        name: "username"
    },
    {
        type: "input",
        message: "Enter your project title :",
        name: "title"
    },
    {
        type: "input",
        message: "Enter your project discription : ",
        name: "description"
    },
    {
        type: "input",
        message: "Enter your installation process :",
        name: "install"
    },

    {
        type: "input",
        message: "Enter the project usage :",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter any tests you are running for your project:",
        name: "tests"
    },

    {
        type: "input",
        message: "Add other contributors besides yourself, if any:",
        name: "contribute"
    },

    {
        type: "input",
        message: "Enter the licenses used for this project :",
        name: "license"
    }
];

function writeToFile(fileName, data) {
    return writeFileAsync(fileName, data)
        .then( () => console.log("READEME.md Created Successfully!!!"));
}

function transformTemplateObject(answers,user){
    return {
        projectTitle: answers.title,
        description: answers.description,
        installation: answers.install,
        usage: answers.usage,
        license: answers.license,
        contribute: answers.contribute,
        tests: answers.tests,
        avatarUrl: user.avatar_url,
        email: user.email,
        username: answers.username,
        githubUrl: user.repos_url
    }
}

function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const userData = api.getUser(answers.username);
            return userData.then(user => {
                return transformTemplateObject(answers,user)
            });
        })
        .then(data => {
            return markdownGenerator(data);
        }).then(redertemplate => {
            return writeToFile("README.md", redertemplate);
        })
        .catch(error => {
            console.log(`Error Received ${error.message}`)
            throw error;
        });
}

init();