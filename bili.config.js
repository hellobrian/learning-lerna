module.exports = {
    input: 'src/index.js',
    output: {
        dir: 'build',
        // format: ["cjs", "esm"],
        format: ['esm'],
        extractCSS: false
    },
    plugins: {
        // rollup-plugin-react-svg
        'react-svg': {}
    }
};
