const inquirer = require('inquirer');
const jest = require('jest');
const { Circle, Triangle, Square } = require('./Assets/shapes.js');
const SVG = require('./Assets/svg.js');
const { writeFile } = require('fs/promises');

function init() {
    inquirer.prompt([

        {
            type: 'input',
            message: "Enter text for the logo. (must not exceed 3 characters)",
            name: 'text',

        },
        {
            type: 'list',
            message: "what color would you like the logo to be?",
            choices: ["Green", "Turquoise", "Bisque"],
            name: 'color',
        },
        {
            type: 'list',
            message: 'what shape would you like you SVG logo to be?',
            choices: ['Triangle', 'Square', 'Circle'],
            name: 'shapeType',

        },
        {
            type: 'list',
            message: 'What color would you like the text to be?',
            choices: ['White', 'Black', 'Blue'],
            name: 'textColor',

        },

    ])

        .then(({ text, color, shapeType, textColor }) => {
            console.log(text, textColor);
            let shape;
            switch (shapeType) {
                case "Triangle":
                    shape = new Triangle();
                    break;
                case "Square":
                    shape = new Square();
                    break;
                default:
                    shape = new Circle();
                    break;
            }
            shape.setColor(color);
            const svg = new SVG();
            svg.setText(text, textColor)

            svg.setShape(shape)
            return writeFile('Logo.svg', svg.render())

        }).then(() => {
            console.log('Generated Logo');
        }).catch((err) => console.log(err, 'Error No Logo!'));


}
init();


