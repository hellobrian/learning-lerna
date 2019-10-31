'use strict';

import PropTypes from 'prop-types';
import { Icon } from './Icon';
import iconManifest from '../icon-manifest.json';

const allowedNames = iconManifest.icons.map((icon) => icon.name);

Icon.propTypes = {
    name: PropTypes.oneOf(allowedNames).isRequired,
    className: PropTypes.string
};

export default Icon;
