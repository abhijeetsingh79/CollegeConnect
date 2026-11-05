import { useEffect, useState } from "react"
import EventCard from "./Cards/EventCard";

export default function Events({state, setState}){
    const [data, setData] = useState([])

    useEffect(()=>{
        async function getData (){
            console.log("working outer");
            
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

            } catch (error) {
                console.log(error);
                
            }

        }

        getData();

    }, [])

    return(
        <div className="cc-events-grid">
            {
                data.map((item)=>(
                        <EventCard key={item.id} obj = {item}/>         
                ))
            }
        </div>
    )
}