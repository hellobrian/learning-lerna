import React from 'react';
import Icon from '../build/index.esm';
import { select, text } from '@storybook/addon-knobs';
import iconManifest from '../icon-manifest.json';

export default {
    title: 'Icon'
};

export const Default = () => (
    <Icon
        style={{ fill: text('fill', 'blue') }}
        className={text('className', 'className')}
        name={select('name', iconManifest.icons, iconManifest.icons[0], 'name')}
    />
);
