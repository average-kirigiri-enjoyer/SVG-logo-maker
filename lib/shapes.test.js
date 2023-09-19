/* following test should pass;
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
*/

//check that logo text is >= 0 & <= 3
//check that user entered a valid colour for text
//check that user entered a valid colour for shape
//use jest for the above checks, and if any of them fail, eject from function, inform user of error in console, and cancel svg generation

//Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.