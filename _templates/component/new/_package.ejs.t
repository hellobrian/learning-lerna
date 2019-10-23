---
to: packages/<%= reactFolderName %>/package.json
---

{
  "name": "<%= reactFolderName %>",
  "version": "0.0.0",
  "description": "<%= reactFolderName %>",
  "keywords": [
    "<%= reactFolderName %>"
  ],
  "license": "MIT",
  "main": "lib/index.js",
  "directories": {
    "lib": "lib"
  },
  "files": [
    "lib"
  ],
  "publishConfig": {
    "registry": "https://nexus.corp.indeed.com/repository/npm"
  },
  "scripts": {
    "test": "echo \"Error: run tests from root\" && exit 1",
    "prebuild": "rm -rf build",
    "build": "bili --config ../../bili.config.js",
    "watch": "bili --watch --config ../../bili.config.js"
  }
}
