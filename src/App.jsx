import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageComponent from './Components/HomePageComponent';

import AppRoutes from './Components/Routes/AppRoutes';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {

  return (
  <HomePageComponent/>
  )
}

export default App
