import React from 'react';
import Button from './Button';

export default { 
    title: 'Button',
 };

export const withHelloText = () => <Button>Lalalala</Button>;

export const withEmoji = () => (
  <Button><span>😀 😎 👍 💯</span></Button>
);