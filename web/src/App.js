import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Routing from './Routing';
function App() {
  return (
  <>
  <BrowserRouter> 
    <Header/>
    <Routing/>
    <Footer/>
   </BrowserRouter>
  </>
  )
}

export default App
