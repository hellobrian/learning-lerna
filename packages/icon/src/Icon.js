'use strict';

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.module.scss';
import SvgCalendar from './svg/calendar.svg';
import SvgChevron from './svg/chevron.svg';

export function Icon({ name, className = '', ...props }) {
    const classList = [styles.root, className].join(' ').trim();
    return (
        <Fragment>
            {name === 'calendar' && <SvgCalendar className={classList} {...props} />}
            {name === 'chevron' && <SvgChevron className={classList} {...props} />}
        </Fragment>
    );
}

Icon.propTypes = {
    name: PropTypes.oneOf(['calendar', 'chevron']).isRequired,
    className: PropTypes.string
};
