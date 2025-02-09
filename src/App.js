import './App.css';
import bgwork from './bgwork.jpg';
import worktile from './worktile.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EventPage from './components/EventPage';
import WorkshopsPage from './components/WorkshopsPage';

function App() {
  const [workshopEvents, setWorkshopEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://backend.iedctkmce.com/events/all-events');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Transform and filter visible events
        const transformedEvents = data
          .filter(event => event.visible_in_front) // Only show visible events
          .map(event => ({
            id: event.id,
            title: event.event_name,
            description: event.description || 'Get first hand experience and learn from quality workshops which fare across a wide area of interests.',
            image: event.image || bgwork,
            event_start: event.event_start,
            slug: event.slug,
            foodIncluded: event.food_included || false // Add food_included field
          }));

        console.log('Fetched events:', transformedEvents); // For debugging
        setWorkshopEvents(transformedEvents);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setError('Failed to load events');
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (isLoading) {
    return (
      <div className="p-2 w-full text-center text-black relative">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-2 w-full text-center text-black">
        Error: {error}
      </div>
    );
  }

  if (!workshopEvents || workshopEvents.length === 0) {
    return (
      <div className="p-2 w-full text-center text-black">
        No events available
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorkshopsPage events={workshopEvents} />} />
        {workshopEvents.map(event => (
          <Route 
            key={event.id}
            path={`/workshop${event.id}`} 
            element={<EventPage event={event} />} 
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
