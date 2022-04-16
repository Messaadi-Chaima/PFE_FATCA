import React from 'react';
import styled from 'styled-components';
const StyledDiv = styled.div`
overflow: hidden;
background-color: black;
  `;
 const Div=(props) => {
     return <StyledDiv {...props}> {props.children}</StyledDiv>};

 export default Div