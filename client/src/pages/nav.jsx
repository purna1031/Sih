import React, { useContext } from "react";
import { useLocation, Link, Navigate } from "react-router-dom"; 
import './dash.css'; 
import logo from '../images/vishnu.png';
import UserContext from './UserContext';
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const nav =useNavigate();
  const { loggedInUser } = useContext(UserContext);
  const location = useLocation(); 

  if (!loggedInUser && location.pathname !== '/login' && location.pathname!== '/signup' ) {
   nav('/signup')
  }

  const { name, role } = loggedInUser || {}; 

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login'; 
  };

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
              <Link to="/">Hi, {name}</Link>
            </li>
            <li>
              <Link to="/interact">Interact</Link>
            </li>
            <li>
              <Link to="/event">Event</Link>
            </li>
            {role?  <li>
                <Link to="/donate">Donate</Link>
              </li> : ''
             
}
            <li>
              <Link to="/jobdiscussion">Job Discussions</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            {loggedInUser ? (
              <li>
                <Button onClick={handleLogout}>Logout</Button>
                </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
           
            
          </ul>
        </nav>
      </header>
      
    </div>
  );
};

export default Nav;
