import  React,{useState} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editRole } from "../Redux/userSlice"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import SaveIcon from '@mui/icons-material/Save';
import Form from '../StyledComponents/Formulaire/Form';
import Box from '@mui/material/Box';
import ModeTwoToneIcon from '@mui/icons-material/ModeTwoTone';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { green} from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Tooltip from '@mui/material/Tooltip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Admin ',
  'User ',
  'Audit ',
];

export default function AddModRole() {
    const params = useParams();
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);
    console.log(users);
    const navigate = useNavigate();
    //const {rolee } = users.filter(user => user.id === params.id);
  const [role, setRole] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setRole(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleAddMod = () =>{
      console.log("Add ou Mod");
      setRole('');
    dispatch(editRole({
      id: params.id,
      role: role
    }));
    navigate('/AjouterRole');
      console.log(role);
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
       <Box sx={{float: 'right',transform: 'translate(-30px,40px)'}}>  
 <Link to='/AjouterRole' style={{textDecoration: 'none'}}>
 <Tooltip title="Go Back">
       
        <Fab size="large"  color="success" aria-label="GoBack" >
                   <KeyboardReturnIcon />
                </Fab>
                 </Tooltip>              
 </Link>
 </Box>

      <Typography variant='h6' sx={{transform: 'translate(70px,50px)'}}>Ajouter ou Modifer un rôle d'un utilisateur</Typography>
      <Avatar sx={{height:'50px', width:'50px', bgcolor: green[500], top:'10px',left:'10px'}}>
        <ModeTwoToneIcon />
      </Avatar>

      <Form> 
      <FormControl sx={{ m: 1, width: 300 }} color="success">
        <InputLabel id="demo-multiple-checkbox-label">Role</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={role}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={role.indexOf(name) > -1} color="success"/>
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box sx={{ margin: '20px 20px 20px 110px'}}>
      <Button variant="contained" endIcon={<SaveIcon />} color='success' onClick={handleClickOpen}>Save</Button>
   </Box>  

       <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">
          {"Voulez-vous vraiment ajouter ou modifer le rôle de cet utilisateur?"}
        </DialogTitle>
        <DialogActions>  
   <Link to='/AjouterRole' style={{textDecoration: 'none'}}> <Button onClick={handleAddMod} color='success'>
            Oui
          </Button></Link>
          <Link to='/AjouterRole' style={{textDecoration: 'none'}}> <Button onClick={handleClose} color='success'>Non</Button></Link>
        </DialogActions>
      </Dialog>
      </Form>

     
    </div>
  );
}