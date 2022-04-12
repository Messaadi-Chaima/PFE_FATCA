import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
    background-color: #F6FFA4;
    border-collapse: collapse;
    width: 90%;
    transform: translateY(200px);
    margin-left: auto;
     margin-right: auto;
  `;
 const Table=(props) => {
     return <StyledTable {...props}> {props.children}</StyledTable>};

 export default Table