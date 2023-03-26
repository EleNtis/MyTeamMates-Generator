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
    function createManager(){
        console.log("Build your team!");
        inquirer.prompt([
            {
            type: "input",
            name: "managerName",
            message: "What's the manager's name?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What's the manager's id?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please write the maanger's email address!"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                messageL: "What's the manager's office number?"
            }
        ]).then(answers=>{
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
        id.push(answers.managerId);
        })
    }
    createManager();
}

appMenu();