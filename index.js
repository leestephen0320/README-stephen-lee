// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    'What is your project title?',
    'Provide a short description explaining the what, why, and how of your project.',
    'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    'Provide instructions and examples for use.',
    'Provide the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).',
    'List your collaborators, if any, with links to their GitHub profiles.',
    'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
    'Please provide a GitHub porfile link.',
    'Please provide your email.'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // initialize badge image link
    let badgeLink='';
    // code to get image link for the badge for its resepctive license
    switch(data.license) {
        case 'Apache License 2.0':
            badgeLink='[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'GNU General Public License v3.0':
            badgeLink='[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
        case 'MIT License':
            badgeLink='[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'ISC License':
            badgeLink='[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
            break;
    }

    //write file code first part is the name of the file
    fs.writeFile(`${fileName.toLowerCase().split(' ').join(' ')}.md`,
        // READ ME code goes here
`
# ${data.projectTitle}

${badgeLink}

## Description

${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license) ${badgeLink}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

Distributed under the ${data.license}. 

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

GitHub profile: ${data.userGitHub}

If you have any further questions, please contact me @ ${data.userEmail}


`,
        // error part
        (err) => 
            err ? console.error(err) : console.log('Success!') 
        )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'projectTitle'
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description'
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation'
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage'
            },
            {
                type: 'list',
                message: questions[4],
                name: 'license',
                choices: ['Apache License 2.0', 'GNU General Public License v3.0','MIT License','ISC License']
            },
            {
                type: 'input',
                message: questions[5],
                name: 'contributing'
            },
            {
                type: 'input',
                message: questions[6],
                name: 'tests'
            },
            {
                type: 'input',
                message: questions[7],
                name: 'userGitHub'
            },
            {
                type: 'input',
                message: questions[8],
                name: 'userEmail'
            },
        ])
        .then((data) => {
            writeToFile(data.projectTitle,data)
        })
}

// Function call to initialize app
init();

