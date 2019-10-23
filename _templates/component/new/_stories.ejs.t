---
to: packages/<%= reactFolderName %>/lib/<%= reactComponentName %>.stories.js
---

import React from "react";
import <%= reactComponentName %> from "../build/index.esm";

export default {
  title: "<%= reactComponentName %>"
};

export const Default = () => <<%= reactComponentName %>>wut up</<%= reactComponentName %>>;
