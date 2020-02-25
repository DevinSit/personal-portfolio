import path from "path";

export default (config, env, helpers) => {
    config.resolve.alias.assets = path.resolve(__dirname, "src/assets")
    config.resolve.alias.components = path.resolve(__dirname, "src/components")
    config.resolve.alias.images = path.resolve(__dirname, "src/images")
    config.resolve.alias.src = path.resolve(__dirname, "src")
    config.resolve.alias.style = path.resolve(__dirname, "src/style")
    config.resolve.alias.utils = path.resolve(__dirname, "src/utils")

    // Disable adding hashes to the css classes
    const {loader: cssLoader} = helpers.getLoadersByName(config, "css-loader")[0];
    cssLoader.options.localIdentName = "[local]";

    // Turn on the preload option of HtmlWebpackPlugin, so that <link> tags in index.html get the 'rel=preload' option.
    // For reference, a 'plugin wrapper' is defined here: https://github.com/preactjs/preact-cli/blob/master/docs/webpack-helpers.md#pluginwrapper.
    const htmlWebpackPluginWrapper = helpers.getPluginsByName(config, "HtmlWebpackPlugin")[0];

    if (htmlWebpackPluginWrapper) {
        htmlWebpackPluginWrapper.plugin.options.preload = true;
    }
};
