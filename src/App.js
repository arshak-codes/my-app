import './App.css';
import bgwork from './bgwork.jpg';
import worktile from './worktile.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventPage from './components/EventPage';
import WorkshopsPage from './components/WorkshopsPage';

const workshopEvents = [
  {
    id: 1,
    title: "Web Development Workshop",
    description: "Get ready for an exciting session that unveils the world of web development. Learn what it takes to participate, prepare effectively, and master the skills required, as our seasoned experts share their experiences and insights.",
    image: worktile,
    prize: "1000",
    startDate: "30-10-2024",
    endDate: "30-10-2024",
    venue: "APJ Hall",
    registrationStart: "17-10-2024",
    registrationEnd: "29-10-2024",
    fees: "0"
  },
  {
    id: 2,
    title: "Hack the Hackathon",
    description: "Get ready for HACK THE HACKATHON an exciting session by IEDC TKMCE that unveils the world of hackathons - where innovation meets coding. Learn what it takes to participate, prepare effectively, and master the skills required.",
    image: worktile,
    prize: "2000",
    startDate: "31-10-2024",
    endDate: "31-10-2024",
    venue: "Chemical Seminar Hall",
    registrationStart: "17-10-2024",
    registrationEnd: "29-10-2024",
    fees: "0"
  },
  {
    id: 3,
    title: "AI/ML Workshop",
    description: "Dive into the world of Artificial Intelligence and Machine Learning. Learn from industry experts about the latest technologies, practical applications, and hands-on experience with real-world projects.",
    image: worktile,
    prize: "1500",
    startDate: "01-11-2024",
    endDate: "01-11-2024",
    venue: "Main Seminar Hall",
    registrationStart: "17-10-2024",
    registrationEnd: "29-10-2024",
    fees: "0"
  },
  {
    id: 4,
    title: "Cybersecurity Workshop",
    description: "Explore the critical world of cybersecurity. Learn about threat detection, ethical hacking, and security best practices from experienced professionals in the field.",
    image: worktile,
    prize: "1800",
    startDate: "02-11-2024",
    endDate: "02-11-2024",
    venue: "CS Seminar Hall",
    registrationStart: "17-10-2024",
    registrationEnd: "29-10-2024",
    fees: "0"
  },
  {
    id: 5,
    title: "IoT Innovation Workshop",
    description: "Discover the Internet of Things (IoT) and its applications. Get hands-on experience with sensors, microcontrollers, and real-time data processing in this interactive workshop.",
    image: worktile,
    prize: "1200",
    startDate: "03-11-2024",
    endDate: "03-11-2024",
    venue: "EC Lab",
    registrationStart: "17-10-2024",
    registrationEnd: "29-10-2024",
    fees: "0"
  },
  {
    id: 6,
    title: "Game Development Workshop",
    description: "Learn the fundamentals of game development. From concept to creation, understand game mechanics, design principles, and basic programming concepts used in modern game development.",
    image: worktile,
    prize: "1600",
    startDate: "04-11-2024",
    endDate: "04-11-2024",
    venue: "Digital Lab",
    registrationStart: "17-10-2024",
    registrationEnd: "29-10-2024",
    fees: "0"
  }
];

function App() {
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
