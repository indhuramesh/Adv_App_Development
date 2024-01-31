import '../assets/Form.css';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserNavbar from "../Components/UserNavbar"

    const EventBookingForm = () => {
        const [selectedTicket, setSelectedTicket] = useState('general');
        const [bookingStatus, setBookingStatus] = useState(null);
        const [country, setCountry] = useState('');
        const [eventName, setEventName] = useState('');
        const [errorMessage, setErrorMessage] = useState('');
        const navigate = useNavigate();
        const handleTicketChange = (event) => {
          setSelectedTicket(event.target.value);
        };
        const handleCountryChange = (event) => {
            setCountry(event.target.value);
          };
          const handleEventNameChange = (event) => {
            setEventName(event.target.value);
          };
        
        const handleFormSubmit = (event) => {
            event.preventDefault();
            if (country.toLowerCase() !== 'india') {
                setErrorMessage('Currently not accepting bookings from countries other than India.');
                return; 
            }
            
            setBookingStatus('success');
          };
        
          useEffect(() => {
            if (bookingStatus === 'success') {
              setTimeout(() => {
                navigate('/Booking');
              }, 3000);
            }
          }, [bookingStatus, navigate]);
        
  return (
    <>
    <UserNavbar/>
    <form className="event-booking-form" onSubmit={handleFormSubmit}>
      <h2>Event Booking</h2>
      

      <label htmlFor="fullName">Full Name:</label>
      <input type="text" id="fullName" name="fullName" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" required />
      <label htmlFor="country">Country:</label>
      <input
        type="text"
        id="country"
        name="country"
        value={country}
        onChange={handleCountryChange}
        required
      />

      
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <label htmlFor="eventName">Event Name:</label>
      <select
        id="eventName"
        name="eventName"
        value={eventName}
        onChange={handleEventNameChange}
        required
      >
        <option value="" disabled>Select an Event</option>
        <option value="birthday">Birthday Party</option>
        <option value="wedding">Wedding Celebration</option>
        <option value="graduation">Graduation Event</option>
        <option value="anniversary">Anniversary Parties</option>
        <option value="retirement">Retirement</option>
        <option value="baby shower">Baby shower</option>
        <option value="music event">Music Event</option>
        <option value="corporate events">Corporate Events</option>
        <option value="house warming">House Warming</option>

      </select>
      <label htmlFor="eventName">Event Location:</label>
      <input type="text" id="eventName" name="eventName" required />

      <label htmlFor="date">Event Date:</label>
      <input type="date" id="date" name="date" required />
      <label htmlFor="time">Event Time:</label>
      <input type="time" id="time" name="time" required />
      <label htmlFor="text">Theme Colour:</label>
      <input type="text" id="theme" name="theme" required />
      <label htmlFor="guests">Number of Guests:</label>
      <input type="number" id="guests" name="guests" required />
      <label htmlFor="ticketType">Type of Ticket/Package:</label>
      <select
        id="ticketType"
        name="ticketType"
        value={selectedTicket}
        onChange={handleTicketChange}
        required
      >
        <option value="general">General Admission</option>
        <option value="vip">VIP Package</option>
        <option value="student">Student Discount</option>
        <option value="group">Group Discount</option>
        
      </select>

      <label htmlFor="message">Special requests/Preferences</label>
      <textarea id="message" name="message" rows="4"></textarea>

      <button type="submit">Book Now</button>
      
    </form>
    </>
  );
};

export default EventBookingForm;
