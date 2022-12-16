module.exports = {
    plugins: ["react"],

    // Rules
    rules: {
        "react/boolean-prop-naming": [
            2,
            {
                rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
                message: "Boolean props must start with 'is' or 'has'",
            },
        ],
        "react/destructuring-assignment": [2, "always"],
        "react/function-component-definition": [
            2,
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "react/no-access-state-in-setstate": [2],
        "react/no-array-index-key": [2],
        "react/no-dange": [2],
        "react/no-deprecated": [2],
        "react/no-direct-mutation-state": [2],
        "react/no-multi-comp": [2],
        "react/no-render-return-value": [2],
        "react/no-unescaped-entities": [2],
        "react/no-unknown-property": [2],
        "react/no-unused-state": [2],
        "react/prefer-stateless-function": [2],

        // JSX
        "react/jsx-boolean-value": ["always"],
        "react/jsx-closing-bracket-location": 2,
        "react/jsx-closing-tag-location": 2,
        "react/jsx-curly-newline": 2,
        "react/jsx-curly-spacing": [
            2,
            {
                when: "never",
                attributes: { allowMultiline: false },
                children: true,
            },
        ],
        "react/jsx-equals-spacing": [2, "never"],
        "react/jsx-fragments": [2, "syntax"],
        "react/jsx-handler-names": [
            2,
            {
                checkLocalVariables: true,
                checkInlineFunction: true,
            },
        ],
        "react/jsx-indent": [
            2,
            4,
            { checkAttributes: true, indentLogicalExpressions: true },
        ],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-key": [2, { checkKeyMustBeforeSpread: true }],
        "react/jsx-newline": [2, { prevent: true }],
        "react/jsx-no-duplicate-props": [2],
        "react/jsx-uses-react": [2],
        "react/jsx-no-literals": [2],
        "react/jsx-no-undef": [2],
        "react/jsx-no-useless-fragment": [2],
        "react/jsx-one-expression-per-line": [2, { allow: "literal" }],
        "react/jsx-pascal-case": [2, { allowNamespace: true }],
        "react/jsx-props-no-multi-spaces": [2],
        "react/jsx-space-before-closing": ["always"],
        "react/jsx-tag-spacing": [2],
    },
};
