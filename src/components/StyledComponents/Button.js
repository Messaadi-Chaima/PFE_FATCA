import React from 'react';
import styled from 'styled-components';

const StyledButton =styled.button`    
border: none;
border-radius: 15px;
box-shadow: 0 0 8px rgb(207, 207, 207);
position: absolute;
width: 130px;
height: 50px;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
background-color: green;
border: 2.5px solid green;
transform: translate(590px, -150px);
font-size: 16px;
`;
 const Button=(props) => {
     return <StyledButton {...props}> {props.children}</StyledButton>};

 export default Button