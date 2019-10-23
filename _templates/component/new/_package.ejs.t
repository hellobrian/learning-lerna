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
  "main": "build/index.esm.js",
  "source": "src/index.js",
  "files": [
    "build",
    "src"
  ],
  "publishConfig": {
    "access": "public"
  },
  "scripts": {
    "test": "echo \"Error: run tests from root\" && exit 1",
    "prebuild": "rm -rf build",
    "build": "bili --config ../../bili.config.js",
    "watch": "bili --watch --config ../../bili.config.js"
  }
}