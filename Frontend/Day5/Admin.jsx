import "../assets/Admin.css"; // Make sure to adjust the path based on your project structure
import ViewEvents from "../Components/ViewEvents"
import "../assets/Delete.css"
import "../assets/Form.css"
const Admin = () => {
 

  return (
    <div>
        
      <div className="admin-body">
        <ViewEvents/>
        {/* <div className="gap"></div>
        <div id="BookedEvents">
          <Booking/>
        </div>
        <div className="gap"></div>
        <div id="AddEvent">
      //   <form className="event-booking-form">
      // <h2>Adding Events</h2>
      

      // <label htmlFor="eventName">Event Name:</label>
      // <input type="text" id="eventName" name="eventName" required />

      // <label htmlFor="message">Description</label>
      // <textarea id="message" name="message" rows="4"></textarea>
      // <label htmlFor="rating">Rating</label>
      // <input type="text" id="rating" name="rating" required />
      // <label htmlFor="imageUrl">Image URL</label>
      // <input type="text" id="imageUrl" name="imageUrl" required />

      // <button type="submit">Add Event</button>
      
    
      //   </form>
      //   </div>
      //   <div className="gap"></div>
      //       <div id="UpdateEvents">
      //   <form className="event-booking-form">
      <h2>Updating Events</h2>
      

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
        <div className="gap"></div>
        <div id="DeleteEvent">
        <h1 className="delHead">Delete Event</h1>
        <form className="addform" >
            
            <label>Enter Event Name</label>
            <input type="text" id="search" placeholder="Enter name" />
             <br></br>
            
            <button type="submit">DELETE</button>
        </form>
        </div>
      </div>
     */}
    </div>
    </div>
  );
};

export default Admin;
