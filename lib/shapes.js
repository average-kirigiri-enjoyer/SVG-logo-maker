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
    this.points = "50, 0 250, 0 250, 200 50, 200";
  }
}

class Circle extends Shape
{
  constructor(colour)
  {
    super(colour);
    this.points = `cx = "150" cy = "100" r = "100"`;
  }

  render()
  {
    return `<circle "${this.points}" fill = "${this.colour}"/>`
  }
}

module.exports = {Shape, Triangle, Square, Circle};