import React from 'react';
import styled from 'styled-components';
const StyledFieldset = styled.fieldset`
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin: 20px 0;
  
    legend {
      padding: 0 10px;
    }
  
    label {
      padding-right: 20px;
    }
  
    input {
      margin-right: 10px;
    }
  `;
 const Fieldset=(props) => {
     return <StyledFieldset {...props}> {props.children}</StyledFieldset>};

 export default Fieldset