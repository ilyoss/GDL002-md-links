#!/usr/bin/env node

const chalk = require("chalk");
const figlet = require("figlet");
const yargs = require("yargs");
const path = require('path');
const fs = require('fs');

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
  console.log(chalk.bold.white("In case you want to validate the links, add the word 'validate' after your path."));
  console.log(chalk.gray("Example: md-links /mypath.md validate"));
}
init();

// require('yargs').
//   option('path', {
//     alias: 'p',
//     describe: 'Provide a path to file'
//   }).
//   demandOption(['path'], 'Please provide a path to work with this tool.')
//   .help()
//   .argv


module.exports = {

    absolutePath: function (absolutePath){
      return path.isAbsolute(absolutePath);
    },
    relativePath: function (relativePath) {
      return path.resolve(path.join(__dirname, "..", relativePath));
    },
    existingPath: function(inputPath){
      return fs.existsSync(inputPath);
    },
};
