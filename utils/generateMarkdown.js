const fs = require("fs");
const path = require("path");
const ejs = require('ejs');
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);

function generateMarkdown(data) {
  const filePath = path.resolve(__dirname, "../template/readmetemplate.md");
  return readFileAsync(filePath, 'utf8')
    .then(template => {
      return ejs.render(template, data);

    });

}

module.exports = generateMarkdown;