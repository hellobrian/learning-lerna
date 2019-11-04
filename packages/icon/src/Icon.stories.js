import React from 'react';
import Icon from '../build/index.esm';
import { select, text, files } from '@storybook/addon-knobs';
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

export const CustomIcon = () => {
    const label = 'svgFiles';
    const accept = '.svg';
    const defaultValue = [];
    const groupId = label;

    return (
        <Icon
            style={{ width: text('width', '80px'), height: text('height', '80px') }}
            className={text('className', 'className')}
            src={files(label, accept, defaultValue, groupId)}
        />
    );
};
