const fs = require('fs');
const path = require('path');

// Function to validate the path if it's absolute (or resolve if it's relative) before returning
const checkPath = (pathRoute) => {
  if (path.isAbsolute(pathRoute)) {
    return pathRoute;
  }
  return path.resolve(pathRoute);
};

// Function to read the file and validate if it's a File/Folder
// and checks the files looking for .md files.
// Returns and array with all the files found
const readPath = (absolutePath, arrayFile_) => {
  arrayFile_ = arrayFile_ || [];
  const expRegMarkdown = /.\.(m|M(?:d|D?markdown)?)|text$/g;
  const route = fs.statSync(absolutePath);

  if (route.isDirectory()) {
      const listFile = fs.readdirSync(absolutePath);
      listFile.forEach((file) => {
       const newPath = path.join(absolutePath, file);
       readPath(newPath, arrayFile_);
      });
  } else if (route.isFile() && expRegMarkdown.test(path.basename(absolutePath))) {
      arrayFile_.push(absolutePath);
  }
  return arrayFile_;
};

// Exporting my functions
module.exports = {
  checkPath: checkPath,
  readPath: readPath
}
