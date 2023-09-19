/*
ethan (average-kirigiri-enjoyer)
SCS Boot Camp Module 10 Weekly Challenge - SVG Logo Maker
Created 2023/09/17
Last Edited 2023/09/17
*/

//retrieving packages
const inquirer = require("inquirer");
const fs = require("fs");
const {Shape, Triangle, Square, Circle} = require("./lib/shapes.js");

//array with questions to get data needed from user to generate logo.svg
const questions = [
{
  type: "input",
  message: "Enter logo text",
  name: "text",
},
{
  type: "input",
  message: "Enter logo text colour",
  name: "textColour",
},
{
  type: "list",
  message: "Choose logo shape",
  name: "shape",
  choices: ["Circle", "Triangle", "Square"],
},
{
  type: "input",
  message: "Enter shape colour",
  name: "shapeColour",
}];

/* following test should pass;
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
*/

//function which attempts to write logo data to a .svg file
function writeSVGFile(svgData)
{
  //attempts to write logo data to .svg file logo.svg
  fs.writeFile("./logo.svg", svgData, function(err)
  {
    if (err) //if an error occurred in the process of creating / writing to the file, inform the user as such
    {
      console.log(`Error occurred while trying to create logo.svg; ${err}`);
    }
    else //otherwise, inform the user that the logo was successfully written to
    {
      console.log(`logo.svg successfully created`);
    }
  });
}

//function to process logo data from user input & return the result
function processSVGData(data)
{
  //check that logo text is >= 0 & <= 3
  //check that user entered a valid colour for text
  //check that user entered a valid colour for shape
  //use jest for the above checks, and if any of them fail, eject from function, inform user of error in console, and cancel svg generation
  //map pixel colours based on shape selected, and overlay text to it

  //create new shape based on the one the user selected

  let shape;

  if (data.shape === "Triangle")
  {

  }
  else if (data.shape === "Square")
  {
    
  }
  if (data.shape === "Circle")
  {
    
  }

  const svgStructure = shape.render();
  const svgData = `<svg width = "300" height = "200" xmlns = "http://www.w3.org/2000/svg">
                    ${svgStructure}
                   </svg>`;

  writeSVGFile(svgData);
}

//function to prompt the user with questions, the answers to which will be used to generate a logo
function generateSVG()
{
  inquirer.prompt(questions)
  .then(function(data)
  {
    processSVGData(data);
  });
}

//begins SVG generation process
generateSVG();

/*function testSVG()
{
  svgData = `<svg width = "300" height = "200" xmlns = "http://www.w3.org/2000/svg">
  <polygon points = "150, 18 244, 182 56, 182" fill = "red"/>
  </svg>`
  writeSVGFile(svgData);
}

testSVG();*/