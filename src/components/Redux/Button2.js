import React from 'react'
import Button1 from "../StyledComponents/Formulaire/Button1"
const Button2 = ({ onClick, children }) => {
  return (
    <Button1 
      onClick={onClick}
    >
      {children}
    </Button1>
  )
}

export default Button2