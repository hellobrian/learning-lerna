import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../build/index.esm';
import CloseIcon from 'close-icon';

export default {
    title: 'Button'
};

export const Default = () => (
    <Button onClick={action('onClick')}>
        <CloseIcon />
        wut up
    </Button>
);
