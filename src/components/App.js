import React from 'react'
import {BrowserRouter,  Routes, Route} from 'react-router-dom';
import Menu from './Menu';
import AjoutUtilisateur from './Pages/AjoutUtilisateur';
import AjouterDroitAcces from './Pages/AjouterDroitAcces'
import AjouterRole from './Pages/AjouterRole'
import Utilisateurs from './Pages/Utilisateurs';
import AccueilAdmin from '../components/Pages/AccueilAdmin';
import Csv from './Pages/Csv';
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
          <Route path='/AjouterDroitAcces' element={<AjouterDroitAcces />} />
        </Routes>           
    </BrowserRouter>
        

  )
}

export default App;
