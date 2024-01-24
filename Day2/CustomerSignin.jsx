import { useState } from "react"
import "../assets/CustomerSignin.css"
import mail from "../Images/mail.png"
import password from "../Images/padlock.png"
import contact from "../Images/user.png"
import address from "../Images/address.png"

import mobile from "../Images/mobile.png"

const CustomerSignin = () => {
    const[action,setAction]=useState("Sign Up");
  return (
    <div >
    <div  className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action=="Login"?<div></div>:<div className="input">
                <img src={contact} alt="" />
                <input type="text" placeholder="Name"/>
            </div>}
            {action=="Login"?<div></div>:<div className="input">
                <img src={address} alt="" />
                <input type="text" placeholder="Address" />
            </div>}
            {action=="Login"?<div></div>:<div className="input">
                <img src={mobile} alt="" />
                <input type="number" placeholder="Phone" />
            </div>}
            
            <div className="input">
                <img src={mail} alt="" />
                <input type="email" placeholder="Email Id" />
            </div>
            <div className="input">
                <img src={password} alt="" />
                <input type="password" placeholder="Password"/>
            </div>
        </div>
        {action=="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
}
        <div className="submit-container">
            <div className={action=="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action=="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
    </div>
  )
}

export default CustomerSignin