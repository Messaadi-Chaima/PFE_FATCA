import React from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "./userSlice";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

const Modifier = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);
    const navigate = useNavigate();
    const existingUser = users.filter(user => user.id === params.id);
    const { name, email,role } = existingUser[0];
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
      <TextField
        label="Name"
 value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Jhon Doe' }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'jhondoe@mail.com' }}
      />
      <br />
      <TextField
        label="Role"
        value={values.role}
        onChange={(e) => setValues({ ...values, role: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'role' }}
      />
      
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  )
}

export default Modifier