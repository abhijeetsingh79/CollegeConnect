import { Link } from "react-router";
import ThemeToggle from "./ThemeToogle";
import { useContext, useEffect, useState } from "react";



export default function Navbar({value, setValue}){
    
    let name = false;
    
    if(!value){
        name = false;
    } else{
        name = value.fullname;
    }

    return(
        <div className="navbar-conatiner">
            <Link to={"/"}><span className="navbar-name">CollegeConnect</span></Link>
            <div className="navbar-links">
            <Link to={"/"}>Home</Link>
            <Link to={"/Student"}>Student</Link>
            <Link to={"/Events"}>Events</Link>
            {
                 value==false? <Link to={"/Login"}>Login</Link>:null
            }
            <Link to={"/Register"}>Register</Link>
            
            {
                name!=false? <div>Hi, {name}</div>:null 
            }

            {
                value!=false? <button onClick={()=>{localStorage.setItem("isLoggedIn", JSON.stringify(false)); setValue(JSON.parse(localStorage.getItem("isLoggedIn")))}} className="navbar-logout-log">Logout</button>:null
            }
            
            <ThemeToggle/>
            </div>
        </div>
    )
}