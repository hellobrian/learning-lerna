'use strict';
// packages
import React, { Fragment } from 'react';
import classNames from 'classnames';

// components
import Calendar from './svg/calendar.svg';
import Chevron from './svg/chevron.svg';
import Clock from './svg/clock.svg';
import Close from './svg/close.svg';
import Download from './svg/download.svg';
import House from './svg/house.svg';
import Menu from './svg/menu.svg';
import Pencil from './svg/pencil.svg';
import People from './svg/people.svg';
import Share from './svg/share.svg';
import SignOut from './svg/sign-out.svg';

// styles
import styles from './Icon.module.scss';

export function Icon({ name = '', src, className = '', ...props }) {
    const classList = classNames({
        [className]: true,
        [styles.root]: true,
        [styles.svg]: !src
    }).trim();

    const iconProps = { className: classList, ...props };

    const formattedName = name.toLowerCase().trim();

    return src ? (
        <img src={src} className={classList} {...props} />
    ) : (
        <Fragment>
            {formattedName === 'calendar' && <Calendar {...iconProps} />}
            {formattedName === 'chevron' && <Chevron {...iconProps} />}
            {formattedName === 'clock' && <Clock {...iconProps} />}
            {formattedName === 'close' && <Close {...iconProps} />}
            {formattedName === 'download' && <Download {...iconProps} />}
            {formattedName === 'house' && <House {...iconProps} />}
            {formattedName === 'menu' && <Menu {...iconProps} />}
            {formattedName === 'pencil' && <Pencil {...iconProps} />}
            {formattedName === 'people' && <People {...iconProps} />}
            {formattedName === 'share' && <Share {...iconProps} />}
            {formattedName === 'sign-out' && <SignOut {...iconProps} />}
        </Fragment>
    );
}
