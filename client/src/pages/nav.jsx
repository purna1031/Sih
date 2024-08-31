import React from "react";
import './dash.css'; 
import logo from '../images/vishnu.png';
import Footer from "./footer";

const Nav =()=>{
    return (
        <div className="main-dash">
          <header>
            <nav>
              <div className="logo">
                <img src={logo} alt="logo" height="50" width="50" />
                <p>VishnAlumni</p>
              </div>
              <ul>
    
                <li>
                  <a href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/interact">Interact
                  </a>
                </li>
                <li>
                  <a href="/donate">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="/jobdiscussion">
                    Job Discussion
                  </a>
                </li>
                <li>
                  <a href="/aboutus">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/signup">
                    Login/SignUp
                  </a>
                </li>
              </ul>
            </nav>
          </header>
    
     
    
          <footer>
            <Footer />
          </footer>
        </div>
      );
};

export default Nav;