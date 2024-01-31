import "../assets/Booking.css"
import '@fortawesome/fontawesome-free/css/all.css';
import AdminNavbar from "../Components/AdminNavbar"
const Booking = () => {
  return (
    <div>
    <AdminNavbar/>
<div className="container">
  <div className="row">
    <div className="col-12">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">S no</th>
            <th scope="col">Client</th>
            <th scope="col">Contact</th>
            <th scope="col">Event Booking</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Theme</th>
            <th scope="col">Location</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <th scope="row">1</th>
            <td>Sita</td>
            <td>9824536421</td>
            <td>Wedding</td>
            <td>21/02/2024</td>
            <td>6:00am</td>
            <td>Red</td>
            <td>Chennai</td>
            <td>
              <div className="btn-group">
              
              <button type="button" className="btn btn-success">
                <i className="fas fa-edit" />
              </button>
              <button type="button" className="btn btn-danger">
                <i className="far fa-trash-alt" />
              </button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Gowtham</td>
            <td>8425934571</td>
            <td>Birthday</td>
            <td>10/02/2024</td>
            <td>7:00 pm</td>
            <td>Yellow</td>
            <td>Kanchipuram</td>
            <td>
              <div className="btn-group">
              
              <button type="button" className="btn btn-success">
                <i className="fas fa-edit" />
              </button>
              <button type="button" className="btn btn-danger">
                <i className="far fa-trash-alt" />
              </button>
              </div>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>
    
  )
}

export default Booking