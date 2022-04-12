import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.nav`
align-items: center;
display: flex;
justify-content: space-between;
 position: fixed;
 width:100%;
 padding:1rem;
 background-color: #B6FFCE;
 color: crimson; 
 &:hover{
    box-shadow: inset 100px 0 0 0 #54b3d6;
    color: white;
 }
 `;

 const NavBar=(props) => {
     return <StyledMenu {...props}> {props.children}</StyledMenu>};

 export default NavBar