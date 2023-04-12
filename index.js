const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
import inquirer from 'inquirer';
const questions = [{
    

inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  {
type: 'input',
message: "Enter text for the logo."
name: 'LogoText',

},
{
type:'checkbox',
message: "what color would you like the logo to be?",
choices: ["Green", "Turquoise", "Bisque"],
name: 'color',
},
{
    type:'checkbox',
    message: 'what shape would you like you SVG logo to be?',
    choices: ['Triangle', 'Square', 'Circle'],
    name:'Shape',

},
{
type: 'checkbox',
message:'What text Color would you like to use?',
choices: ['white', 'green', 'black'],
message: 'Text Color',
},
];





const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');




function writeFile() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data)
            fs.writeFile("shape.svg", createSVG(data), (err) =>
                err ? console.log(err) : console.log("Enjoy Your Logo"))
        });
};