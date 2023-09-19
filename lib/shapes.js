/*
ethan (average-kirigiri-enjoyer)
SCS Boot Camp Module 10 Weekly Challenge - SVG Logo Maker
Created 2023/09/18
Last Edited 2023/09/19
*/

//defines general Shape class
class Shape
{
  //constructor contains logo text, text colour, and shape colour
  constructor(text, textColour, shapeColour)
  {
    this.text = text;
    this.textColour = textColour ;
    this.shapeColour = shapeColour;
  }

  //method to set / change shape colour
  setColour(shapeColour)
  {
    this.shapeColour = shapeColour;
  }

  //method to put together logo in a .svg structure and return it
  render()
  {
    return `<polygon points = "${this.points}" fill = "${this.shapeColour}"/>
    <text x = "150" y = "124" font-size = "72" font-weight = "bold" fill = "${this.textColour}" text-anchor = "middle" alignment-baseline = "middle">${this.text}</text>`
  }
}

//defines Square class as an extension of the Shape class
class Square extends Shape
{
  constructor(text, textColour, shapeColour)
  {
    super(text, textColour, shapeColour); //constructor extends text, textColour, and shapeColour from Shape
    this.points = "55, 5 245, 5 245, 195 55, 195"; //defines polygon points to create a square
  }
}

//defines Triangle class as an extension of the Shape class
class Triangle extends Shape
{
  constructor(text, textColour, shapeColour)
  {
    super(text, textColour, shapeColour); //constructor extends text, textColour, and shapeColour from Shape
    this.points = "150, 18 244, 182 56, 182"; //defines polygon points to create a triangle
  }

  //overrides default render() method to match the triangle's shape
  render()
  {
    return `<polygon points = "${this.points}" fill = "${this.shapeColour}"/>
    <text x = "150" y = "125" font-size = "40" font-weight = "bold" fill = "${this.textColour}" text-anchor = "middle" alignment-baseline = "middle">${this.text}</text>`
  }
}

//defines Circle class as an extension of the Shape class
class Circle extends Shape
{
  constructor(text, textColour, shapeColour)
  {
    super(text, textColour, shapeColour); //constructor extends text, textColour, and shapeColour from Shape
    this.points = `cx = "150" cy = "100" r = "90"`; //defines x & y coordinates + radius to create a circle
  }

  //overrides default render() method to generate a circle rather than a polygon
  render()
  {
    return `<circle ${this.points} fill = "${this.shapeColour}"/>
    <text x = "150" y = "124" font-size = "72" font-weight = "bold" fill = "${this.textColour}" text-anchor = "middle" alignment-baseline = "middle">${this.text}</text>`
  }
}

//exports Shape, Triangle, Square, and Circle classes
module.exports = {Triangle, Square, Circle};