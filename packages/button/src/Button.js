"use strict";

import React from "react";
import styles from "./Button.module.scss";

export function Button({ ...props }) {
  return <div className={styles.root} {...props} />;
}



