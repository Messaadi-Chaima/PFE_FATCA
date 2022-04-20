import React from 'react'
import {BrowserRouter,  Routes, Route} from 'react-router-dom';
import Menu from './Menu';
import AjoutUtilisateur from './Pages/AjoutUtilisateur';
import SpprimerUtilisateur from './Pages/SupprimerUtilisateur';
import AjouterDroitAcces from './Pages/AjouterDroitAcces'
import SupprimerDroitAcces from './Pages/SupprimerDroitAcces'
import AjouterRole from './Pages/AjouterRole'
import SupprimerRole from './Pages/SupprimerRole';
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
        <Route exact  path='/SpprimerUtilisateur'  element={<SpprimerUtilisateur />} />
        <Route exact  path='/Utilisateurs'  element={<Utilisateurs />} />
        <Route path='/AjoutUtilisateur' element={<AjoutUtilisateur />} />
        <Route exact  path='/SupprimerDroitAcces'  element={<SupprimerDroitAcces />} />
        <Route path='/AjouterDroitAcces' element={<AjouterDroitAcces />} />
        <Route exact  path='/SupprimerRole'  element={<SupprimerRole />} />
        <Route path='/AjouterRole' element={<AjouterRole />} />
        </Routes> 
           
    </BrowserRouter>
        

  )
}

export default App;
