/*
ethan (average-kirigiri-enjoyer)
SCS Boot Camp Module 10 Weekly Challenge - SVG Logo Maker
Created 2023/09/17
Last Edited 2023/09/17
*/

//retrieving packages
const inquirer = require("inquirer");
const fs = require("fs");

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

//function which attempts to write logo data to a .svg file
function writeToFile(svgData)
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
processSVGData(data);
{

}

//function to prompt the user with questions, the answers to which will be used to generate a logo
function generateSVG()
{
  inquirer.prompt(questions)
  .then(function(data)
  {
    const svgData = processSVGData(data);
    writeToFile(svgData);
  });
}

//begins SVG generation process
generateSVG();