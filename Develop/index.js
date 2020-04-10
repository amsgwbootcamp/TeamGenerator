const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
var teamArray = [];

var continueLoop = true;


async function init() 
{
  try {
    // user prompts
    const { managerName, managerEmail, officeNumber } = await promptInitial();
    console.log("Name: " + managerName + "\n" + "Email: " + managerEmail + "\n" + "Office Number: " + officeNumber);
    
    while (continueLoop)
    {
        const { option } = await promptChoice();
        console.log(option);
        switch(option)
        {
            case "Engineer":
                console.log("you choose Engineer");
                break;
        
            case "Intern":
                console.log("you choose Intern");
                break;

            default:
                continueLoop = false;
                break;    
        }
    }
    console.log("you have dropped out of the loop");
//  return writeFileAsync("Readme.md", generateReadme(githubUsername, projectTitle, description, installInfo, contributing, tests, license, usage, email));
  }
  catch (err) {
      console.log(err);
  }
}  

function promptInitial() {
    return inquirer.prompt
    (
      [
        {
        message: "What is your manager's name?",  
        type: "input",
        name: "managerName",
        validate: function validateManagerName(managerName) 
        {   return managerName !== "";  }
        },
        {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?"
        }
        ,
        {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?"
        }
    ]);
}   

function promptChoice() {
    return inquirer.prompt
    (
      [
        {
        message: "Who do you want to enter next?",  
        type: "list",
        name: "option",
        choices: ["Engineer", "Intern", "I'm finished"]
        }
      ]
    );
}   

init();