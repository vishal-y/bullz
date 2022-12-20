import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './components/Home'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound.jsx'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import About from "./components/About"
import Footer from "./components/Footer"

defineElement(lottie.loadAnimation);

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/home'  element={<Home/>}/>
      <Route path='/dashboard'  element={<Dashboard/>}/>
      <Route path='/login'  element={<Home/>}/>
      <Route path='/about'  element={<About/>}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  ) 
}

