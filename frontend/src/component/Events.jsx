import { useEffect, useState } from "react"
import EventCard from "./Cards/EventCard";

export default function Events({state, setState}){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        async function getData (){
            setLoading(true)
            
            try {
                const response = await fetch("https://cnbfzzhqkccjtkhefjhu.supabase.co/rest/v1/events?select=data",
                {
                    method: "GET",
                    headers: {
                        apikey: "sb_publishable_fbEuof7GlBXiWSxmqsqxrA_gQxVbzrf"
                    }
                }
            );

            const result = await response.json();
            setData(result[1].data);
            // setLoading(false)

            } catch (error) {
                console.log(error);
                
            }

        }

        getData();

    }, [])

    return(
        <>
        <div className="cc-events-grid">
            {
                data.map((item)=>(
                        <EventCard key={item.id} obj = {item}/>         
                ))
            }
        </div>

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

        </>
    )
}