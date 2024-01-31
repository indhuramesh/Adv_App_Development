import { useState } from 'react';
import "../assets/Services.css";
import birthday from "../Images/birthday.jpg";
import wedding from "../Images/wedding.jpg";
import music from "../Images/music.jpg";
import retirement from "../Images/retirement.jpg";
import baby from "../Images/baby.jpg";
import anniversary from "../Images/anniversary.jpg";
import graduation from "../Images/graduation.jpg";
import corporate from "../Images/corporate.jpg";
import house from "../Images/house.jpg";
import AdminNavbar from './AdminNavbar';

const eventsData = [
  // ... (your event data)
  {
    type: 'Birthday Party',
    description: 'Celebrate the joy of another year!',
    rating: 4.5,
    imageUrl:birthday,
  },
  {
    type: 'Wedding Celebration',
    description: 'A union of love and happiness.',
    rating: 5.0,
    imageUrl: wedding,
  },
  {
    type: 'Anniversary Parties',
    description: 'Cheers to a love that stands the test of time, to cherished memories, and to many more years of joy and laughter. Happy Anniversary.',
    rating: 5.0,
    imageUrl: anniversary,
  },
  {
    type: 'Graduation',
    description: 'Graduation is not the end; its the beginning of new dreams and endless possibilitie',
    rating: 5.0,
    imageUrl: graduation,
  },
  {
    type: 'Retirement',
    description: 'Retirement is not the end of the road; its the beginning of a new adventure',
    rating: 5.0,
    imageUrl: retirement,
  }, {
    type: 'Music Event',
    description: 'Music: where words fail, the melody speaks.',
    rating: 5.0,
    imageUrl: music,
  },
  {
    type: 'Baby Shower',
    description: 'Tiny hands and tiny feet, a bundle of joy thats oh-so sweet!',
    rating: 5.0,
    imageUrl: baby,
  },
  {
    type: 'Corporate Events',
    description: 'Elevate your corporate events with innovation, collaboration, and a touch of excellence.',
    rating: 5.0,
    imageUrl: corporate,
  },
  {
    type: 'House Warming',
    description: 'May your new home be filled with laughter, love, and unforgettable moments. Congratulations on your housewarming',
    rating: 5.0,
    imageUrl: house,
  },
];

const EventList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = eventsData.filter((event) =>
    event.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <AdminNavbar/>
      <div className="servicehead">
        <h1>FIESTA FLEET</h1>
        <p className="servicepara">PRESENTS</p>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="event-list">
        {filteredEvents.map((event, index) => (
          <div key={index} className="event-item">
            <img src={event.imageUrl} alt={event.type} className="event-image" />
            <div className="display">
              <h2>{event.type}</h2><br></br>
              <p>{event.description}</p><br></br>
              <div className="rating">Rating: {event.rating}</div>
            </div>
          </div>
        ))}
      </div><br></br>
    </>
  );
};

export default EventList;

