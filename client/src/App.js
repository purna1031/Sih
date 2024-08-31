import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import AboutUs from './pages/aboutus';
const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
