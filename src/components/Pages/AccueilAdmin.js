import React from 'react'
import Image from '../Images/acces.png'
import Image1 from '../Images/parametre.png'
import Image2 from '../Images/Role.png'
import Image3 from '../Images/utilisateur.jpg'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Button from '../StyledComponents/Button'
const StyledImg = styled.img`
height:350px;
border-style: outset;
border-color: Salmon;
&:hover{
-webkit-transform: scale(0.9);
transform: scale(0.9);
border-color: LightSalmon;
&:hover{
cursor: pointer;
}
}
`;
const StyledDiv = styled.div`
transform: translateX(200px);
`;
const StyledH1 = styled.h1`
transform: translate(500px, 50px);
`;
const StyledP = styled.p`
text-align:center;
transform:translateY(200px);
font-family:Comic Sans MS, Comic Sans, cursive;
font-size:18px;
&:hover{
border-style: outset;
border-color: Salmon;
cursor: pointer;
font-style: italic;
font-size:18.5px;
}
`;
const StyledH2 = styled.h2`
text-align:center;
transform: translateY(300px);
`;
const StyledImg1 = styled.img`
height:90px;
&:hover{
cursor: pointer;
transform: scale(1.1) rotate(260deg);
}
`;
const StyledDiv1 = styled.div`
transform:translate(65px,140px);
`;
function AccueilAdmin(){
    return(
        <div >
         <StyledDiv1><Link to='/Menu'><Button>Commencer</Button></Link></StyledDiv1> 
            <StyledImg1 src={Image1} alt='parametre'/>
            <StyledH1>Administration</StyledH1>
            <div>
            <StyledP>Bienvenu dans la page administration, vous pouvez tout de suit parametrer l'application
             en vous appuyons sur le boutton "Commencer" en haut à droite de votre écran, pour gérer votre rôles grace aux les modules que nous vous proposants.
            </StyledP>
            <StyledH2>Nos Modules</StyledH2>
            <div style={{transform:'translate(300px,400px)'}}>
            <StyledDiv>
           <StyledImg src={Image3} alt='utilisateur'/>   
           <h3>Gestion des utilisateurs</h3>
            <p>Pour gérer les utilisateurs avec les options suivantes:</p> 
            <p>(Ajout, Suppression, Rechercher) </p>
            </StyledDiv>
            <StyledDiv >
          <StyledImg src={Image2} alt='Role'/>
            <h3>Gestion des roles</h3>
            <p>Pour gérer les roles des utilisateurs avec les options suivantes:</p>
            <p>(Ajout, Suppression)</p>
            </StyledDiv>
            <StyledDiv>
            <StyledImg src={Image} alt='Acces'/>
            <h3>Gestion des droits d'acces </h3>
            <p>Pour gérer les droits d'acces avec les options suivantes:</p>
            <p>(Ajout, Suppression)</p>
            </StyledDiv>
            </div>
            </div>
        </div>
    );
}
export default AccueilAdmin