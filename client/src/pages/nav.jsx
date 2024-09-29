import React, { useContext } from "react";
import { useLocation, Link, Navigate } from "react-router-dom"; 
import './dash.css'; 
import logo from '../images/vishnu.png';
import UserContext from './UserContext';
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const nav = useNavigate();
  const { loggedInUser } = useContext(UserContext);
  const location = useLocation();

  // Redirect user to /signup if not logged in and not on login/signup pages
  if (!loggedInUser && location.pathname !== '/login' && location.pathname !== '/signup') {
    return <Navigate to="/signup" />;
  }

  const { name, role } = loggedInUser || {};

  const handleLogout = () => {
    localStorage.clear();
    nav('/login'); // Use `useNavigate` instead of `window.location.href`
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
            {name && <li><Link to="/">Hi, {name}</Link></li>}
            <li><Link to="/interact">Interact</Link></li>
            <li><Link to="/event">Event</Link></li>
            {role && role === 'alumni' && ( // Conditional rendering for Alumni role
              <li><Link to="/donate">Donate</Link></li>
            )}
            <li><Link to="/jobdiscussion">Job Discussions</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            {loggedInUser ? (
              <li>
                <Button onClick={handleLogout}>Logout</Button>
              </li>
            ) : (
              <li><Link to="/login">Login</Link></li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
