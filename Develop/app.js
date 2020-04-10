const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");
const Employee = require("./employee")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
​
async function init() 
{
  try {
    // user prompts
    const { managerName } = await promptInitial();
    console.log("You entered the following: " + managerName);    
//    return writeFileAsync("Readme.md", generateReadme(githubUsername, projectTitle, description, installInfo, contributing, tests, license, usage, email));
  }
  catch (err) {
      console.log(err);
 function promptInitial() {
    return inquirer.prompt([
      {
        message: "What is your manager's name?",  
        type: "input",
        name: "managerName",
        validate: function validateManagerName(managerName) 
        {   return managerName !== "";  }}
/*      ,
        {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?"
        }
        ,
        {
        type: "input",
        name: "description",
        message: "What is a brief description of your project?"
        }
        ,
        {
        type:"input",
        name: "installInfo",
        message: "Installation instructions"
        }
        ,
        {
        type: "input",
        name: "contributing",
        message: "Who has worked on this with you?"
        }
        ,
        {
        type: "input",
        name: "tests",
        message: "Are there any tests for this project?"
        }
        ,
        {
        type: "checkbox",
        message: "What licenses are required?",
        name: "license",
        choices: ["None",
                  "Apache License 2.0",
                  "GNU General Public License 3.0",
                  "MIT License"
                ]
        }
        ,
        {
        type: "input",
        name: "usage",
        message: "Enter the command to run this program"
        }   */
      ]);
  }

  init();