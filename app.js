const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const util = require("util");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
var counter = 1;
var teamArray = [];
var continueLoop = true;

const writeFileAsync = util.promisify(fs.writeFile);

async function init() 
{
  try 
  {
    // user prompts
    const { managerName, managerEmail, officeNumber } = await promptInitial();
    const manager = new Manager(managerName, counter, managerEmail, officeNumber);
    teamArray.push(manager);
    counter++;
       
    while (continueLoop)
    {
        const { option } = await promptChoice();
        switch(option)
        {
            case "Engineer":
                const { engineerName, engineerEmail, userName } = await promptEngineer();
                const engineer = new Engineer(engineerName, counter, engineerEmail, userName);
                teamArray.push(engineer);
                counter++;
                break;
        
            case "Intern":
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
    const html = render.render(teamArray);
    return writeFileAsync(outputPath, html);
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
        { return managerName !== ""; }
        },
        {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?",
        validate: function validateManagerEmail(managerEmail) 
        { return managerEmail !== ""; }
        }
        ,
        {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        validate: function validateOfficeNumber(officeNumber) 
        { return officeNumber !== ""; }
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
        message: "What is the engineer's email?",
        validate: function validateEngineerEmail(engineerEmail) 
        {   return engineerEmail !== "";  }
        }
        ,
        {
        type: "input",
        name: "userName",
        message: "What is the engineer's GitHub Username?",
        validate: function validateuserName(userName) 
        {   return userName !== "";  }
        }
      ]
    );
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
        message: "What is the intern's email?",
        validate: function validateInternEmail(internEmail) 
        {   return internEmail !== "";  }
        }
        ,
        {
        type: "input",
        name: "schoolName",
        message: "What school does the intern attend?",
        validate: function validateschoolName(schoolName) 
        {   return schoolName !== "";  }
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