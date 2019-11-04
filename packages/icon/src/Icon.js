'use strict';
// packages
import React, { Fragment } from 'react';

// components
import Calendar from './svg/calendar.svg';
import Chevron from './svg/chevron.svg';
import Clock from './svg/clock.svg';
import Close from './svg/close.svg';
import House from './svg/house.svg';
import Menu from './svg/menu.svg';
import People from './svg/people.svg';
import SignOut from './svg/sign-out.svg';

// styles
import styles from './Icon.module.scss';

export function Icon({ name = '', className = '', children, ...props }) {
    const classList = [styles.root, className].join(' ').trim();
    const iconProps = { className: classList, ...props };
    const formattedName = name.toLowerCase();

    return (
        <Fragment>
            {formattedName === 'calendar' && <Calendar {...iconProps} />}
            {formattedName === 'chevron' && <Chevron {...iconProps} />}
            {formattedName === 'clock' && <Clock {...iconProps} />}
            {formattedName === 'close' && <Close {...iconProps} />}
            {formattedName === 'house' && <House {...iconProps} />}
            {formattedName === 'menu' && <Menu {...iconProps} />}
            {formattedName === 'people' && <People {...iconProps} />}
            {formattedName === 'sign-out' && <SignOut {...iconProps} />}
            {children}
        </Fragment>
    );
}
