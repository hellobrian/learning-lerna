import React from 'react';
import { select, text, files } from '@storybook/addon-knobs';
import Icon from '../build/index.esm';
import IconSrcExample from './svg/calendar.svg';
import iconManifest from '../icon-manifest.json';

export default {
    title: 'Icon',
    component: Icon
};

export const WithName = () => (
    <Icon
        style={{ fill: text('fill', 'currentColor') }}
        className={text('className', 'className')}
        name={select('name', iconManifest.icons, iconManifest.icons[0], 'name')}
    />
);

export const WithSrc = () => {
    const label = 'svgFiles';
    const accept = '.svg';
    const groupId = label;

    return (
        <Icon
            className={text('className', 'className')}
            style={{ width: text('width', '80px'), height: text('height', '80px') }}
            /**
             * import your SVG file and use it in src prop
             * src={IconSrcExample}
             */
            src={files(label, accept, IconSrcExample, groupId)}
        />
    );
};
