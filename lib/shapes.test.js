/*
ethan (average-kirigiri-enjoyer)
SCS Boot Camp Module 10 Weekly Challenge - SVG Logo Maker
Created 2023/09/18
Last Edited 2023/09/19
*/

const {Triangle, Square, Circle} = require("./shapes.js");

//testing suite for shapes
describe("Shapes", () =>
{
  describe("Triangle", () =>
  {
    it("should take three arguments; text, textColour, and shapeColour, and be able to return the polygon points, text, text colour and shape colour", () =>
    {
      const triangle = new Triangle("ELH", "white", "black");
      expect(triangle.render()).toEqual(`<polygon points = "150, 18 244, 182 56, 182" fill = "black"/>
    <text x = "150" y = "125" font-size = "40" font-weight = "bold" fill = "white" text-anchor = "middle" alignment-baseline = "middle">ELH</text>`)
    });
  });
  describe("Square", () =>
  {
    it("should take three arguments; text, textColour, and shapeColour, and be able to return the polygon points, text, text colour and shape colour", () =>
    {
      const square = new Square("ELH", "white", "black");
      expect(square.render()).toEqual(`<polygon points = "55, 5 245, 5 245, 195 55, 195" fill = "black"/>
    <text x = "150" y = "124" font-size = "72" font-weight = "bold" fill = "white" text-anchor = "middle" alignment-baseline = "middle">ELH</text>`)
    });
  });
  describe("Circle", () =>
  {
    it("should take three arguments; text, textColour, and shapeColour, and be able to return the polygon points, text, text colour and shape colour", () =>
    {
      const circle = new Circle("ELH", "white", "black");
      expect(circle.render()).toEqual(`<circle cx = "150" cy = "100" r = "90" fill = "black"/>
    <text x = "150" y = "124" font-size = "72" font-weight = "bold" fill = "white" text-anchor = "middle" alignment-baseline = "middle">ELH</text>`)
    });
  });
});