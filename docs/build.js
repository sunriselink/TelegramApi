const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');

const output = './docs/API.md';
const examplesPath = './docs/examples/';

let options = require('./jsdoc-options.json');

jsdoc2md.render(options).then(result => {
    result = result
        .replace(/\*\*Kind\*\*: global function/g, '')
        .replace(/## Functions/g, '')
        .replace(/<%example:(\w+\.js)%>/g, function(str, fileName) {
            return fs.readFileSync(examplesPath + fileName, 'utf8').replace(/\n$/, '');
        });

    fs.writeFileSync(output, '# Methods\n\n' + result + '\n\n## To be continued');
});
