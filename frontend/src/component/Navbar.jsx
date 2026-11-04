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

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <>
        <div className="navbar-conatiner">
            <Link to={"/"}><span className="navbar-name">CollegeConnect</span></Link>

                {/* Mobile specific */}
                <div className="navbar-mobile-right">
                {!value ?
                    <>
                        <Link to="/Login">Login</Link>
                        <Link to="/Register">Register</Link>
                    </>
                    :
                    <span>Hi, {name}</span>
                }
                <button
                    className="navbar-menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

            </div>
            <div className="navbar-links">
            <Link to={"/"}>Home</Link>
            <Link to={"/Student"}>Student</Link>
            <Link to={"/Events"}>Events</Link>
            {
                 value==false? <Link to={"/Login"}>Login</Link>:null
            }
            <Link to={"/Register"}>Register</Link>
            
            {
                name!=false?<div className="navbar-greeting">Hi, {name}</div>:null 
            }

            {
                value!=false? <button onClick={()=>{localStorage.setItem("isLoggedIn", JSON.stringify(false)); setValue(JSON.parse(localStorage.getItem("isLoggedIn")))}} className="navbar-logout-log">Logout</button>:null
            }
            
            <ThemeToggle/>
            
            </div>


        </div>

                {
            menuOpen ?
            <div
                className="navbar-overlay"
                onClick={() => setMenuOpen(false)}
            ></div>
            : null
        }


        <div className={`navbar-sidebar ${menuOpen ? "sidebar-open" : ""}`}>

    <div className="sidebar-heading">
        <span>Menu</span>
        <button onClick={() => setMenuOpen(false)}>✕</button>
    </div>

    <div className="sidebar-links">

        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/Student" onClick={() => setMenuOpen(false)}>Student</Link>
        <Link to="/Events" onClick={() => setMenuOpen(false)}>Events</Link>

    </div>

            <div className="sidebar-bottom">
                <div className="sidebar-theme">
                    <span>Appearance</span>
                    <ThemeToggle />
                </div>

                {value ?
                    <button
                        className="navbar-logout-log"
                        onClick={() => {
                            localStorage.setItem("isLoggedIn", JSON.stringify(false));
                            setValue(false);
                            setMenuOpen(false);
                        }}
                    >
                        Logout
                    </button>
                    : null
                }

            </div>

        </div>
    </>
)}