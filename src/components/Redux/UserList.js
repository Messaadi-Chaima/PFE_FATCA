import React, {Fragment, useState,useRef} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./userSlice";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import {  TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip'; 
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
const handleSupprimerUser=(id) =>{
    dispatch(deleteUser({id}));
}
const DateAjout =() =>{
  var format={year: 'numeric', month:'long', day:'numeric'}
  return new Date().toLocaleDateString([],DateAjout);
}
const [search,setSearch]= useState("");
const handleSearch = (e)=>{
console.log(e.target.value);
let value = e.target.value;
setSearch(value);
};
//console.log(search);

const [open, setOpen] = useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
  return (
<div>
        <Box sx={{
        float: 'right',
        }}>
            <Link to="/AjoutUtilisateur" style={{textDecoration: 'none'}}>
            <Tooltip title="Add User">
            <Fab color="success" aria-label="add">
                <AddIcon />
          </Fab>
          </Tooltip>
              </Link></Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end',transform: 'translate(320px,150px)' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField 
            variant="standard"
            label="Rechercher"
           id="input-with-sx" 
            onChange={handleSearch}
          />  
            </Box>
     
         <Table
         sx={{ maxWidth: '870px' ,transform: 'translate(340px,200px)', }} size="small" >       
        <TableHead>
           <TableRow>
          <TableCell >Nom d'utilisateur</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Role</TableCell>     
          <TableCell>Date d'ajoute</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
         </TableHead>
          <TableBody>
            { users.filter((user)=>{ console.log('id:',user.id)
              return user.name.includes(search);
            })
            .map((user) => ( 
                  <>
                  <TableRow key={user.id} >
                  <TableCell >{user.name}</TableCell>
              <TableCell >{user.email}</TableCell>
              <TableCell >{user.role}</TableCell>
              <TableCell>{DateAjout()}</TableCell> 
              <TableCell>
              <Tooltip title="Delete">
              <Fab size="small" color="success" aria-label="delete" sx={{ mr: 1 }} onClick={handleClickOpen}>
                   <DeleteIcon />
                </Fab>
                </Tooltip>

                <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">
          {"Voulez-vous vraiment supprimer cet utilisateur?"}
        </DialogTitle>
        <DialogActions>  
   <Link to='/Utilisateurs' style={{textDecoration: 'none'}}> <Button color='success' onClick={()=> {handleSupprimerUser(user.id)}}>
            Oui
          </Button></Link>
          <Link to='/Utilisateurs' style={{textDecoration: 'none'}}> <Button color='success' onClick={handleClose}>Non</Button></Link>
        </DialogActions>
      </Dialog>       

                <Link to={`/Modifier/${user.id}`} style={{textDecoration: 'none'}}>
                <Tooltip title="Edit">
          <Fab size="small"  color="success" aria-label="edit" >
                   <EditIcon />
                </Fab>
                 </Tooltip></Link>
              </TableCell> </TableRow></>
             )) }
          </TableBody>
        </Table>
      
</div>
  )
}
export default UserList
