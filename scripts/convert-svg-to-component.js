const fs = require("fs");
const SVGO = require("svgo");

// Example usage:
//
//  node convert-svg-to-component.js icon-back.svg IconBack
//
// Result:
//
//  A new file called 'IconBack.js' has been created.

const kebabToUpperCamel = (str) => {
    const camelCase = str.replace(
        /([-_][a-z])/g,
        (group) => (
            group.toUpperCase()
                 .replace("-", "")
                 .replace("_", "")
        )
    );

    return camelCase.charAt(0).toUpperCase() + camelCase.substring(1);
};

const processArgs = () => {
    const fileName = process.argv[2];
    let componentName = process.argv[3];

    if (!fileName) {
        console.log("No SVG file provided; exiting.");
        process.exit(1);
    }

    if (!componentName) {
        // Obviously, assumes that the file name is kebab case.
        componentName = kebabToUpperCamel(fileName.split(".")[0]);
    }

    return {fileName, componentName};
};

const optimizeSvg = async (fileName) => {
    const svgo = new SVGO({plugins: [{removeViewBox: false}]});

    const data = fs.readFileSync(fileName, "utf8");

    const result = await svgo.optimize(data);
    let svg = result.data;

    // Add in the className property.
    svg = svg.replace("<svg ", "<svg className={className} ");

    return svg;
};

const generateComponentCode = (svg = "", componentName = "") => {
    const component = `/* eslint-disable */

const ${componentName} = ({className = ""}) => (
    ${svg}
);

export default ${componentName};`;

    fs.writeFileSync(`${componentName}.js`, component);
};

const main = async () => {
    const {fileName, componentName} = processArgs();
    const svg = await optimizeSvg(fileName);

    generateComponentCode(svg, componentName);
};

main();
