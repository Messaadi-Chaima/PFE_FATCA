import React from 'react'
import Image1 from '../Images/parametre.png'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
function AccueilAdmin(){
    return(
        <div >
            <Box sx={{
                position: 'absolute',
                top: '10px',
                left: 'auto',
                right: '0px',
                bottom: '0',          
            }}>
         <Button variant='contained'  href='/Menu' color="success">Commencer</Button></Box>
         <img src={Image1} alt='parametre' style={{height:'90px'}} />
         <Typography variant='h3' align='center' color="GrayText" gutterBottom>Administration</Typography>
         <Typography variant="h5" align='center' color='ButtonText' paragraph>
         Bienvenu dans la page administration, vous pouvez tout de suit parametrer l'application
             en vous appuyons sur le boutton "Commencer" en haut à droite de votre écran, pour gérer 
             votre rôles grace aux les modules que nous vous proposants.</Typography>
             <Typography variant='h4' align='center'>Nos Modules</Typography>            
     <Card sx={{ maxWidth: 345, position: 'relative',
                top: '100px',
                left: '20%',
                right: '0px',
                bottom: '0',  }}>
      <CardMedia
        component="img"
        height="250"
        image="https://png.pngtree.com/png-vector/20190307/ourmid/pngtree-vector-user-management-icon-png-image_780394.jpg"
        alt="utilisateur"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Gestion des utilisateurs
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Pour gérer les rôles des utilisateurs avec les options suivantes: (Ajout, Suppression,modification,recherche)
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 345, position: 'relative',
                top: '-270px',
                left: '55%',
                right: '0px',
                bottom: '0',  }}>
      <CardMedia
        component="img"
        height="250"
        image="https://www.pngitem.com/pimgs/m/508-5089354_roles-and-responsibilities-png-transparent-png.png"
        alt="role"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Gestion des rôles
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Pour gérer les roles des roles avec les options suivantes: (Ajout, Suppression,modification,recherche)
        </Typography>
      </CardContent>
    </Card>
    {/*
    <Card sx={{ maxWidth: 345, position: 'relative',
                top: '200px',
                left: '40%',
                right: '0px',
                bottom: '0',  }}>
      <CardMedia
        component="img"
        height="250"
        image="https://png.pngtree.com/png-vector/20190919/ourlarge/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1742031.jpg"
        alt="acces"
      />
       
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Gestion des droits d'acces
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Pour gérer les roles des roles avec les options suivantes: (Ajout, Suppression)
        </Typography>
      </CardContent>
    </Card>*/}
        </div>
    );
}
export default AccueilAdmin