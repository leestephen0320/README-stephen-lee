// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

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
    
    //write file code first part is the name of the file
    fs.writeFile(`${fileName.toLowerCase().split(' ').join(' ')}.md`,
        // READ ME code goes here
        generateMarkdown(data),
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
                choices: ['Apache License 2.0', 'GNU General Public License v3.0','MIT License','ISC License','']
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

