"use strict";

import React from "react";
import styles from "./index.module.scss";

export function Button({ ...props }) {
  return <button className={styles.button} {...props} />;
}

export default Button;
