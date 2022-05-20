import React,{useState} from 'react'
import Form from '../StyledComponents/Formulaire/Form';
import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from 'uuid';
import { addUser } from "../Redux/userSlice"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { green} from '@mui/material/colors';
import {TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';  
const AjoutUtilisateur = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: '',
    email: '',
    role:'',
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddUser = () => {
    setValues({ name: '', email: '' ,role:''});
    dispatch(addUser({
      id: uuidv4(),
      name: values.name,
      email: values.email,
      role:values.role,
    }));
  }
 return (
 <div>
   <Box sx={{float: 'right',transform: 'translate(-30px,40px)'}}>  
 <Link to='/Utilisateurs' style={{textDecoration: 'none'}}>
 <Tooltip title="Go Back">
       
        <Fab size="large"  color="success" aria-label="GoBack" >
                   <KeyboardReturnIcon />
                </Fab>
                 </Tooltip>              
 </Link>
 </Box>
   <Typography variant='h6' sx={{transform: 'translate(70px,50px)'}}>Nouveau utilisateur</Typography>
      <Avatar sx={{height:'50px', width:'50px', bgcolor: green[500], top:'10px',left:'10px'}}>
        <GroupAddIcon />
      </Avatar>
 <Form> 
       <TextField 
       fullWidth
       variant='outlined'
       label="Nom d'utilisateur"
      value={values.name}
      onChange={(e) => setValues({ ...values, name: e.target.value })} 
      sx={{display: 'block',margin: '10px 0 20px 0',marginLeft: '2px',
      }}/>
    
       <TextField 
       fullWidth
       variant='outlined'
       label="Email"
      value={values.email}
      onChange={(e) => setValues({ ...values, email: e.target.value })}
      sx={{display: 'block', margin: '10px 0 20px 0',marginLeft: '2px'}}
 />
  <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel >Role</InputLabel>
        <Select
          value={values.role}
          label="Role"
          onChange={(e) => setValues({ ...values, role: e.target.value })}>
          <MenuItem value={'Admin'}>Admin</MenuItem>
          <MenuItem value={'User'}>User</MenuItem>
          <MenuItem value={'Audit'}>Audit</MenuItem>
        </Select>
      </FormControl>
    </Box> 
   <Box sx={{ margin: '20px 20px 20px 110px'}}><Button variant="contained" endIcon={<SendIcon />} color='success' 
   onClick={handleClickOpen}>
  Envoyer
</Button></Box>
 </Form>
 <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">
          {"Voulez-vous vraiment ajouter cet utilisateur?"}
        </DialogTitle>
        <DialogActions>  
   <Link to='/Utilisateurs' style={{textDecoration: 'none'}}> <Button onClick={handleAddUser}>
            Oui
          </Button></Link>
          <Link to='/Utilisateurs' style={{textDecoration: 'none'}}> <Button onClick={handleClose}>Non</Button></Link>
        </DialogActions>
      </Dialog>
  </div>  
  );
}

export default AjoutUtilisateur
