const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const id = []
const teamMembers = []

const appMenu = () => {
    console.log("Build your team!");

    function buildTeam(){

    }

    function createIntern(){
        inquirer.prompt([
            {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
            },
            {
                type: "input",
                name: "internId",
                message: "What is the intern's id?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "Please write the intern's email address!"
            },
            {
                type: "input",
                name: "internSchool",
                messageL: "What is the intern's school?"
            }
        ]).then(answers=>{
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        id.push(answers.internId);
        createTeam();
        })
    }

    function createEngineer(){
        inquirer.prompt([
            {
            type: "input",
            name: "engineerName",
            message: "What's the engineer's name?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "What's the engineer's id?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please write the engineer's email address!"
            },
            {
                type: "input",
                name: "engineerGithub",
                messageL: "What is the engineer's GitHub username?"
            }
        ]).then(answers=>{
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(engineer);
        id.push(answers.engineerId);
        createTeam();
        })
    }

    function createManager(){
        inquirer.prompt([
            {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's id?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please write the manager's email address!"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                messageL: "What is the manager's office number?"
            }
        ]).then(answers=>{
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
        id.push(answers.managerId);
        createTeam();
        })
    }
    createEngineer();
    createManager();
}

appMenu();