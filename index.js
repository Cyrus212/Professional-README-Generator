// Includes packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Array of questions for the user to input a value which will be saved as an answer
const questions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "projectName",
        message: "What is the name of your project?",
      },
      {
        type: "input",
        name: "description",
        message:
          "Please provide a short description explaining the what, why, and how of your project.",
      },
      {
        type: "input",
        name: "installation",
        message:
          "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
      },
      {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
      },
      {
        type: "input",
        name: "contributorsInfo",
        message:
          "Provide all collaborators and their Github links. *Do not include your information* ",
      },
      {
        type: "rawlist",
        name: "license",
        message:
          "Choose a license out of the list provided by entering the corresponding number.",
        choices: [
          "No License",
          "Apache License 2.0",
          "GNU General Public License v3.0",
          "MIT License",
          'BSD 2-Clause "Simplified" License',
          'BSD 2-Clause "New" or "Revised" License',
          "Boost Software License 1.0",
          "Creative Commons Zero v1.0 Universal",
          "Eclipse Public License 2.0",
          "GNU Affero General Public License v3.0",
          "GNU General Public License v2.0",
          "GNU Lesser General Public License v2.1",
          "Mozilla Public License 2.0",
          "The Unlicense",
        ],
      },
      {
        type: "input",
        name: "tests",
        message:
          "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
      },
      {
        type: "input",
        name: "github",
        message: "Provide your Github link.",
      },
      {
        type: "input",
        name: "email",
        message: "Provide your Email address.",
      },
    ])
    // Function to write README file
    // Uses the answer received to generate a README.md file
    .then((answers) => {
      const questionInputs = generateReadme(answers);

      fs.writeFile("README.md", questionInputs, (err) =>
        err ? console.log(err) : console.log("Successfully created README.md!")
      );
    });
};

// List of badges for the README.md file to input based off of the chosen license from the user
const licenseBadges = {
  "No License": "https://img.shields.io/badge/license-None-brightgreen",
  "Apache License 2.0":
    "https://img.shields.io/badge/license-Apache%202.0-brightgreen",
  "GNU General Public License v3.0":
    "https://img.shields.io/badge/license-GNU%20GPL%20v3.0-brightgreen",
  "MIT License": "https://img.shields.io/badge/license-MIT-brightgreen",
  'BSD 2-Clause "Simplified" License':
    "https://img.shields.io/badge/license-BSD%202-Clause%20Simplified-brightgreen",
  'BSD 2-Clause "New" or "Revised" License':
    "https://img.shields.io/badge/license-BSD%202-Clause%20New%20or%20Revised-brightgreen",
  "Boost Software License 1.0":
    "https://img.shields.io/badge/license-Boost%20Software%201.0-brightgreen",
  "Creative Commons Zero v1.0 Universal":
    "https://img.shields.io/badge/license-CC0%201.0%20Universal-brightgreen",
  "Eclipse Public License 2.0":
    "https://img.shields.io/badge/license-Eclipse%20Public%202.0-brightgreen",
  "GNU Affero General Public License v3.0":
    "https://img.shields.io/badge/license-GNU%20AGPL%20v3.0-brightgreen",
  "GNU General Public License v2.0":
    "https://img.shields.io/badge/license-GNU%20GPL%20v2.0-brightgreen",
  "GNU Lesser General Public License v2.1":
    "https://img.shields.io/badge/license-GNU%20LGPL%20v2.1-brightgreen",
  "Mozilla Public License 2.0":
    "https://img.shields.io/badge/license-Mozilla%20Public%202.0-brightgreen",
  "The Unlicense": "https://img.shields.io/badge/license-Unlicense-brightgreen",
};

// README.md template with answers passed in to display inside the finished README.md
const generateReadme = ({
  projectName,
  description,
  installation,
  usage,
  contributorsInfo,
  license,
  tests,
  github,
  email,
}) => {
  const licenseBadge = licenseBadges[license];

  return `
![badge](${licenseBadge})

# ${projectName}

## Table of Contents
1. [Description](#description)
1. [Installation](#installation)
1. [Usage](#usage)
1. [Credits](#credits)
1. [License](#license)
1. [Tests](#tests)
1. [Questions](#questions)

<a id = "description"></a>
## Description

${description}

<a id = "installation"></a>
## Installation

${installation}

<a id = "usage"></a>
## Usage

${usage}

<a id = "credits"></a>
## Credits

${contributorsInfo}

<a id = "license"></a>
## License

${license}

<a id = "tests"></a>
## Tests

${tests}

<a id = "questions"></a>
## Questions

Github: ${github}

For additional questions, contact me at: ${email}
`
};

// Function call to initialize app
questions();
