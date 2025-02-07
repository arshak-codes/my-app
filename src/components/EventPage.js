import React from 'react';
import './EventPage.css';

function EventPage({ event }) {
  return (
    <div className="event-page">
      <div className="event-container">
        <div className="event-image">
          <img src={event.image} alt={event.title} />
        </div>
        
        <h1 className="event-title">{event.title}</h1>
        
        <div className="event-description">
          {event.description}
        </div>

        <div className="event-details">
          <div className="detail-section">
            <h3>Prize</h3>
            <p>₹{event.prize}</p>
          </div>

          <div className="event-timing">
            <div className="detail-item">
              <h3>Start date:</h3>
              <p>{event.startDate}</p>
            </div>
            <div className="detail-item">
              <h3>End date:</h3>
              <p>{event.endDate}</p>
            </div>
            <div className="detail-item">
              <h3>Venue:</h3>
              <p>{event.venue}</p>
            </div>
          </div>
        </div>

        <div className="registration-section">
          <h2>REGISTRATION DETAILS</h2>
          <div className="registration-details">
            <div className="detail-item">
              <h3>Start date:</h3>
              <p>{event.registrationStart}</p>
            </div>
            <div className="detail-item">
              <h3>End date:</h3>
              <p>{event.registrationEnd}</p>
            </div>
            <div className="detail-item">
              <h3>Fees:</h3>
              <p>₹{event.fees}</p>
            </div>
          </div>
          
          <div className="action-buttons">
            <button className="register-btn">Register</button>
            <button className="guidelines-btn">
              <span>📥</span> Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPage; 