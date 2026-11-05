function EventCard({obj}) {
    return(
        <div className="cc-event-card">

            <div className="cc-event-image">
                <img src={obj.image} alt={obj.title} />
            </div>

            <div className="cc-event-content">

                <h2 className="cc-event-title">
                    {obj.title}
                </h2>

                <div className="cc-event-details">

                    <div className="cc-event-detail">
                        <span>📅</span>
                        <p>{obj.date}</p>
                    </div>

                    <div className="cc-event-detail">
                        <span>⏰</span>
                        <p>{obj.time}</p>
                    </div>

                    <div className="cc-event-detail">
                        <span>📍</span>
                        <p>{obj.location}</p>
                    </div>

                </div>

                <div className="cc-event-organizer">
                    Organized by: {obj.organizer}
                </div>

            </div>
        </div>
    )
}


export default EventCard;