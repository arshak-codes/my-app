import { useNavigate } from 'react-router-dom';
import bgwork from '../bgwork.jpg';

function WorkshopsPage({ events }) {
  const navigate = useNavigate();

  const workshopDates = [
    { date: '28th April', active: true },
    { date: '29th April', active: false },
    { date: '30th April', active: false },
  ];

  const workshopCards = events.map(event => ({
    id: event.id,
    title: 'WORKSHOPS',
    description: 'Get first hand experience and learn from quality workshops which fare across a wide area of interests.',
    link: `/workshop${event.id}`
  }));

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
      
      <div className="date-filters">
        {workshopDates.map((item, index) => (
          <button 
            key={index}
            className={`date-button ${item.active ? 'active' : ''}`}
          >
            {item.date}
          </button>
        ))}
      </div>

      <div className="workshop-cards">
        {workshopCards.map((card) => (
          <div key={card.id} className="workshop-card" onClick={() => navigate(card.link)}>
            <div className="card-image">
              <img src={events[card.id - 1].image} alt="Workshop" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
            </div>
            <h2>{card.title}</h2>
            <div className="divider"></div>
            <p>{card.description}</p>
            <button className="check-out-btn">CHECK IT OUT</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkshopsPage; 