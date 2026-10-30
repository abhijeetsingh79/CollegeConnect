import {BrowserRouter, Route, Routes} from 'react-router'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Student from './component/Student'
import Login from './component/Login'
import Register from './component/Register'
import Events from './component/Events'

function App() {
  

  return (
    <>
      
      

      <BrowserRouter>
      
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/student' element={<Student/>}/>
          <Route path='/Events' element={<Events/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
