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
  Link,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import UserContext from './UserContext';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [rollno, setRollno] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('0'); // Default to 'Student'
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(UserContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
  
    // Simple validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus('Please enter a valid email address.');
      setLoading(false);
      return;
    }
  
    if (password.length < 6) {
      setStatus('Password should be at least 6 characters long.');
      setLoading(false);
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/reg', {
        name: username,
        rollno,
        email,
        password,
        role,
      });
      setStatus('User registered successfully!');
      setLoggedInUser(true); // Update user context to reflect the logged-in status
      navigate('/'); // Navigate to the home page after success
      console.log('User registered:', response.data);
    } catch (error) {
      setStatus('Error registering user. Please try again.'); // Show error
      console.error(
        'Error registering user:',
        error.response ? error.response.data : error.message
      );
    }
    setLoading(false); // Stop loading after submission attempt
  };
  
 

  return (
    <>
      <br /><br /><br />
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        bg={useColorModeValue('gray.50', 'gray.800')}
        backgroundColor="black"
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
              Create a new account
            </Heading>
            <form onSubmit={handleSubmit}>
              <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl id="rollno" isRequired>
                <FormLabel>Roll Number</FormLabel>
                <Input
                  type="text"
                  placeholder="22PA1A...."
                  value={rollno}
                  onChange={(e) => setRollno(e.target.value)}
                />
              </FormControl>
              <FormControl id="email" mt={4} isRequired>
                <FormLabel>Email address</FormLabel>
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
              <FormControl id="role" mt={4} isRequired>
                <FormLabel>Role</FormLabel>
                <RadioGroup value={role} onChange={setRole}>
                  <Stack direction="row">
                    <Radio value="0">Student</Radio>
                    <Radio value="1">Alumni</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                size="lg"
                mt={6}
                w="full"
                isLoading={loading} // Disable the button and show loading state
              >
                Sign Up
              </Button>
              {status && ( // Display feedback message
                <Text
                  color={status.includes('Error') ? 'red.500' : 'green.500'}
                  textAlign="center"
                  mt={4}
                >
                  {status}
                </Text>
              )}
              <Text textAlign="center" mt={4}>
                ----- or -----
              </Text>
              <Text textAlign="center" mt={2}>
                Already have an account?{' '}
                <Link color="blue.500" href="/login">
                  Login here
                </Link>
              </Text>
            </form>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default SignupForm;
