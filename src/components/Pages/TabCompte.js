import React from 'react'
import Menu from '../Menu';
import { useDispatch, useSelector } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';

function TabCompte() {
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);
  return (
    <div>
        <Menu />

        <Table
         sx={{ maxWidth: '870px' ,transform: 'translate(340px,50px)', }} size="small" >       
        <TableHead>
           <TableRow>
           <TableCell >Compte</TableCell>
          <TableCell >Nom d'utilisateur</TableCell>
          <TableCell>Historique </TableCell>
          
        </TableRow>
         </TableHead>
          <TableBody>
            { users.map((user) => ( 
                  <>
                  <TableRow key={user.id} >
                 <TableCell>
                 <Avatar sx={{ bgcolor: green[500] }}>
                     {user.name[0]}
                 </Avatar>
                 </TableCell>
                 <TableCell >{user.name}</TableCell>
              </TableRow></>
             )) }
          </TableBody>
        </Table>
    </div>
  )
}

export default TabCompte