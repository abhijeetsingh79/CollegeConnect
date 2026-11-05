const StudentCard = ({obj})=>{


    return(
        <div className="event-card">
                <div className="event-card-header">

                    <div className="event-badges">
                        <span className="event-type">{obj.type}</span>
                        <span className="event-mode">{obj.mode}</span>
                    </div>

                    {obj.featured && (
                        <span className="featured-badge">Featured</span>
                    )}

                </div>


                <div className="event-main">
                    <span className="event-title">{obj.title}</span>

                    <span className="event-description">
                        {obj.description}
                    </span>

                    <span className="event-organizer">
                        Organized by <strong>{obj.organizer}</strong>
                    </span>
                </div>


                <div className="event-details">

                    <div className="detail-item">
                        <span className="detail-label">Date</span>
                        <p className="detail-value">{obj.date}</p>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Time</span>
                        <p className="detail-value">{obj.time}</p>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Location</span>
                        <p className="detail-value">{obj.location}</p>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Duration</span>
                        <p className="detail-value">{obj.duration}</p>
                    </div>

                </div>



                <div className="event-card-footer">

                    <div className="event-seats">
                        <span className="detail-label">Available Seats</span>
                        <p>{obj.totalSeats}</p>
                    </div>

                    <div className="event-deadline">
                        <span className="detail-label">Registration Deadline</span>
                        <p>{obj.registrationDeadline}</p>
                    </div>

                    <button className="event-register-btn">
                        Register Now
                    </button>

                </div>


        </div>
    )
}

export default StudentCard;