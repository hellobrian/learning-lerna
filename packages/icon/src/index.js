'use strict';

import PropTypes from 'prop-types';
import { Icon } from './Icon';
import iconManifest from '../icon-manifest.json';

Icon.propTypes = {
    // src: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.oneOf(iconManifest.icons),
    className: PropTypes.string
};

export default Icon;
