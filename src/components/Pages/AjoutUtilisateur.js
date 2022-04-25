import React,{useState} from 'react'
//import styled,{createGlobalStyle , css} from 'styled-components'
import Form from '../StyledComponents/Formulaire/Form';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import { addUser } from "../Redux/userSlice"
import Box from '@mui/material/Box';
//import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
//import Stack from '@mui/material/Stack';
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
//import Button2 from '../Redux/Button2';
//import Link1 from '../StyledComponents/Menu/Link1';
/* 
const GlobalStyle = createGlobalStyle`
html {
  height: 100%.
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #FAFCC2;
  height: 100%;
  margin: 0;
  color: #555;
}
h2{
  transform: translateY(-12px);
  text-align: center;
}
`;
const sharedStyles = css`
background-color: #eee;
height: 40px;
border-radius: 5px;
border: 1px solid #ddd;
margin: 10px 0 20px 0;
padding: 20px;
box-sizing: border-box;
`;  
const StyledDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
padding: 0 20px;
`;
const StyledInput = styled.input`
display: block;
width: 100%;
${sharedStyles}
`;
const StyledError= styled.div`
color : red;
font-weight: 800;
margin: 0 0 40px 0;
`; */
const AjoutUtilisateur = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: '',
    email: '',
    role:'',
  });

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
   <Link to='/Utilisateurs' style={{textDecoration: 'none'}}> <Box sx={{ margin: '20px 20px 20px 110px'}}><Button variant="contained" endIcon={<SendIcon />} color='success' 
   onClick={()=> {if(window.confirm('Voulez-vous ajouter cet utilisateur?')){ handleAddUser();}}}>
  Envoyer
</Button></Box></Link>
 </Form>
 
   {/* 
    <StyledDiv>
  <GlobalStyle />
  <Form>
    <label> Nom d'utilisateur
      <StyledInput
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Nom Utilisateur' }}
      /></label>
      <label> Email
      <StyledInput
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: "Entrez l'email de l'utilisateur" }}
      /></label>
      <label>Role
      <StyledInput
        label="role"
        value={values.role}
        onChange={(e) => setValues({ ...values, role: e.target.value })}
        inputProps={{ type: 'text', placeholder: "Entrer le role de l'utilisateur" }}
      /></label>
     <Link1 to='/Utilisateurs'> <Button2 onClick={()=> {if(window.confirm('Voulez-vous ajouter cet utilisateur?')){ handleAddUser();}}}>Envoyer</Button2></Link1>
      </Form>
    </StyledDiv> */}
  </div>  
  );
}

export default AjoutUtilisateur
