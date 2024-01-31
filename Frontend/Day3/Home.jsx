import React from "react";
import  { useState } from "react";
import "../assets/Home.css"
import mainvideo from "../Images/video1.mp4"
import terms from "../Images/terms.png"
import faq from "../Images/faq.png"
import Services from "../Components/Services"
import UserNavbar from "../Components/UserNavbar"
import Blog from "../Components/Blog"
function Home() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
    <React.Fragment>
    <link href="https://fonts.googleapis.com/css2?family=Cookie&family=Kaushan+Script&display=swap" rel="stylesheet"/>

    <div className="homebody">
      <UserNavbar/>
      <div id="Home">
            <h1 className="homeHead">"Turning Dreams into Unforgettable Moments: Your Premier Partner in Seamless Event Management"</h1>
      

  <video autoPlay loop muted playsInline>
        <source src={mainvideo} type="video/mp4" />
      </video><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div className="paracontainer" >
      
            <div id="About">
            <h2 className="para"> Get Ready for the Ultimate Party Experience! </h2>
           <p className="homepara">
            Are you dreaming of the perfect party but overwhelmed by the details? Look no further! Our expert event management team is here to turn your vision into a reality, creating a celebration that will leave your guests in awe.
            Our team of seasoned event planners brings years of experience to the table. We've successfully organized a wide range of events, from intimate gatherings to grand galas, and we know exactly what it takes to make yours unforgettable.
            Your party should reflect your unique style and preferences. We work closely with you to understand your vision, ensuring that every detail, from the theme to the smallest decor element, aligns perfectly with your desires.
            Quality event planning doesn't have to break the bank. We work with your budget to create a spectacular event without compromising on style or quality.
            Stay ahead of the trends with our creative and innovative event concepts. Whether you're looking for a classic and elegant affair or a trendy and unique experience, we have the ideas to make it happen.
            Relax and enjoy the anticipation of your event while we handle the logistics. We take care of everything, from venue selection and decorations to catering and entertainment, allowing you to be a guest at your own party.
            let us handle the planning while you enjoy the celebration. 
    </p>
            </div>
    

      </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div id="Events">
        <Services/>
      </div>
      </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div id="Blog">
        <Blog/>
      </div>
      <>
      <footer className="footer">
        
        <div className="row">
          <div className="column">
            
            <h1>Quick Links</h1>
            <ul className="list">
            <li>
              <a href="/Home">
              
                Home
              </a>
            </li>
            <li>
              <a href={terms}>
                <i className="fa fa-angle-double-right" />
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href={faq}>
                <i className="fa fa-angle-double-right" />
                FAQ
              </a>
            </li>
            </ul>
          </div>
          
          <div className="column">
            <h1>Quick Links</h1>
            <ul className="list">
            <li>
              <a href="mailto:
              indhu131003@gmail.com">
                <i className="fa fa-angle-double-right" />
                Contact us
              </a>
            </li>
            <li>
              <a href="/Services">
                <i className="fa fa-angle-double-right" />
                Get Started
              </a>
            </li>
            <li>
              <a href="/Feedback">
                <i className="fa fa-angle-double-right" />
                Feed back
              </a>
            </li>
            </ul>
          </div>
          <div className="column">
            <h1>Website Links</h1>
            <ul className="list">
            <li>
              <a href="https://www.instagram.com/elegantevent_planners/?hl=en">
                <i className="fa fa-angle-double-right" />
                Chennai Event Planners
              </a>
            </li>
            <li>
              <a href="https://www.jdeventsandentertainments.com/birthday">
                <i className="fa fa-angle-double-right" />
               JD Events
              </a>
            </li>
            
            </ul>
          </div>
          
        </div>
        <div className="footercenter">
         
          <p>
            ©2024 [fiestaFleet] All right Reversed.
            <a
              className="list"
              href="/"
              target="_blank"
            >
              fiestafleet
            </a>
          </p>
        </div>
      </footer>
</> 
      </div>
      </React.Fragment>
    </>
  );
}

export default Home;