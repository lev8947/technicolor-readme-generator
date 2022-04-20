const inquirer = require('inquirer');
const readme = require('./readme');
const fs = require('fs');

// ask user questions to generate read me

inquirer.prompt([
    // title input
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projecttitle',
    },
    // description input
    {
        type: 'input',
        message: 'What is the description of your project? Why did you build this project? What problem does it solve? What did you learn?',
        name: 'projectdescription',
    },
    // license selection
    {
        type: 'list',
        message: 'Which license would you like your project to have?',
        choices: [
            'GNU GPLv3',
            'MIT',
            'Unlicense',
        ],
        name: 'license',
    },

    // installation instruction input
    {
        type: 'input',
        message: 'What steps are required to install your project?',
        name: 'installation',
    },

    // usage information input
    {
        type: 'input',
        message: 'What steps are required to use your project?',
        name: 'usage',
    },

    // contribution guidelines - request git hub username input
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'contribute',
    },

    // questions - request project creator's email
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    // test instructions
    {
        type: 'input',
        message: 'Enter test examples here',
        name: 'test',
    },
])
// put answers from here into readme file
    .then(function (answers) {
        console.log(answers);
        const readmeData = readme.generateReadme(answers);

        // save readme data in readme.md file
        fs.writeFileSync(__dirname + '/readme.md', readmeData, 'utf-8');
    });