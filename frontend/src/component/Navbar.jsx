import { Link } from "react-router";
import ThemeToggle from "./ThemeToogle";
import { useState } from "react";

export default function Navbar(){
    if(localStorage.getItem('isRegistered')==null){
        localStorage.setItem('isRegistered', false);
    }
    if(localStorage.getItem('isLoggedIn')==null){
        localStorage.setItem('isLoggedIn', false);
    }
    
    const [Login, setLogin] = useState(localStorage.getItem('isLoggedIn'));
    const [Registered, setRegistered] = useState(localStorage.getItem('isRegistered'));
    const [name, setName] = useState("false");


    return(
        <div className="navbar-conatiner">
            <Link to={"/"}><span className="navbar-name">CollegeConnect</span></Link>
            <div className="navbar-links">
            <Link to={"/"}>Home</Link>
            <Link to={"/Student"}>Student</Link>
            <Link to={"/Events"}>Events</Link>
            {
                Login=="false"? <Link to={"/Login"}>Login</Link>:null
            }
            
            {
                name=="true"? <div>Hi, {name}</div>:null 
            }

            {
                Registered=="false"? <Link to={"/Register"}>Register</Link>: null
            }
            
            <ThemeToggle/>
            </div>
        </div>
    )
}