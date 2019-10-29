"use strict";

import React from "react";
import styles from "./TestComp.module.scss";

export function TestComp({ ...props }) {
  return <div className={styles.root} {...props} />;
}



