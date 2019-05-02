const fs = require('fs');
const validations = require('./validations.js'); //Importing my validation functions for the path
const readLinks = require('./links.js');

const mdLinks = (path) => {
  const resultFinal = {};
  const totalLinks = [];
  // If my path actually exists
  if (fs.existsSync(path)) {
    // I validate the path
    const absolutePath = validations.checkPath(path);
    // I check if its a File/Folder
    const arraypathFileMd = validations.readPath(absolutePath);
    //I list and display the links inside the md.file
    const fileLinks = readLinks.readLinks(arraypathFileMd);
    // Printing the list of links in the terminal
    console.log(fileLinks);
  };
};

module.exports = mdLinks;
