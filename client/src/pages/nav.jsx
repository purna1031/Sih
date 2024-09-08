import React, { useContext } from "react";
import './dash.css'; 
import logo from '../images/vishnu.png';
import Footer from "./footer";
import UserContext from './UserContext';
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Nav = () => {
  const { loggedInUser } = useContext(UserContext); 

  const {name,role}=loggedInUser;
  console.log(name)
  const handleLogout = () => {
localStorage.clear();

  };

  return (
    <div className="main-dash">
      <header>
        
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" height="50" width="50" />
            <p>VishnAlumni  </p>
          </div>
          <ul>
            <li>
              <Link to="/">Hi</Link>
            </li>
            <li>
              <Link to="/interact">Interact</Link>
            </li>
            <li>
              <Link to="/event">Event</Link>
            </li>
            {role?<li>
              <Link to="/donate"  >Donate</Link>
            </li>:''}
            <li>
              <Link to="/jobdiscussion">Job Discussions</Link>
            </li>
            <li>
              <a href="/aboutus">About Us</a>
            </li>
          
            <li>
              <a href={loggedInUser ? "/profile" : "/signup"}>
                {loggedInUser ? loggedInUser.role : 'Login/Signup'}
              </a>
            </li>
            {loggedInUser && (
              <Button onClick={handleLogout}>Logout</Button>
            )}
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
