import { useNavigate } from "react-router";

export default function Home({value}){
    const navigate = useNavigate();

    // naviagate to login after 6 secs
    // const handleNaviagte=async()=>{
    //     await new Promise((res)=>setTimeout(res, 6000));
    //     navigate("/login")
    // }
    
    // if(value==false){
    //     handleNaviagte(); 
    // }

    return(
        <div className="home-container">

            <div className={value == false ? "home-content-blur" : "home-content"} >
                <h2>Home Content</h2>

                {/* Home content */}
            </div>

            {
                value == false ?
                <div className="home-login-first">
                    <h2>Login First</h2>
                    <p>Please login to access CollegeConnect.</p>
                    <button onClick={() => navigate("/Login")}>Login</button>
                </div> : null
            }

            
        </div>
    )
}