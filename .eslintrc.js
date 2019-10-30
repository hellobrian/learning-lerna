module.exports = {
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        jest: true,
        node: true
    },
    globals: {},
    plugins: [
        // '@indeed/eslint-plugin-indeed',
        'prettier'
    ],
    extends: [
        // 'plugin:@indeed/eslint-plugin-indeed/recommended-react',
        'prettier'
    ],
    rules: {
        'react/prop-types': 'off',
        'operator-linebreak': 'off',
        indent: 'off',
        'object-curly-spacing': 'off',
        'no-invalid-this': 'off',
        'max-nested-callbacks': 'off',
        camelcase: [2, { properties: 'never' }],
        'no-use-before-define': ['error', 'nofunc'],
        complexity: ['warn', 20]
    },
    parser: 'babel-eslint',
    settings: {
        polyfills: ['Promise', 'fetch'],
        react: {
            version: 'detect'
        }
    }
};
