import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import App from '../../App';
import FoodApiComponent from '../CommonComponents/NavItems/FoodApiComponent/FoodApiComponent';
    
 
    
function AppRoutes() {
    
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/api/:id1/:id2" element={<FoodApiComponent/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes
