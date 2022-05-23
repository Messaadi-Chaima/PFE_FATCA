import React,{ useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "./userSlice";
import {TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Form from '../StyledComponents/Formulaire/Form';
import Button from '@mui/material/Button';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab'; 
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { green} from '@mui/material/colors';
import BorderColorIcon from '@mui/icons-material/BorderColor';
const Modifier = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);
    console.log(users);
    const navigate = useNavigate();
    //const existingUser = users.filter(user => user.id === params.id);
    const { name, email,role } = users.filter(user => user.id === params.id);
  const [values, setValues] = useState({
    name,
    email,
    role
  });
  const handleEditUser = () => {
    setValues({ name: '', email: '',role:'' });
    dispatch(editUser({
      id: params.id,
      name: values.name,
      email: values.email,
      role: values.role
    }));
    navigate('/Utilisateurs');
  }
  return (
    <div >
 <Box sx={{float: 'right',transform: 'translate(-30px,40px)'}}>  
 <Link to='/Utilisateurs' style={{textDecoration: 'none'}}>
 <Tooltip title="Go Back">
       
        <Fab size="large"  color="success" aria-label="GoBack" >
                   <KeyboardReturnIcon />
                </Fab>
                 </Tooltip>              
 </Link>
 </Box>
   <Typography variant='h6' sx={{transform: 'translate(70px,50px)'}}>Modifier utilisateur</Typography>
      <Avatar sx={{height:'50px', width:'50px', bgcolor: green[500], top:'10px',left:'10px'}}>
        <BorderColorIcon />
      </Avatar>
{/*------------------------------------------------------------------------------------------ */}
      <Form>
      <TextField
      fullWidth
      variant='outlined'
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}    
        sx={{display: 'block',margin: '10px 0 20px 0',marginLeft: '2px',
      }}  
      />

      <TextField
      fullWidth
      variant='outlined'
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        sx={{display: 'block',margin: '10px 0 20px 0',marginLeft: '2px',
      }}
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
      </FormControl></Box>
      
      <Button sx={{ margin: '20px 20px 20px 110px'}} variant="contained" endIcon={<ModeEditOutlineIcon />} color='success' 
       onClick={handleEditUser}>Edit</Button>
      </Form>
    </div>
  )
}

export default Modifier