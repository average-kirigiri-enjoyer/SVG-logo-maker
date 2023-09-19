/*
ethan (average-kirigiri-enjoyer)
SCS Boot Camp Module 10 Weekly Challenge - SVG Logo Maker
Created 2023/09/17
Last Edited 2023/09/19
*/

//retrieving packages
const inquirer = require("inquirer");
const fs = require("fs");
const {Triangle, Square, Circle} = require("./lib/shapes.js");

//array with questions to get data needed from user to generate logo.svg
const questions = [
{
  type: "input",
  message: "Enter logo text (max. 3 characters)",
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
      console.log(`Generated logo.svg`);
    }
  });
}

//function to process logo data from user input & return the result
function processSVGData(data)
{
  //if the user inputted text exceeding three characters in length, throw an error
  if (data.text.length > 3)
  {
    throw new Error("Logo text must be three characters or less");
  }

  //defining empty shape variable
  let shape;

  //assigns empty shape to a specific type based on the shape the user chose, and constructs it using the rest of the user's answers
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

  //renders the svg's structure, puts it together, and attempts to write it to a .svg file
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