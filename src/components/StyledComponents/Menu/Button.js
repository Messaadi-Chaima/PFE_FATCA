import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
font-size: 16px;  
border: none;
outline: none;
color: white;
padding: 14px 16px;
background-color: inherit;
font-family: inherit;
margin: 0;
&:hover{
  background-color: crimson;
  cursor: pointer;
}
`;
 const Button=(props) => {
     return <StyledButton {...props}> {props.children}</StyledButton>};

 export default Button