import React, { useState } from 'react';
import './dash.css'; // Adjust path as needed
import logo from '../images/vishnu.png';
import Home from '../home'
import Footer from '../footer';
import SignupForm from '../signup';


const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <div><Home /></div>;
      case 'interact':
        return <div><h2>Interact with Alumni</h2><p>This is the Interact section content.</p></div>;
      case 'donate':
        return <div><h2>Donate to the Alumni Fund</h2><p>This is the Donate section content.</p></div>;
      case 'aboutus':
        return <div><h2>About Us</h2><p>This is the About Us section content.</p></div>;
      

      default:
        return <div><h2>Welcome to VishnAlumni</h2></div>;
    }
  };

  return (
    <div className='main-dash'>
      <header>
        <nav>
          <div className="logo">
            <p><img src={logo} alt='logo' height='50' width='50' /></p>
            <p>VishnAlumni</p>
          </div>
          <ul>
            <li><a href="#" onClick={() => setActiveSection('home')}>Home</a></li>
            <li><a href="#" onClick={() => setActiveSection('interact')}>Interact</a></li>
            <li><a href="#" onClick={() => setActiveSection('donate')}>Donate</a></li>
            <li><a href="#" onClick={() => setActiveSection('aboutus')}>About Us</a></li>
            <li><a href="/signup" >Login/SignUp</a></li>
            <li>
              
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {renderSection()}
      </main>
      <footer>
      <Footer />
      </footer>
    </div>
  );
}

export default Dashboard;
