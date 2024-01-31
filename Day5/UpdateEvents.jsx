import "../assets/Form.css"
import AdminNavbar from "./AdminNavbar"
const AddEvents = () => {
  return (
    <div>
        <AdminNavbar/>
         <form className="event-booking-form">
      <h2>Update Events</h2>
      <label htmlFor="eventName">Event Id:</label>
      <input type="text" id="eventId" name="eventId" required />

      <label htmlFor="eventName">Event Name:</label>
      <input type="text" id="eventName" name="eventName" required />

      <label htmlFor="message">Description</label>
      <textarea id="message" name="message" rows="4"></textarea>
      <label htmlFor="rating">Rating</label>
      <input type="text" id="rating" name="rating" required />
      <label htmlFor="imageUrl">Image URL</label>
      <input type="text" id="imageUrl" name="imageUrl" required />

      <button type="submit">Update Event</button>
      
    
        </form>
    </div>
  )
}

export default AddEvents