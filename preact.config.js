import path from "path";

export default (config) => {
    config.resolve.alias.src = path.resolve(__dirname, "src"),
    config.resolve.alias.components = path.resolve(__dirname, "src/components"),
    config.resolve.alias.utils = path.resolve(__dirname, "src/utils")
};
