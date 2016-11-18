const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');

const headerPath = './docs/HEADER.md';
const footerPath = './docs/FOOTER.md';
const output = './docs/OUTPUT.md';
const examplesPath = './docs/examples/';

let version = require('../package.json').version;
let options = require('./jsdoc-options.json');
let header = fs.readFileSync(headerPath, 'utf8').replace('{VERSION}', version);
let footer = fs.readFileSync(footerPath, 'utf8').replace('{VERSION}', version);

jsdoc2md.render(options).then(result => {
    result = result
        .replace(/\*\*Kind\*\*: global function/g, '')
        .replace(/## Functions/g, '')
        .replace(/<%example:(\w+\.js)%>/g, function(str, fileName) {
            return fs.readFileSync(examplesPath + fileName, 'utf8').replace(/\n$/, '');
        });

    fs.writeFileSync(output, header + result + footer);
});
