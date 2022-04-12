import React from 'react'
import styled from 'styled-components'
function Tableau() {
  const Button = styled.button`    
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 25px;
    border-radius: 5px;
    margin: 20px 0px;
    cursor: pointer;
    `;
  return (
    <Button>Ajout</Button> 


  );
}

export default Tableau;
