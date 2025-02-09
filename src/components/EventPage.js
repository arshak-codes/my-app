import React, { useState } from 'react';
import './EventPage.css';

function EventPage({ event }) {
  const [foodIncluded, setFoodIncluded] = useState(event.foodIncluded);

  const handleSubmit = async () => {
    try {
      const response = await fetch(`https://backend.iedctkmce.com/events/${event.id}/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ food_included: foodIncluded }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Update successful:', result);
      alert('Food inclusion status updated successfully!');
    } catch (error) {
      console.error('Error updating food inclusion:', error);
      alert('Failed to update food inclusion status.');
    }
  };

  return (
    <div className="event-page">
      <div className="event-container">
        <div className="event-image">
          <img src={event.image} alt={event.title} />
        </div>
        
        <h1 className="event-title">{event.title}</h1>
        
        <div className="event-description">
          {event.description || 'No description available'}
        </div>

        <div className="event-details">
          <div className="detail-section">
            <h3>Food Included:</h3>
            <label>
              <input 
                type="checkbox" 
                checked={foodIncluded} 
                onChange={() => setFoodIncluded(!foodIncluded)} 
              />
              Yes
            </label>
          </div>

          <div className="event-timing">
            <div className="detail-item">
              <h3>Start date:</h3>
              <p>{new Date(event.event_start).toLocaleDateString()}</p>
            </div>
            <div className="detail-item">
              <h3>End date:</h3>
              <p>{event.event_end ? new Date(event.event_end).toLocaleDateString() : 'TBA'}</p>
            </div>
            <div className="detail-item">
              <h3>Venue:</h3>
              <p>{event.event_venue}</p>
            </div>
          </div>

          {event.isTeam && (
            <div className="team-details">
              <h3>Team Size:</h3>
              <p>{event.minMembers} - {event.maxMembers} members</p>
              <h3>Maximum Teams:</h3>
              <p>{event.maxTeams}</p>
            </div>
          )}
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
            {event.isRegOpen ? (
              <button className="register-btn">Register</button>
            ) : (
              <button className="register-btn" disabled>Registration Closed</button>
            )}
            <button className="update-btn" onClick={handleSubmit}>Update Food Inclusion</button>
            {event.guidelineFile && (
              <button className="guidelines-btn">
                <span>📥</span> Guidelines
              </button>
            )}
          </div>

          {event.whatsappGroup && (
            <a href={event.whatsappGroup} className="whatsapp-link" target="_blank" rel="noopener noreferrer">
              Join WhatsApp Group
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventPage; 