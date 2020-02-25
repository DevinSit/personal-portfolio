const fs = require("fs");
const SVGO = require("svgo");
const {parse} = require("node-html-parser");

// Example usage:
//
//  node convert-svg-to-component.js icon-back.svg Back
//
// Result:
//
//  A new file called 'IconBack.js' has been created.

const passedFile = process.argv[2];
const iconName = process.argv[3];

if (!passedFile) {
    console.log("No SVG file provided; exiting.");
    process.exit(1);
}

if (!iconName) {
    console.log("No icon name provided; exiting.");
    process.exit(1);
}

const svgo = new SVGO({plugins: [{removeViewBox: false}]});

fs.readFile(passedFile, "utf8", async (err, data) => {
    if (err) {
        throw err;
    }

    const result = await svgo.optimize(data);
    let svg = result.data;

    // Add in the className property.
    svg = svg.replace("<svg ", "<svg className={className} ");

    const component = `/* eslint-disable */

const Icon${iconName} = ({className = ""}) => (
    ${svg}
);

export default Icon${iconName};`;

    fs.writeFile(`Icon${iconName}.js`, component, () => {});
});
