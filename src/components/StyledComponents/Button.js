import React from 'react';
import styled from 'styled-components';

const StyledButton =styled.button`    
border: none;
border-radius: 15px;
box-shadow: 0 0 8px rgb(207, 207, 207);
position: absolute;
width: 200px;
height: 65px;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
background-color: crimson;
border: 2.5px solid #0e172c;
transform: translate(500px, -90px);
font-size: 16px;
transition: background-color 2.2s;
transition-duration: 3s;
transition: 1.5s;
&:hover{
  border: none;
  padding: 15px;
  border-radius: 15px;
  box-shadow: inset 0 0 8px #f9f8fc;
  position: absolute;
    top: 30px;
    background-color: #F9C0C0;
    color:crimson;
    font-size: 18px;
    cursor: pointer;
}
`;
 const Button=(props) => {
     return <StyledButton {...props}> {props.children}</StyledButton>};

 export default Button