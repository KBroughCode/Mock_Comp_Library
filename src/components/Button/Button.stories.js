import React from 'react';
import Button from './Button';

export default { 
    title: 'Button',
 };

export const withHelloText = () => <Button>Hello Wurld</Button>;

export const withEmoji = () => (
  <Button><span>Emoji Button 😎</span></Button>
);