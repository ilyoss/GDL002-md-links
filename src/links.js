const fs = require('fs');
const fetch = require('node-fetch');

// Function to validate if it's a file, and if it's a markdown file it reads it
const readLinks = (arrayFileMD) => {
  const expRegLinks = /\[((.+?))\]\((http|https|ftp|ftps).+?\)/g;
  const expRegURL = /\((http|https|ftp|ftps).+?\)/g;
  const expRegNameURL = /\[.+?\]/g;
  // Promise to return
  return new Promise((resolve, reject) => {
    // Array where I'll push my info from each link (file, href, text)
    const dataLinks = [];
    // For each .md file in the array
    arrayFileMD.forEach(fileMD => {
      // I save the content from the whole file as a string.
      const contentTotal = fs.readFileSync(fileMD).toString();
      // I create an array with all the links that match the link format
      const listLinks = contentTotal.match(expRegLinks);
      listLinks.forEach(link => {
        const newHref = link.match(expRegURL).toString();
        const newText = link.match(expRegNameURL).toString();
        dataLinks.push({
          file: fileMD,
          href: newHref.substring(1, newHref.length - 1),
          text: newText.substring(1, newText.length - 1),
        });
      });
    });
    resolve(dataLinks);
    reject(new Error('Error'));
  });
};

exports.readLinks = readLinks;
