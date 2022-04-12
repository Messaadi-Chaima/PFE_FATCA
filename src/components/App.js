import React from 'react'
import {BrowserRouter,  Routes, Route} from 'react-router-dom';
import Menu from './Menu';
import Utilisateurs from './Pages/Utilisateurs';
import Roles from './Pages/Roles';
import Tableau from './Pages/Tableau';
import AjoutUtilisateur from './Pages/AjoutUtilisateur';
function App() {
  return (
    <BrowserRouter>
       <Menu />
        <Routes>         
          <Route exact  path='/'  element={<Utilisateurs />} />
        <Route path='/roles'  element={<Roles />}/>
        <Route path='/tableau'  element={<Tableau />}/>
        <Route path='/AjoutUtilisateur' element={<AjoutUtilisateur />} />
        </Routes> 
           
    </BrowserRouter>
        

  )
}

export default App;
