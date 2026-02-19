module.exports = {
    env: {
        'react-native/react-native': true,
        browser: false
    },

    plugins: ['react-native'],

    rules: {
        'react-native/no-unused-styles': 'error',
        'react-native/split-platform-components': 'error',
        'react-native/no-inline-styles': 'warn',
        'react-native/no-color-literals': 'warn',
        'react-native/no-raw-text': 'error',
        'react-native/no-single-element-style-arrays': 'warn',
        'react-native/sort-styles': 'off'
    },

    overrides: [
        {
            files: [
                '*.test.{js,ts,tsx}',
                '*.spec.{js,ts,tsx}',
                '**/__tests__/**/*.{js,ts,tsx}',
                '**/__mocks__/**/*.{js,ts,tsx}'
            ],
            rules: {
                'react-native/no-inline-styles': 'off'
            }
        }
    ]
};
