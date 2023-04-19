// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe= require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the name of your Project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Can you provide a short description explaining the what, why, and how of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How do you use this project?',
        name: 'instruction',
    },
    {
        type: 'input',
        message: 'Can you list your collaborators?',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'What license did you use?',
        choices: 
        [
            'MIT', 
            'Apache license 2.0', 
            'ISC License (ISC)', 
            'GNU GPL v3', 
            'None'
        ],
        name: 'license',
    },
    {
        type: 'input',
        message: 'How can other developers contribute to this project?',
        name: 'contributeGuidelines',
    },
    {
        type: 'input',
        message: 'Are there any tests for your application with examples?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Please input your Github Username.',
        name: 'github',
    }, {
        type: 'input',
        message: 'Please input your email.',
        name: 'email',
    },
];

inquirer.prompt(questions)
    .then((answers) => {
        const readmeContent = generateReadMe(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('generating your high quality readMe!')
        )
    });

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

