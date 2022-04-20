const inquirer = require('inquirer');
const readme = require('./src/readme');
const fs = require('fs');


console.log(readme);

// this app is to generate a readme file for the user 

// use inquirer to ask user q's
inquirer.prompt([
    {
        type: 'input',
        message:  'What is the title of your project?',
        name: 'title'
    }, 
    {
        type: 'input',
        message:  'What is the description of your project?',
        name: 'desc',
    },
    {
        type: 'input',
        message:  'How to install guide?',
        name: 'installation',
    },
    {
        type: 'list',
        message: "What license?",
        choices: [
            "MIT",
            "Apache-2.0",
            "GPL-3.0",
            "BSD-2-Clause",
            "BSD-3-Clause",
            "BSD-4-Clause",
        ],
        name: 'license',
    }



]).then(function(answers){

    console.log(answers);

    const readmeContent = readme.generateReadme(answers);

    // save the readme content to a Readme.md file
    fs.writeFileSync(__dirname + '/readme.md', readmeContent, 'utf8');
});


// title 

// description

// installation 

// license 

// test 