module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    parserOptions: {
        project: true,
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    rules: {
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/consistent-generic-constructors": "error",
        "@typescript-eslint/consistent-indexed-object-style": "error",
        // "@typescript-eslint/explicit-function-return-type": "error", // тоже бесит
        "@typescript-eslint/no-unsafe-assignment": 0, // бесит
        "@typescript-eslint/no-unsafe-call": 0, // бесит
        "@typescript-eslint/member-ordering": [
            "error",
            {
                default: [
                    "signature",
                    "call-signature",

                    "public-static-field",
                    "protected-static-field",
                    "private-static-field",
                    "#private-static-field",

                    "public-decorated-field",
                    "protected-decorated-field",
                    "private-decorated-field",

                    "public-instance-field",
                    "protected-instance-field",
                    "private-instance-field",
                    "#private-instance-field",

                    "public-abstract-field",
                    "protected-abstract-field",

                    "public-field",
                    "protected-field",
                    "private-field",
                    "#private-field",

                    "static-field",
                    "instance-field",
                    "abstract-field",

                    "decorated-field",

                    "field",

                    "static-initialization",

                    "public-static-get",
                    "protected-static-get",
                    "private-static-get",
                    "#private-static-get",

                    "public-decorated-get",
                    "protected-decorated-get",
                    "private-decorated-get",

                    "public-instance-get",
                    "protected-instance-get",
                    "private-instance-get",
                    "#private-instance-get",

                    "public-abstract-get",
                    "protected-abstract-get",

                    "public-get",
                    "protected-get",
                    "private-get",
                    "#private-get",

                    "static-get",
                    "instance-get",
                    "abstract-get",

                    "decorated-get",

                    "get",

                    "public-static-set",
                    "protected-static-set",
                    "private-static-set",
                    "#private-static-set",

                    "public-decorated-set",
                    "protected-decorated-set",
                    "private-decorated-set",

                    "public-instance-set",
                    "protected-instance-set",
                    "private-instance-set",
                    "#private-instance-set",

                    "public-abstract-set",
                    "protected-abstract-set",

                    "public-set",
                    "protected-set",
                    "private-set",
                    "#private-set",

                    "static-set",
                    "instance-set",
                    "abstract-set",

                    "decorated-set",

                    "set",

                    "public-constructor",
                    "protected-constructor",
                    "private-constructor",

                    "constructor",

                    "public-static-method",
                    "protected-static-method",
                    "private-static-method",
                    "#private-static-method",

                    "public-decorated-method",
                    "protected-decorated-method",
                    "private-decorated-method",

                    "public-instance-method",
                    "protected-instance-method",
                    "private-instance-method",
                    "#private-instance-method",

                    "public-abstract-method",
                    "protected-abstract-method",

                    "public-method",
                    "protected-method",
                    "private-method",
                    "#private-method",

                    "static-method",
                    "instance-method",
                    "abstract-method",

                    "decorated-method",

                    "method",
                ],
            },
        ],
    },
};
