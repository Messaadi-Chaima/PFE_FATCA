import React from 'react';
import styled from 'styled-components';

const StyledLinks = styled.ul`
display: flex;
list-style: none;
 padding: 0;
 margin: 0;
 `;

 const Links=(props) => {
     return <StyledLinks {...props}> {props.children}</StyledLinks>};

 export default Links