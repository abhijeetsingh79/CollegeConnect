import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import StudentCard from "./Cards/StudentCard";

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
    const obj = JSON.parse(localStorage.getItem("isLoggedIn")) ||{}
    const customerInterests = obj.interest || [];

    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        try{
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
            setLoading(false)
            }
            
            getData();
            
        } catch(error){
            console.log(error);
        }
        

    }, []);
    
    // console.log(data);


    // to prvenet page to be fixed if not logged in
    useEffect(() => {
    document.body.style.overflow = value ? "auto" : "hidden";

    return () => {
        document.body.style.overflow = "auto";
    };
}, [value]);

    return(
        <div className="home-container">

            <div className={value == false ? "home-content-blur" : "home-content"} >

                <div className="student-cards-display">
                
                {
                    data.map((item)=>{
                        let toUse = false
                        if(customerInterests.length>2){
                            for(let i=0; i<customerInterests.length; i++){
                                if(item.interests.includes(customerInterests[i])){
                                    toUse = true;
                                }
                            }

                            if(toUse){
                                return <StudentCard key={item.id} obj = {item}/>
                            }

                        } else{
                            return <StudentCard key={item.id} obj = {item}/>
                        }
                    })
                }
                </div>

                
            </div>

            {
                value == false ?
                <div className="home-login-first">
                    <h2>Login First</h2>
                    <p>Please login to access CollegeConnect.</p>
                    <button onClick={() => navigate("/Login")}>Login</button>
                </div> : null
            }

            {
            loading?
            <div className="cc-events-loading-wrapper">
            <div className="cc-events-loading-card">

                <img
                    src="https://i.giphy.com/emySgWo0iBKwqni1wR.webp"
                    alt="Loading events"
                    className="cc-events-loading-gif"
                />

                <h2>Discovering Events</h2>

                <p>
                    Finding exciting things happening on your campus...
                </p>

                <div className="cc-events-loading-bar">
                    <span></span>
                </div>

            </div>
            </div>
            :null
        }

            
        </div>
    )
}