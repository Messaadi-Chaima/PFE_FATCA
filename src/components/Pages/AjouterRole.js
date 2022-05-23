import React,{useState} from 'react'
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
import { Link } from "react-router-dom";
import { deleteUser } from "../Redux/userSlice"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button";

function AjouterRole() {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  {/*-------------------search------------------------------------------------ */}
  const [search,setSearch]= useState("");
const handleSearch = (e)=>{
console.log(e.target.value);
let value = e.target.value;
setSearch(value);
};
//console.log(search);
const handleSupprimerUser=(id) =>{
  dispatch(deleteUser({id}));
}

const [open, setOpen] = useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

  return (
    <div> 
      <Menu />
        <Typography variant='h6' sx={{transform: 'translate(340px,100px)'}}>Voici les role de votre utilisateurs</Typography>
        {/* 
         <Typography variant='body1' paragraph sx={{transform: 'translate(100px,130px)',textAlign:'center'}}>Vous pouvez d'ajouter
         et supprimer un role de votre utilisateur en cliquant simplement sur le bouton Ajouter et Supprimer</Typography>
         
         <Box sx={{
        float: 'right',
        }}>
  <Fab color="success" aria-label="add">
                <AddIcon />
          </Fab>  
             </Box>*/}
{/*---------------------------------------Search---------------------------------------------*/}  
             <Box sx={{ display: 'flex', alignItems: 'flex-end',transform: 'translate(320px,160px)' }}>   
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField 
            variant="standard"
            label="Rechercher"
           id="input-with-sx" 
            onChange={handleSearch}
          />  
            </Box>
{/*-------------------------------Table----------------------------------------------------------- */}
            <Table
         sx={{ maxWidth: '870px' ,transform: 'translate(340px,200px)', }} size="small" >       
        <TableHead>
           <TableRow>
          <TableCell >Nom d'utilisateur</TableCell>
          <TableCell>Rôle</TableCell>
          <TableCell>Action</TableCell>   
        </TableRow>
         </TableHead>
          <TableBody>
            { users.filter((user)=>{ console.log('id:',user.id)
              return user.name.includes(search);
            })
            .map(user => ( 
                 <TableRow key={user.id}> 
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
              <Link to={`/AddModRole/${user.id}`} style={{textDecoration: 'none'}}>
                <Fab size="small" color="success" aria-label="Edit" sx={{ mr: 1 }} >
                   <EditIcon/>
                </Fab> </Link>
              <Fab size="small" color="success" aria-label="delete" sx={{ mr: 1 }} 
            onClick={handleClickOpen}
              
              >
                   <DeleteIcon />
                </Fab>

                <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">
          {"Voulez-vous vraiment supprimer cet utilisateur?"}
        </DialogTitle>
        <DialogActions>  
   <Link to='/AjouterRole' style={{textDecoration: 'none'}}> <Button color='success' onClick={()=> { handleSupprimerUser(user.id)}} >
            Oui
          </Button></Link>
          <Link to='/AjouterRole' style={{textDecoration: 'none'}}> <Button color='success' onClick={handleClose}>Non</Button></Link>
        </DialogActions>
      </Dialog>       


              </TableCell>
            </TableRow>
             )) }
          </TableBody>
        </Table>
      </div>
  );
}

export default AjouterRole;
