import React from 'react';
import styled from 'styled-components';
const StyledTd = styled.td`
border: 1px solid #ddd;
&:hover{
  background-color: #B6FFCE;
}
`;
  const Td=(props) => {
    return <StyledTd {...props}> {props.children}</StyledTd>};

export default Td