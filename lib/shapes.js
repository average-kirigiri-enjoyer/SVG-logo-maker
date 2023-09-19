/*
ethan (average-kirigiri-enjoyer)
SCS Boot Camp Module 10 Weekly Challenge - SVG Logo Maker
Created 2023/09/18
Last Edited 2023/09/19
*/

class Shape
{
  constructor(text, textColour, shapeColour)
  {
    this.text = text;
    this.textColour = textColour ;
    this.shapeColour = shapeColour;
  }

  setColour(shapeColour)
  {
    this.shapeColour = shapeColour;
  }

  render()
  {
    return `<polygon points = "${this.points}" fill = "${this.shapeColour}"/>
    <text x = "150" y = "124" font-size = "72" font-weight = "bold" fill = "${this.textColour}" text-anchor = "middle" alignment-baseline = "middle">${this.text}</text>`
  }
}

class Square extends Shape
{
  constructor(text, textColour, shapeColour)
  {
    super(text, textColour, shapeColour);
    this.points = "55, 5 245, 5 245, 195 55, 195";
  }
}

class Triangle extends Shape
{
  constructor(text, textColour, shapeColour)
  {
    super(text, textColour, shapeColour);
    this.points = "150, 18 244, 182 56, 182";
  }

  render()
  {
    return `<polygon points = "${this.points}" fill = "${this.shapeColour}"/>
    <text x = "150" y = "125" font-size = "40" font-weight = "bold" fill = "${this.textColour}" text-anchor = "middle" alignment-baseline = "middle">${this.text}</text>`
  }
}

class Circle extends Shape
{
  constructor(text, textColour, shapeColour)
  {
    super(text, textColour, shapeColour);
    this.points = `cx = "150" cy = "100" r = "90"`;
  }

  render()
  {
    return `<circle ${this.points} fill = "${this.shapeColour}"/>
    <text x = "150" y = "124" font-size = "72" font-weight = "bold" fill = "${this.textColour}" text-anchor = "middle" alignment-baseline = "middle">${this.text}</text>`
  }
}

module.exports = {Shape, Triangle, Square, Circle};