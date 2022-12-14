import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './components/Home'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound.jsx'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/home'  element={<Home/>}/>
      <Route path='/plan'  element={<Home/>}/>
      <Route path='/login'  element={<Home/>}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </BrowserRouter>
    </>
  ) 
}

