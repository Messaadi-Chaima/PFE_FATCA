import React from 'react';
import styled from 'styled-components';

const StyledTh = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #6495ED;
  color: black;
  `;
  const Th=(props) => {
    return <StyledTh {...props}> {props.children}</StyledTh>};

export default Th