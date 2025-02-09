import { useNavigate } from 'react-router-dom';
import bgwork from '../bgwork.jpg';

function WorkshopsPage({ events }) {
  const navigate = useNavigate();

  if (!events || events.length === 0) {
    return <div>No workshops available</div>;
  }

  return (
    <div className="workshops-page">
      <nav className="top-nav">
        <div className="nav-links">
          <a href="/events" className="nav-link">EVENTS</a>
          <a href="/tickets" className="nav-link">TICKETS</a>
          <a href="/merchandise" className="nav-link">MERCHANDISE</a>
        </div>
      </nav>

      <div className="hero-section">
        <h1 className="page-title">WORKSHOPS</h1>
      </div>

      <div className="workshop-cards">
        {events.map((event) => (
          <div key={event.id} className="workshop-card" onClick={() => navigate(`/workshop${event.id}`)}>
            <div className="card-image">
              <img 
                src={event.image || bgwork} 
                alt="Workshop" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} 
              />
            </div>
            <h2>{event.title || 'Workshop'}</h2>
            <div className="divider"></div>
            <p>{event.description || 'Get first hand experience and learn from quality workshops which fare across a wide area of interests.'}</p>
            <button className="check-out-btn">CHECK IT OUT</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkshopsPage; 