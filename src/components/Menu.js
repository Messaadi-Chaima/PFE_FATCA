import React from 'react';
import Links from './StyledComponents/Menu/Links';
import styled from 'styled-components';
import Button from './StyledComponents/Menu/Button';
import Div from './StyledComponents/Menu/Div';
  const StyledDiv2 = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  `;
  const StyledDiv1 = styled.div`
  float: left;
  overflow: hidden;
  font-size: 16px;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  :hover ${StyledDiv2}{
    display: block;
  }
  `;
function Menu() {
  return (
    <Div>
    <StyledDiv1>
<Button>Gestion des utilisateur</Button>
<StyledDiv2>
  <Links to='/Utilisateurs'>Ajouter un utilisateur</Links>
  <Links to='/SpprimerUtilisateur'>Supprimer un utilisateur</Links>
</StyledDiv2>
</StyledDiv1> 
<StyledDiv1>
<Button>Gestion des Roles</Button>
<StyledDiv2>
  <Links to='/AjouterRole'>Ajouter un Role</Links>
  <Links to='/SupprimerRole'>Supprimer un Role</Links>
</StyledDiv2>
</StyledDiv1> 
<StyledDiv1>
<Button>Gestion des droits d'acces</Button>
<StyledDiv2>
  <Links to='/AjouterDroitAcces'>Ajouter un droit d'acces</Links>
  <Links to='/SupprimerDroitAcces'>Supprimer un  droit d'acces</Links>
</StyledDiv2>
</StyledDiv1> 
</Div>
  );
}
export default Menu;
