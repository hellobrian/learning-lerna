// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
    // storybook comes with a default file-loader config;
    // passing our own file-loader config won't allow static files to render correctly for some reason
    // (https://stackoverflow.com/a/57074973/2058360)
    //
    // First we find the existing file-loader config
    let rule = config.module.rules.find(
        (r) =>
            r.test &&
            r.test.toString().includes('svg') &&
            r.loader &&
            r.loader.includes('file-loader')
    );

    // finally, we add our test regex string to it, taken from webpack.common.js
    rule.test = /\.(png|jpg|gif|svg|ico|pdf)$/;

    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    // config.module.rules.push(babelLoader, sassModuleLoader({ isDev: true }));

    // Return the altered config
    return config;
};
