import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router";

export default function Login({setValue}){
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [passowrd, setPassword] = useState("");
    const [show, setShow] = useState("");

    const [userNotExist, setUserNotExist] = useState(false);
    
    const handleLogin=async ()=>{
        if(localStorage.getItem("users")==null){
            setShow("User Not Registered");
            setUserNotExist(true)
        } else{
            let userss = JSON.parse(localStorage.getItem("users"))

            if(userName!="" && passowrd!=""){
                let checkPass = false;
                let checkUser = false;

                
                for(let i=0; i<userss.length; i++){

                    if(userss[i].username == userName){
                        if(userss[i].password== passowrd){
                            setShow("Login Sucessfull")

                            // pehle local storage mein alag se put then useState wale fn mein set
                            localStorage.setItem('isLoggedIn', JSON.stringify({"fullname":userss[i].fullname, "username":userss[i].username, "password":userss[i].password}))
                            setValue(JSON.parse(localStorage.getItem("isLoggedIn")));
                            setPassword("")
                            setUserName("")
                            checkPass = true;
                            checkUser = true;
                            setUserNotExist(false);
                            
                            await new Promise((res)=>setTimeout(res, 2000))
                            navigate("/")
                        }else{
                            setShow("Incorrect Password")
                            setUserNotExist(false);
                        }

                        checkUser = true;
                        
                    }

                }
                    if(checkUser && !checkPass){
                        setShow("Password does not match with Username")
                }
                    if(!checkUser && !checkPass){
                        setShow("Username does not exist")
                        setUserNotExist(true);
                    }   
            } else{
                setShow("Username or Password cannot be Empty")
            }
            
            
        }


    }

    return(
        <div className="login-container">
            <h2 className="login-text">Login</h2>
            <input type="text" placeholder="Enter Your Username " className="login-username" value={userName} onChange={(e)=> setUserName(e.target.value)}/>
            <input type="password" placeholder="Enter Your Password" className="login-password" value={passowrd} onChange={(e)=> setPassword(e.target.value)}/>
            <button className="login-button" onClick={handleLogin}>Login</button>

            {
                show!= "Login Sucessfull" && show!=""?<div className="login-unsucessfull">{show}</div>:null
            }
            {
                show=="Login Sucessfull" && show!=""?<div className="login-successfull">{show}</div>:null
            }

            {
                userNotExist?<Link to={"/Register"} className="login-toggle-register">Register</Link>:null
            }

        </div>
    )
}