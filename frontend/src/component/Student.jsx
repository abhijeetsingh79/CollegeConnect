import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Student({value}){
    const navigate = useNavigate();

    // naviagate to login after 6 secs
    // const handleNaviagte=async()=>{
    //     await new Promise((res)=>setTimeout(res, 6000));
    //     navigate("/login")
    // }
    
    // useEffect(()=>{
    //     if(value==false){
    //         handleNaviagte();
    //     }
        
    // },[value])

    return(
        <div className="student-container">
            <div className={value==false? "student-content-blue": "show-studnet-content"}>
                <h2>Student</h2>
            </div>

            {
                value==false? 
                <div className="student-not-logged-in">
                    <h2>Login First</h2>
                    <p>Please login to access CollegeConnect.</p>
                    <button onClick={() => navigate("/Login")}>Login</button>
                </div>
                :null
            }

        </div>
    )
}