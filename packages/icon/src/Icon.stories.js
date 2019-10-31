import React from 'react';
import Icon from '../build/index.esm';
import { select, text } from '@storybook/addon-knobs';

export default {
    title: 'Icon'
};

const options = ['calendar', 'chevron'];

export const Default = () => (
    <Icon
        className={text('className', 'className')}
        name={select('name', options, options[0], 'name')}
    />
);
