/*
ethan (average-kirigiri-enjoyer)
SCS Boot Camp Module 10 Weekly Challenge - SVG Logo Maker
Created 2023/09/17
Last Edited 2023/09/19
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
  message: "Enter logo text colour (name or hex code)",
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
  message: "Enter shape colour (name or hex code)",
  name: "shapeColour",
}];

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
  if (data.text.length > 3)
  {
    throw new Error("Logo text must be three characters or less");
  }

  let shape;

  if (data.shape === "Triangle")
  {
    shape = new Triangle(data.text, data.textColour, data.shapeColour);
  }
  else if (data.shape === "Square")
  {
    shape = new Square(data.text, data.textColour, data.shapeColour);
  }
  else if (data.shape === "Circle")
  {
    shape = new Circle(data.text, data.textColour, data.shapeColour);
  }

  const svgStructure = shape.render();
  const svgData = `
  <svg width = "300" height = "200" xmlns = "http://www.w3.org/2000/svg">
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
  const svgData = `
  <svg width = "300" height = "200" xmlns = "http://www.w3.org/2000/svg">
    <polygon points = "150, 18 244, 182 56, 182" fill = "red"/>
    <text x = "150" y = "127" font-size = "40" font-weight = "bold" fill = "white" text-anchor = "middle" alignment-baseline = "middle">PEE</text>
  </svg>`;

  writeSVGFile(svgData);
}

testSVG();*/
