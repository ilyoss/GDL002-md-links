#!/usr/bin/env node
const chalk = require("chalk"); //Module for init design
const figlet = require("figlet"); //Module for init font design
const mdLinks = require('./src/index.js');
const [, , ...args] = process.argv;
const directory = args.shift();

// Welcome message with instructions on how to use the module
const init = () => {
  console.log(
    chalk.cyan(
      figlet.textSync("md-links", {
        font: "Standard",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  );
  console.log(chalk.bold.white("Welcome to md-links! Start by writing 'md-links' in your terminal, followed by the path to your file."));
  console.log(chalk.gray("Example: md-links /mypath.md"));
}
init();
// I run my mdlinks function
mdLinks(directory);
