const json = require("json-update");

const version = process.argv[2];

json.update("package.json", { version });
