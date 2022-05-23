import React from "react";
import {Drawer,List,ListItem,ListItemText,ListItemIcon} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
//import KeyIcon from '@mui/icons-material/Key';
import { useNavigate } from "react-router-dom";
import ContactsSharpIcon from '@mui/icons-material/ContactsSharp';

function Menu(props){
  const navigate = useNavigate();
  const ItemsList=[
    {text:'Gestion des utilisateurs',
     icon: <PersonIcon />,
     onClick: () => navigate('/Utilisateurs')
  },
  { text:'Gestion des rôles',
  icon: <AssignmentIcon />,
  onClick: () => navigate('/AjouterRole')
},
{text:'Tableau des comptes bancaires',
  icon: <ContactsSharpIcon />,
  onClick: () => navigate('/TabCompte')
},
{/* 
  {text:'Gestion des droits acces',
  icon: <KeyIcon />,
  onClick: () => navigate('/AjouterDroitAcces')
},*/}
  ];
  return(
<Drawer variant="permanent" anchor="left">
  <List>
    {
      ItemsList.map((item,index) => {
        const {text,icon, onClick}=item;
        return (
        <ListItem button key={text} onClick={onClick}>
          {icon && <ListItemIcon>{icon}</ListItemIcon>}
          <ListItemText primary={text} />
        </ListItem>
        );
        })}
  </List>
</Drawer>
  );
}
export default Menu