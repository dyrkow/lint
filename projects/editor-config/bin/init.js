#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "..", ".editorconfig");
const target = path.join(process.cwd(), ".editorconfig");

if (!fs.existsSync(source)) {
    console.error("@dyrkow/editor-config: .editorconfig not found in package");
    process.exit(1);
}

const force = process.argv.includes("--force");
if (fs.existsSync(target) && !force) {
    console.log(".editorconfig already exists. Use --force to overwrite.");
    process.exit(0);
}

fs.copyFileSync(source, target);
console.log("Created .editorconfig");
