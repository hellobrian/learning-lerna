import React from 'react';
import Icon from '../build/index.esm';
import { select, text } from '@storybook/addon-knobs';
import iconManifest from '../icon-manifest.json';

export default {
    title: 'Icon'
};

const options = iconManifest.icons.map((icon) => icon.name);

export const Default = () => (
    <Icon
        style={{ fill: text('fill', 'blue') }}
        className={text('className', 'className')}
        name={select('name', options, options[0], 'name')}
    />
);
