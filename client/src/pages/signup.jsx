import React, { useState } from 'react';
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
} from '@chakra-ui/react';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [rollno, setRollno] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    console.log('Username:', username);
    console.log('Roll Number:', rollno);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
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
            <FormControl id="confirm-password" mt={4} isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              mt={6}
              w="full"
            >
              Sign Up
            </Button>
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
  );
};

export default SignupForm;
