import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const StyledLink = styled(Link)`
float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover{
    background-color: #ddd;
  }
  `;
 const Links=(props) => {
     return <StyledLink {...props}> {props.children}</StyledLink>};

 export default Links