import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Table from '../StyledComponents/Table/Table';
import Th from '../StyledComponents/Table/Th';
import Td from '../StyledComponents/Table/Td';
import Button1 from '../StyledComponents/Formulaire/Button1';
import Menu from '../Menu';
function AjouterRole() {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);

  return (
    <div> 
      <Menu />
      <h2 style={{transform: 'translateY(150px)',color:"#B22222"}}>Voici les role de votre utilisateurs</h2>
        <i> <p style={{transform: 'translateY(170px)',textAlign:'center'}}>Vous pouvez d'ajouter et supprimer un role de votre utilisateur en cliquant simplement sur le bouton Ajouter et Supprimer</p></i>
         <Table>       
        <thead>
           <tr>
          <Th >Nom d'utilisateur</Th>
          <Th>Role</Th>
          <Th>Action</Th>
        </tr>
         </thead>
          <tbody>
            { users.map(user => ( 
                 <tr> 
              <Td>{user.name}</Td>
              <Td>{user.role}</Td>
              <Td> 
              <Button1>Spprimer</Button1>
              <div style={{transform: 'translate(120px,-40px)'}}><Button1>Ajouter</Button1></div>
              </Td>
            </tr>
             )) }
          </tbody>
        </Table> 
      </div>
  );
}

export default AjouterRole;
