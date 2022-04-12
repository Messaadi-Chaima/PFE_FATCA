import React from 'react';
import NavBar from './StyledComponents/Menu/NavBar';
import Links from './StyledComponents/Menu/Links';
import Link1 from './StyledComponents/Menu/Link1';
function Menu() {
  const handleClick=()=>{
    return <h1 style={{padding:"100px"}}>TEST</h1>
  }
  return (
    <NavBar>
      <div className='Admin'>Administration</div>
        <Links>
            <li> <Link1 to='/' onClick={handleClick}>Gestion des Utilisateurs </Link1></li>
            <li> <Link1 to='/roles' >Gestion des Roles </Link1></li>
            <li> <Link1 to='/tableau' >Gestion des droit d'acces </Link1></li>
        </Links>
    </NavBar>
  );
}

export default Menu


