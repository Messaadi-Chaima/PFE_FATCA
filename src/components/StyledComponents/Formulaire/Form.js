import React from 'react';
import styled from 'styled-components';
const StyledForm = styled.form`
    transform: translate(500px,70px);
    width: 400px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  `;
  
 const Form=(props) => {
     return <StyledForm {...props}> {props.children}</StyledForm>};

 export default Form