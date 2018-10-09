import path from "path";

export default (config, env, helpers) => {
    config.resolve.alias.assets = path.resolve(__dirname, "src/assets"),
    config.resolve.alias.components = path.resolve(__dirname, "src/components"),
    config.resolve.alias.src = path.resolve(__dirname, "src"),
    config.resolve.alias.style = path.resolve(__dirname, "src/style"),
    config.resolve.alias.utils = path.resolve(__dirname, "src/utils")
};
