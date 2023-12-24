import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Menu from './pages/Menu/Menu'
const App = () => {
  return( 
  <BrowserRouter basename='/'> 
  <Routes>
  <Route path="/" element={<Menu/>} />
  </Routes>
  
   </BrowserRouter>
  )
}

export default App;
