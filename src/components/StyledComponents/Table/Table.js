import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
    background-color: white;
    border-collapse: collapse;
    width: 70%;
    transform: translate(150px,210px);
    margin-left: auto;
     margin-right: auto;
  `;
 const Table=(props) => {
     return <StyledTable {...props}> {props.children}</StyledTable>};

 export default Table