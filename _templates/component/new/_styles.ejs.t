---
to: packages/<%= reactFolderName %>/src/<%= reactComponentName %>.module.scss
sh: "lerna run build --scope=<%= reactFolderName %>"
---
.root {
  outline: 1px solid red;
}