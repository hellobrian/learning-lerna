---
to: packages/<%= reactFolderName %>/lib/<%= reactComponentName %>.js
---
"use strict";

import React from "react";
import styles from "./<%= reactComponentName %>.module.scss";

export function <%= reactComponentName %>({ ...props }) {
  return <div className={styles.root} {...props} />;
}



