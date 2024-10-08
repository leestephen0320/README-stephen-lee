// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeLink='';
  // code to get image link for the badge for its resepctive license
  switch(license) {
      case 'Apache License 2.0':
          return badgeLink='[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
          break;
      case 'GNU General Public License v3.0':
          return badgeLink='[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
          break;
      case 'MIT License':
          return badgeLink='[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)';
          break;
      case 'ISC License':
          return badgeLink='[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
          break;
      default: 
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink='';
  switch(license) {
      case 'Apache License 2.0':
          licenseLink='https://opensource.org/licenses/Apache-2.0';
          break;
      case 'GNU General Public License v3.0':
          licenseLink='https://www.gnu.org/licenses/gpl-3.0';
          break;
      case 'MIT License':
          licenseLink='https://opensource.org/licenses/MIT';
          break;
      case 'ISC License':
          licenseLink='https://opensource.org/licenses/ISC';
          break;    
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license!==''){
    return `Distributed under the ${license}.`;
  } else{
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectTitle}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license) ${renderLicenseBadge(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

GitHub profile: ${data.userGitHub}

If you have any further questions, please contact me @ ${data.userEmail}

`;
}

export default generateMarkdown;
