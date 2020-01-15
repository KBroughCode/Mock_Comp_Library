import React, { Component } from 'react';
import styled, {css} from 'styled-components';

const styledButton = {
    backgroundColor: "blue",
    color: "Black",
    fontSize: "40px",
    margin: "1em",
    padding: "0.25em 1em",
    border: "2px solid palevioletred",
    borderRadius: "3px",
};

const Button = ({children}) => (
    <button style={styledButton}>{children}
        </button>
);

export default Button;