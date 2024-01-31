import { TextField,Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../assets/CustomerSignin.css"
const AdminSignin = () =>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const navigate=useNavigate();


    const handleMail=(event)=>{
        event.preventDefault();
        setEmail(event.target.value);
    }
    const handlePwd=(event)=>{
        event.preventDefault();
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      
      setFormErrors(validate({ email, password }));
    
      if (isSubmit) {
        navigate('/Admin');
      }
    };


    const validate = (values) => {
      const errors = {};
    
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
                  <h1 className="ask">Sign In</h1>
                  <br></br>
                  <TextField onChange={handleMail} value={email}  className="inp"  label="Email" ></TextField>
                  <p  style={{color:"red",fontSize:"13px",marginLeft:"5px"}}>{formErrors.email}</p>
                  <br></br>
                  <TextField onChange={handlePwd} value={password}  className="inp" type="password" label="Password" ></TextField>
                  <p  style={{color:"red",fontSize:"13px",marginLeft:"5px"}}>{formErrors.password}</p>
                  <br></br>
                  <p>New user? Register <Link to="/CustomerSignup" element>here</Link></p>
                  
                  <br></br>
                  <Button type="submit"  id="login-button"  variant="contained" >
                      Log In 
                  </Button>
                
            </form>
    </div>
    )
}
export default AdminSignin