import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
padding:0 0.3rem;
color: crimson;
text-decoration: none;
&:hover{
  box-shadow: inset 250px 0px 0px 0px #FDD7AA;
  color: white;
  cursor: pointer;
}
 `;
 const Link1=(props) => {
     return <StyledLink {...props}> {props.children}</StyledLink>};

 export default Link1