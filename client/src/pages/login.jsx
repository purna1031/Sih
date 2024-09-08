import React, { useState, useContext } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Stack,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from './UserContext'; 

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password,
      });

      const { token, refreshToken, user } = response.data;

      setLoggedInUser(user); 
      localStorage.setItem('loggedInUser', JSON.stringify(user)); 
      localStorage.setItem('accessToken', token);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('role', user.role);

      setStatus('Login successful!');
      navigate('/');
      
      console.log('Login response:', response.data.user);
    } catch (error) {
      setStatus('Error logging in. Please check your credentials.');
      console.error('Error logging in:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Box
        rounded="lg"
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow="lg"
        p={8}
        maxW="md"
        w="full"
      >
        <Stack spacing={4}>
          <Heading fontSize="2xl" textAlign="center">
            Login to your account
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" mt={4} isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              mt={6}
              w="full"
            >
              Login
            </Button>
            {status && (
              <Text color={status.includes('Error') ? 'red.500' : 'green.500'} textAlign="center" mt={4}>
                {status}
              </Text>
            )}
            <Text textAlign="center" mt={4}>
              ----- or -----
            </Text>
            <Text textAlign="center" mt={2}>
              New Here?{' '}
              <Link color="blue.500" className='hover:text-blue-400 underline' to="/signup">
                Sign Up
              </Link>
            </Text>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
};

export default LoginForm;
