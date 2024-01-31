import "../assets/Delete.css"
import AdminNavbar from "./AdminNavbar"

const Delete = () => {
  return (
    <div>
        <AdminNavbar/>
        <h1 className="delHead">Delete Event</h1>
        <form className="addform" >
            
            <label>Enter Event Name</label>
            <input type="text" id="search" placeholder="Enter name" />
             <br></br>
            
            <button type="submit">DELETE</button>
        </form>
    </div>
  )
}

export default Delete