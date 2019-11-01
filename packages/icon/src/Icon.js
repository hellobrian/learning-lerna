'use strict';

import React, { Fragment } from 'react';
import styles from './Icon.module.scss';
import Calendar from './svg/calendar.svg';
import Chevron from './svg/chevron.svg';
import Clock from './svg/clock.svg';

export function Icon({ name = '', className = '', ...props }) {
    const classList = [styles.root, className].join(' ').trim();
    const iconProps = { className: classList, ...props };
    const formattedName = name.toLowerCase();

    return (
        <Fragment>
            {formattedName === 'calendar' && <Calendar {...iconProps} />}
            {formattedName === 'chevron' && <Chevron {...iconProps} />}
            {formattedName === 'clock' && <Clock {...iconProps} />}
        </Fragment>
    );
}
