# Module 10 Weekly Challenge - SVG Logo Maker [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Having a clean, professional logo is essential for your brand and general web presence as a web developer, but paying a graphic designer to put one together for you can be very financially taxing, especially when you're just starting out. Thus, this application allows a user to generate a simple but sleek logo via user input in the CLI.

## Installation

Download the repository files to your computer, and extract the zipped files to a dedicated folder.

## Requirements

- Node; https://nodejs.org/en

## Usage

Navigate to the repository in a git bash shell (or equivalent), and type "node index.js". You will be presented with a series of questions to customize your logo.

The first question will ask for the logo's text, which can be anything you like, so long as it's 3 characters or less. If you do not want any text, simply enter nothing. Next up will be the text's colour, in which you can enter the colour's name, or it's hex code. If the colour is not recognized, it will default to black. Then you will be presented with a list of shapes to choose from for your logo; a triangle, circle, or square. After choosing the shape, you will be prompted to choose the shape's colour, the details of which are identical to that of the text's colour.

Once you have answered all the questions, the application will attempt to generate an associated .svg file 'logo.svg'. If successful, the message "Generated logo.svg" will appear in the CLI. If there was an error, you will be informed as such in the CLI.

## Demo

See a video demonstrating the application's functionality [here](https://drive.google.com/file/d/1Io5fwpGrN3owlBMWcEu9OmyzhenVtrOP/view?usp=sharing)

Alternatively, view a sample logo.svg file generated by the application [here](./sampleLogo.svg)

## Credits

MIT License Badge (./README.md, line 1);
https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

## License

Operates under a standard MIT license. For more information, refer to the LICENSE file in the repository, or visit the following website; https://opensource.org/licenses/MIT.
