import React,{useState} from 'react'
import styled,{createGlobalStyle , css} from 'styled-components'
//import Button from '../StyledComponents/Formulaire/Button';
import Form from '../StyledComponents/Formulaire/Form';
//import Fieldset from '../StyledComponents/Formulaire/Fieldset';
//import { Link} from 'react-router-dom';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import { addUser } from "../Redux/userSlice"
import Button2 from '../Redux/Button2';
import TextField from '../Redux/TextField'
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
`; 
const AjoutUtilisateur = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    navigate('/');
  }
/*
const Initial ={

Nom: '',
email: '',
password:'',
role:'', 
}
*/

  /*
const[state,setState]=useState(Initial);
const [error,setError]=useState('');

const handleSubmit= e => {
  e.preventDefault();
    console.log('submitted!');
   console.log(state);
    for (let key in state) {
      if (state[key] === '') {
        setError(`vous devez saisir le ${key}`)
        return
      }
    }
    setError('');
    console.log("Succeeded!!!");
  };
const handleInput = e => {
  const inputName = e.currentTarget.name;
   const value = e.currentTarget.value;
   setState(prev => ({...prev, [inputName]: value}));
};
*/
 return (
<StyledDiv>
  <GlobalStyle />
  <Form>
    <label> Nom d'utilisateur
      <StyledInput
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Jhon Doe' }}
      /></label>
      <label> Email
      <StyledInput
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'jhondoe@mail.com' }}
      /></label>
      <label>Role
      <StyledInput
        label="role"
        value={values.role}
        onChange={(e) => setValues({ ...values, role: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Lecture' }}
      /></label>
      <Button2 onClick={handleAddUser}>Submit</Button2>
      </Form>
    </StyledDiv>
  );
}

export default AjoutUtilisateur
