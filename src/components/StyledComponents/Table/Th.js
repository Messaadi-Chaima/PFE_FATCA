import React from 'react';
import styled from 'styled-components';

const StyledTh = styled.th`
    border: 1px solid white;
    padding: 8px;
    padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #D3D3D3;
  color: black;
  `;
  const Th=(props) => {
    return <StyledTh {...props}> {props.children}</StyledTh>};

export default Th