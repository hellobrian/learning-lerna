'use strict';

import React from 'react';
import styles from './Button.module.scss';

export function Button({ onClick, children, ...props }) {
    return (
        <div className={styles.root} {...props}>
            <h1>{children}</h1>
            <button onClick={onClick}>example</button>
        </div>
    );
}
