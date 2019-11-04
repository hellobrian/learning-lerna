import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../build/index.esm';
import Icon from 'icon';

export default {
    title: 'Button'
};

export const Default = () => (
    <Button onClick={action('onClick')}>
        <Icon name="chevron" />
        wut up
    </Button>
);
