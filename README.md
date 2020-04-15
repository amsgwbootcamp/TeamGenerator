# Unit 10 OOP Homework: Template Engine - Employee Summary

One of the most important aspects of programming is writing code that is readable, reliable, and maintainable. Oftentimes, *how* we design our code is just as important as the code itself. In this homework assignment, your challenge is to build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. Since testing is a key piece in making code maintainable, you will also be ensuring that all unit tests pass.

## Instructions

You will build a software engineering team generator command line application: 
1.  Enter node app.js at the command line.  
2.  Answer the following questions for the manager: 
    A.  What is your manager's name?
    B.  What is your manager's email?
    C.  What is your manager's office number?  
    
3.  The application will then prompt the user to see if they want to enter an engineer, intern or exit out of the questions.  
4.  If the user chooses to enter information about an engineer, they will be prompted for the following information:  
    A.  What is the engineer's name?
    B.  What is the engineer's email?
    C.  What is the engineer's GitHub username?
5.  If the user chooses to enter information about an intern, they will be prompted for the following information:  
    A.  What is the intern's name?
    B.  What is the intern's email address?
    C.  What school does the intern attend?
6.  After all questions have been answered, the application will create the appropriate web page that will display in the browser window the information that was entered.  The manager will be displayed with at teal title topper, the engineers will be displayed with green title topper and the interns will be displayed with a yellow title topper.  

NOTE:  Instead of prompting the user for id, the records will be assigned a number based on the order they are entered.

This application uses the following file structure:  

/lib:
    -- Employee.js (Employee class file)
    -- Engineer.js (Engineer class file)
    -- htmlRenderer.js (Creates the team.html)
    -- Intern.js (Intern class file)
    -- Manager.js (Manager class file)
/output
    -- team.html (will be created here after executing the application)
/templates
    -- engineer.html (Engineer template file)
    -- intern.html (Intern template file)
    -- main.html (Creates the initial html that is needed in the file)
    -- manager.html (Manager template file)
/test
    -- Employee.test (Contains all of the necessary tests for the Employee Class)
    -- Engineer.test (Contains all of the necessary tests for the Engineer Class)
    -- Intern.test (Contains all of the necessary tests for the Intern Class)
    -- Manager.test (Contains all of the necessary tests for the Manager Class)
app.js (this is what executes the application)
package.json

User Story: 
```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```
## Minimum Requirements

* Functional application.

* GitHub repository with a unique name and a README describing the project.

* User can use the CLI to generate an HTML page that displays information about their team.

* All tests must pass.

### Classes
The project must have the these classes: `Employee`, `Manager`, `Engineer`,
`Intern`. The tests for these classes in the `tests` directory must all pass.

The first class is an `Employee` parent class with the following properties and
methods:

  * name
  * id
  * email
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee'

The other three classes will extend `Employee`. 

In addition to `Employee`'s properties and methods, `Manager` will also have:

  * officeNumber
  * getRole() // Overridden to return 'Manager'

In addition to `Employee`'s properties and methods, `Engineer` will also have:

  * github  // GitHub username
  * getGithub()

  * getRole() // Overridden to return 'Engineer'

In addition to `Employee`'s properties and methods, `Intern` will also have:

  * school 
  * getSchool()
  * getRole() // Overridden to return 'Intern'

### User input

The project must prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

### Roster output

The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

  * Name
  * Role
  * ID
  * Role-specific property (School, link to GitHub profile, or office number)

## Submission on BCS

You are required to submit the following:

* The URL of the GitHub repository

dir* **Optional**: GIF of your CLI applications functionality

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
