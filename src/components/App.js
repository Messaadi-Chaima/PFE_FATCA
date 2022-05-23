import React from 'react'
import {BrowserRouter,  Routes, Route} from 'react-router-dom';
import Menu from './Menu';
import AjoutUtilisateur from './Pages/AjoutUtilisateur';
import AjouterRole from './Pages/AjouterRole'
import Utilisateurs from './Pages/Utilisateurs';
import AccueilAdmin from '../components/Pages/AccueilAdmin';
import Csv from './Pages/Csv';
import Login from './Pages/Login'
import Register from './Pages/Register'
import Modifier from '../components/Redux/Modifier';
import AddModRole from './Pages/AddModRole'
import TabCompte from '../components/Pages/TabCompte'
function App() {
  return (
    <BrowserRouter>
        <Routes>  
        <Route exact  path='/'  element={<AccueilAdmin />} />   
        <Route exact  path='/Csv'  element={<Csv />} />    
        <Route exact  path='/Menu'  element={<Menu />} />  
         <Route exact  path='/Utilisateurs'  element={<Utilisateurs />} />  
          <Route path='/AjouterRole' element={<AjouterRole />} />
           <Route path='/AjoutUtilisateur' element={<AjoutUtilisateur />} />  
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Modifier/:id' element={<Modifier />} />
          <Route path='/AddModRole/:id' element={<AddModRole />} />
          <Route path='/TabCompte' element={<TabCompte />} />
        </Routes>           
    </BrowserRouter>
        

  )
}

export default App;
