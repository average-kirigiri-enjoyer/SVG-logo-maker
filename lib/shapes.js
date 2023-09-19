/*
ethan (average-kirigiri-enjoyer)
SCS Boot Camp Module 10 Weekly Challenge - SVG Logo Maker
Created 2023/09/18
Last Edited 2023/09/19
*/


class Shape
{
  constructor(colour)
  {
    this.colour = colour;
  }

  setColour(colour)
  {
    //test if valid colour
  }

  render()
  {
    return `<polygon points = "${this.points}" fill = "${this.colour}"/>`
  }
}

class Triangle extends Shape
{
  constructor(colour)
  {
    super(colour);
    this.points = "150, 18 244, 182 56, 182";
  }
}

class Square extends Shape
{
  constructor(colour)
  {
    super(colour);
    this.points = "55, 5 245, 5 245, 195 55, 195";
  }
}

class Circle extends Shape
{
  constructor(colour)
  {
    super(colour);
    this.points = `cx = "150" cy = "100" r = "90"`;
  }

  render()
  {
    return `<circle ${this.points} fill = "${this.colour}"/>`
  }
}

module.exports = {Shape, Triangle, Square, Circle};