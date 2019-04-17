const path = require('path');
const fs = require('fs');

module.exports = {

    absolutePath: function (absolutePath){
      return path.isAbsolute(absolutePath);
    },
    relativePath: function (relativePath) {
      return path.resolve(path.join(__dirname, "..", relativePath));
    },
    existingPath: function(inputPath){
      let exists = fs.existsSync(inputPath);
      return exists;
    },
};
