import React from 'react'
import UserList from '../Redux/UserList'
import Menu from '../Menu'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function  Utilisateurs() {
return (
  <div>
    <Menu />
<div>
  <Box sx={{transform: 'translate(350px,15px)'}}>
<Typography variant='h6' paragraph>Vous pouvez ajouter un utilisateur en cliquant simplement sur le bouton Ajout a droite de votre écran</Typography></Box>
<Box sx={{transform: 'translate(350px,120px)'}}>
<Typography variant='h6'>Vos Utilisateurs</Typography></Box>
<UserList />
</div>
</div>
  );
}

export default Utilisateurs
