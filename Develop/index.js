// TODO: Include packages needed for this application
const fs=require('fs');
// const { default: inquirer } = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
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
        type: 'input',
        message: 'What license did you use?',
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

inquirer
    .prompt([questions])
    .then((answers) => {
        const readmeContent=generateReadMe(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('generating your high quality readMe!')
        )
    })

// TODO: Create a function to write README file
const generateReadMe=({title,description,installation,instruction,credits,license,contributeGuidelines,test,github,email}) => 
`
# ${title}

## Description

${description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

${license}


## How to Contribute

${contributeGuidelines}

## Tests

${test}

## Questions

If you have any questions you can contact me through:

Github: Github.com/${github}

Email: ${email}

`

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
