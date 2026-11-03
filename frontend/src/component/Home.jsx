import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Home({value, state, setState}){
    const navigate = useNavigate();

    // naviagate to login after 6 secs
    // const handleNaviagte=async()=>{
    //     await new Promise((res)=>setTimeout(res, 6000));
    //     navigate("/login")
    // }
    
    // if(value==false){
    //     handleNaviagte(); 
    // }

    const [data, setData] = useState([]);

    useEffect(()=>{
        const getData = async ()=>{
            const response = await fetch("https://cnbfzzhqkccjtkhefjhu.supabase.co/rest/v1/events?select=data",
                {
                    method: "GET",
                    headers: {
                        apikey: "sb_publishable_fbEuof7GlBXiWSxmqsqxrA_gQxVbzrf"
                    }
                }
            );

            const result = await response.json();
            // console.log(result);
            setData(result[0].data)
            
        }
        getData();

    }, [state])
    console.log(data);
    

    return(
        <div className="home-container">

            <div className={value == false ? "home-content-blur" : "home-content"} >
                <h2>Home Content</h2>

                
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