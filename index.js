// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Write a description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Please provide instructions for installing your project.",
        name: "install",
    },
    {
        type: "input",
        message: "How does one use your project?",
        name: "directions",
    },
    {
        type: "input",
        message: "Descripbe the guidelines for contributing to your project.",
        name: "contribution",
    },
    {
        type: "input",
        message: "How does one go about testing your project?",
        name: "testing",
    },
    {
        type: "list",
        message: "What license do you choose for your project?",
        name: "license",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
