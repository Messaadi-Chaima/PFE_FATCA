import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../StyledComponents/Button";
import { deleteUser } from "./userSlice";
import Button1 from "../StyledComponents/Formulaire/Button1";
import Table from '../StyledComponents/Table/Table';
import Th from '../StyledComponents/Table/Th';
import Td from '../StyledComponents/Table/Td';
const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
const handleSupprimerUser=(id) =>{
    dispatch(deleteUser({id}));
}
  return (
<div>
      <Link to="AjoutUtilisateur"><Button>Ajout</Button></Link>
      <Table>       
        <thead>
           <tr>
          <Th >Nom d'utilisateur</Th>
          <Th>Email</Th>
          <Th>Role</Th>
          <Th>Action</Th>
        </tr>
         </thead>
          <tbody>
            { users.map(user => ( 
                 <tr> 
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.role}</Td>
              <Td>
              <Button1 onClick={()=> handleSupprimerUser(user.id)}>Supprimer</Button1></Td>
            </tr>
             )) }
          </tbody>
        </Table>  
</div>
  )
}
export default UserList