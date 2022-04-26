import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Menu from '../Menu';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from "@mui/material";
function AjouterDroitAcces() {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  return (
    <div> 
      <Menu />
        <Typography variant='h6' sx={{transform: 'translate(340px,150px)'}}>Voici les droits d'acces de votre utilisateurs</Typography>
         <Typography variant='body1' paragraph sx={{transform: 'translate(100px,170px)',textAlign:'center'}}>Vous pouvez d'autoriser
         et déautoriser l'acces de votre utilisateur en cliquant simplement sur le bouton Ajouter et Supprimer</Typography>
         <Box sx={{
        float: 'right',
        }}>
            <Fab color="success" aria-label="add">
                <AddIcon />
          </Fab>
             </Box>
             <Box sx={{transform: 'translate(300px,170px)', }}>
                <Fab  aria-label="search" size="small">
                  <SearchIcon />
                </Fab>
              <TextField 
            variant="outlined"
            label="Rechercher"
          /></Box>
            <Table
         sx={{ maxWidth: '870px' ,transform: 'translate(340px,200px)', }} size="small" >       
        <TableHead>
           <TableRow>
          <TableCell >Nom d'utilisateur</TableCell>
          <TableCell>Droit d'acces</TableCell>
          <TableCell>Action</TableCell>   
        </TableRow>
         </TableHead>
          <TableBody>
            { users.map(user => ( 
                 <TableRow key={user.id}> 
              <TableCell>{user.name}</TableCell>
              <TableCell>{}</TableCell>
              <TableCell>
                <Fab size="small" color="success" aria-label="Edit" sx={{ mr: 1 }} >
                   <EditIcon/>
                </Fab>
              <Fab size="small" color="success" aria-label="delete" sx={{ mr: 1 }} >
                   <DeleteIcon />
                </Fab>
              </TableCell>
            </TableRow>
             )) }
          </TableBody>
        </Table>
      </div>
  );
}

export default AjouterDroitAcces;
