import React from 'react'
//import styled from 'styled-components'
//import Image1 from '../Images/icon.png'
//import { Link } from 'react-router-dom'
import UserList from '../Redux/UserList'
import Menu from '../Menu'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function  Utilisateurs() {
  /* 
  const StyledDiv = styled.div`    
  padding-top: 60px;
`;
const StyledP = styled.p`    
font-size: 20px;
text-align: center;
font-family: cursive; 
`;

const StyledImg = styled.img`    
height:70px;
width:80px;
float: right;
transform: translateY(44px);
&:hover{
  cursor: pointer;
}
`;
const StyledLink = styled(Link)`    
font-size: 20px;
    display: block;
    text-decoration: none;
    color:#0e172c;
    transition: 1.5s;
    &:hover{
      letter-spacing: 5px;
      color: crimson;
    }
`;
const StyledH2 = styled.h2`    
font-size: 25px;
transform: translateY(200px);
color:#B22222;
`;
*/
return (
  <div>
    <Menu />
<div>
  <Box sx={{transform: 'translate(350px,15px)'}}>
<Typography variant='h6' paragraph>Vous pouvez ajouter un utilisateur en cliquant simplement sur le bouton Ajout a droite de votre ecran</Typography></Box>
{/* 
<StyledP> Vous pouvez ajouter un utilisateur en cliquant simplement sur le bouton Ajout a droite de votre ecran</StyledP>*/}
{/*<StyledImg src={Image1} alt='ajout' />*/}
<Box sx={{transform: 'translate(350px,200px)'}}>
<Typography variant='h6'>Vos Utilisateurs</Typography></Box>
<UserList />
</div>
</div>
  );
}

export default Utilisateurs
