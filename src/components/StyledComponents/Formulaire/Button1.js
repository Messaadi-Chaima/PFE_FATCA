import React from 'react';
import styled from 'styled-components';
const StyledButton1 = styled.button`
    display: block;
    background-color: #f7797d;
    color: #fff;
    font-size: 0.9rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
  `;
  
 const Button1=(props) => {
     return <StyledButton1 {...props}> {props.children}</StyledButton1>};

 export default Button1