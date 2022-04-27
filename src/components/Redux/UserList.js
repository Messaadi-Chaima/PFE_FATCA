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
import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
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
  return (
<div>
        <Box sx={{
        float: 'right',
        }}>
            <Link to="/AjoutUtilisateur" style={{textDecoration: 'none'}}>
            <Fab color="success" aria-label="add">
                <AddIcon />
          </Fab>
              </Link></Box>
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
          <TableCell>Email</TableCell>
          <TableCell>Role</TableCell>     
          <TableCell>Date d'ajoute</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
         </TableHead>
          <TableBody>
            { users.map(user => ( 
                 <TableRow key={user.id}> 
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{DateAjout()}</TableCell>
              <TableCell>
              <Fab size="small" color="success" aria-label="delete" sx={{ mr: 1 }} onClick={()=> {if(window.confirm('Voulez-vous vraiment supprimer cet utilisateur?')){ handleSupprimerUser(user.id);}}}>
                   <DeleteIcon />
                </Fab>
          <Fab size="small"  color="success" aria-label="edit" >
                   <EditIcon />
                </Fab> 
              </TableCell>
            </TableRow>
             )) }
          </TableBody>
        </Table>
</div>
  )
}
export default UserList