'use strict';

import PropTypes from 'prop-types';
import { Icon } from './Icon';
import iconManifest from '../icon-manifest.json';

Icon.propTypes = {
    name: PropTypes.oneOf(iconManifest.icons).isRequired,
    className: PropTypes.string
};

export default Icon;
