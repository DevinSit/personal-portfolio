# Icons

The following is a guide on how to add a new SVG icon as a React component.

## How to Add a New Icon

1. Take the SVG file and put it in this `icons` folder.
2. Run the conversion script from the root of the repo (while inside the `icons` folder): `node ../../../scripts/convert-svg-to-component.js XXX.svg YYY`.
    - `XXX.svg` is the name of the SVG file.
    - `YYY` is the name the React component will have, with 'Icon' prepended to it (so `Back` will become `IconBack.js`).
3. Add the new React component to the icons' `index.js` and use it!
4. Remove the SVG file, since it's no longer needed.

The generated React component can have a class name passed to it. This will allow styling the SVG using CSS (can change height, width, etc).
