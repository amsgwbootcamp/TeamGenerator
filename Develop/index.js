const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
var counter = 1;
var teamArray = [];

var continueLoop = true;


async function init() 
{
  try {
    // user prompts
    const { managerName, managerEmail, officeNumber } = await promptInitial();
    console.log("Name: " + managerName + "\n" + "Email: " + managerEmail + "\n" + "Office Number: " + officeNumber);
    const manager = new Manager(managerName, counter, managerEmail, officeNumber);
    teamArray.push(manager);
    counter++;
       
    while (continueLoop)
    {
        const { option } = await promptChoice();
        console.log(option);
        switch(option)
        {
            case "Engineer":
                console.log("you choose Engineer");
                const { engineerName, engineerEmail, userName } = await promptEngineer();
                const engineer = new Engineer(engineerName, counter, engineerEmail, userName);
                teamArray.push(engineer);
                counter++;
                break;
        
            case "Intern":
                console.log("you choose Intern");
                const { internName, internEmail, schoolName } = await promptIntern();
                const intern = new Intern(internName, counter, internEmail, schoolName);
                teamArray.push(intern);
                counter++;
                break;

            default:
                continueLoop = false;
                break;    
        }
    }
    console.log("you have dropped out of the loop");
    printInfo();

//    return writeFileAsync("Readme.md", generateReadme(githubUsername, projectTitle, description, installInfo, contributing, tests, license, usage, email));
  }
  catch (err) 
  {
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

function promptEngineer() {
    return inquirer.prompt
    (
      [
        {
        message: "What is your engineer's name?",  
        type: "input",
        name: "engineerName",
        validate: function validateEngineerName(engineerName) 
        {   return engineerName !== "";  }
        },
        {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email?"
        }
        ,
        {
        type: "input",
        name: "userName",
        message: "What is the engineer's GitHub Username?"
        }
    ]);
}   

function promptIntern() {
    return inquirer.prompt
    (
      [
        {
        message: "What is your intern's name?",  
        type: "input",
        name: "internName",
        validate: function validateInternName(internName) 
        {   return internName !== "";  }
        },
        {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?"
        }
        ,
        {
        type: "input",
        name: "schoolName",
        message: "What school does the intern attend?"
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

function printInfo() 
{
    console.log("length of teamArray is: " + teamArray.length);
    for (let index in teamArray) 
    {
        if (teamArray[index] instanceof Manager) 
        { 
            console.log("Index " + index + " is a Manager object.");
        }
        else if (teamArray[index] instanceof Engineer) 
        {
            console.log("Index " + index + " is a Engineer object.");
        }
        else if (teamArray[index] instanceof Intern) 
        {
            console.log("Index " + index + " is a Intern object.");
        }
        else 
        {
            console.log("Not sure what teamArray object is");
        }
    }       
}

init();


