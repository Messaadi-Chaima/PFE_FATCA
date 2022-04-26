import React from 'react'
import { useDispatch, useSelector } from "react-redux";
//import Table from '../StyledComponents/Table/Table';
//import Th from '../StyledComponents/Table/Th';
//import Td from '../StyledComponents/Table/Td';
//import Button1 from '../StyledComponents/Formulaire/Button1';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
//import TableContainer from '@mui/material/TableContainer';
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
function AjouterRole() {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  return (
    <div> 
      <Menu />
    {/*   <h2 style={{transform: 'translateY(150px)',color:"#B22222"}}>Voici les role de votre utilisateurs</h2>
        <i> <p style={{transform: 'translateY(170px)',textAlign:'center'}}>Vous pouvez d'ajouter
         et supprimer un role de votre utilisateur en cliquant simplement sur le bouton Ajouter et Supprimer</p></i>*/}
        {/*  <Table>       
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
        </Table> */}
        <Typography variant='h6' sx={{transform: 'translate(340px,150px)'}}>Voici les role de votre utilisateurs</Typography>
         <Typography variant='body1' paragraph sx={{transform: 'translate(100px,170px)',textAlign:'center'}}>Vous pouvez d'ajouter
         et supprimer un role de votre utilisateur en cliquant simplement sur le bouton Ajouter et Supprimer</Typography>
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
          <TableCell>Role</TableCell>
          <TableCell>Action</TableCell>   
        </TableRow>
         </TableHead>
          <TableBody>
            { users.map(user => ( 
                 <TableRow key={user.id}> 
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.role}</TableCell>
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

export default AjouterRole;
