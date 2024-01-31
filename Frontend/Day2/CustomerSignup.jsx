import { TextField,Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../assets/CustomerSignin.css"
const CustomerSignin = () =>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress]=useState("");
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const navigate=useNavigate();

    const handleName=(event)=>{
        event.preventDefault();
        setName(event.target.value);
    }
    const handleMail=(event)=>{
        event.preventDefault();
        setEmail(event.target.value);
    }
    const handlePwd=(event)=>{
        event.preventDefault();
        setPassword(event.target.value);
    }
    const handlePhone=(event)=>{
        event.preventDefault();
        setPhone(event.target.value);
    }
    const handleAddress=(event)=>{
        event.preventDefault();
        setAddress(event.target.value);
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      
      setFormErrors(validate({ name, email, password , phone, address}));
    
      if (isSubmit) {
        navigate('/Home');
      }
    };


    const validate = (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Name is Required";
      }
      if (!values.phone) {
        errors.phone = "Mobile No is Required";
      }
      if (!values.address) {
        errors.address = "Address is Required";
      }
      if (!values.email) {
        errors.email = "Email is Required";
      } else if (values.email.length < 5 ) {
        errors.email = "Email invalid format";
      }
    
      if (!values.password) {
        errors.password = "Password is Required";
      }
    
      const isValid = Object.keys(errors).length === 0;
      setIsSubmit(isValid);

      return errors;
    };
    
    return(
        <div id="log-box-main">
        <form className="emp-box" onSubmit={handleSubmit}>
                  <h1 className="ask">Sign Up</h1>
                  <br></br>
                  <TextField onChange={handleName} value={name}  className="inp" type="text" label="Name" ></TextField>
                  <p  style={{color:"red",fontSize:"13px",marginLeft:"5px"}}>{formErrors.name}</p>
                  <br></br>
                  <TextField onChange={handleMail} value={email}  className="inp"  label="Email" ></TextField>
                  <p  style={{color:"red",fontSize:"13px",marginLeft:"5px"}}>{formErrors.email}</p>
                  <br></br>
                  <TextField onChange={handlePwd} value={password}  className="inp" type="password" label="Password" ></TextField>
                  <p  style={{color:"red",fontSize:"13px",marginLeft:"5px"}}>{formErrors.password}</p>
                  <br></br>
                  <TextField onChange={handlePhone} value={phone}  className="inp" type="phone" label="Mobile No" ></TextField>
                  <p  style={{color:"red",fontSize:"13px",marginLeft:"5px"}}>{formErrors.phone}</p>
                  <br></br>
                  <TextField onChange={handleAddress} value={address}  className="inp" type="text" label="Address" ></TextField>
                  <p  style={{color:"red",fontSize:"13px",marginLeft:"5px"}}>{formErrors.address}</p>
                  <br></br>
                  <p>Already have an account?<Link to="/CustomerSignin" element>here</Link></p>
                  
                  <br></br>
                  <Button type="submit"  id="login-button"  variant="contained" >
                      Sign Up 
                  </Button>
                
            </form>
    </div>
    )
}
export default CustomerSignin