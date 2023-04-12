const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const Triangle = require('./Assets/triangle.svg');
const Square = require('./Assets/square.svg')
const Circle = require('./Assets/circle.svg')



const questions = [
    {
        type: 'input',
        message: "Enter text for the logo.",
        name: 'text',

    },
    {
        type: 'checkbox',
        message: "what color would you like the logo to be?",
        choices: ["Green", "Turquoise", "Bisque"],
        name: 'color',
    },
    {
        type: 'checkbox',
        message: 'what shape would you like you SVG logo to be?',
        choices: ['Triangle', 'Square', 'Circle'],
        name: 'shape',

    },
    {
        type: 'checkbox',
        message: 'What color would you like the text to be?',
        choices: ['Triangle', 'Square', 'Circle'],
        name: 'textColor',

    },

];
.then(()) =>
.then(()) =>
.then(()) =>




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

class triangle {
    constructor(text, color, shape, textColor) {
        this.text = text;
        this.color = color;
        this.shape = shape;
        this.textColor = textColor;
    }

}
const triangle = new triangle;
class Square {
    constructor(text, color, shape, textColor) {
        this.text = text;
        this.color = color;
        this.shape = shape;
        this.textColor = textColor;
    }

}
const Square = new Square;
class Circle {
    constructor(text, color, shape, textColor) {
        this.text = text;
        this.color = color;
        this.shape = shape;
        this.textColor = textColor;
    }
}
const Circle = new Circle;










//Triangle
/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<polygon points="150, 18 244, 182 56, 182" fill="${Color}" />

<text x="150" y="150" font-size="60" text-anchor="middle" fill="${Textcolor}">${text}</text>

</svg> */

//Square

/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<rect x="90" y="40" width="120" height="120" fill="${color}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="#444">${LogoText}</text>

</svg> */



//Circle
/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="150, 18 244, 182 56, 182" fill="${Color}" />

  <text x="150" y="150" font-size="60" text-anchor="middle" fill="#3a0467">${text}</text>

</svg> */