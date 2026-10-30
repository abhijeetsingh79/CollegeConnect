import {BrowserRouter, Route, Routes} from 'react-router'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Student from './component/Student'
import Login from './component/Login'
import Register from './component/Register'
import Events from './component/Events'

import { useState } from 'react'

function App() {
  
  const [Logged, setLogged] = useState(JSON.parse(localStorage.getItem("isLoggedIn"))|| false);
  // use usestate outside to rerender all if value is changed every compont rerender

  return (
    <>

      <BrowserRouter>
        
          <Navbar value ={Logged} setValue={setLogged} />


        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/student' element={<Student/>}/>
          <Route path='/Events' element={<Events/>}/>
          <Route path='/Login' element={<Login setValue={setLogged}/>}/>
          <Route path='/Register' element={<Register/>}/>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
