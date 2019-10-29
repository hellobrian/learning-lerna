---
to: packages/<%= reactFolderName %>/src/<%= reactComponentName %>.test.js
sh: "lerna run build --scope=<%= reactFolderName %>"
---

// import { <%= reactComponentName %> } from './<%= reactComponentName %>';

it('should pass', () => {
  expect(1).toEqual(1)
})