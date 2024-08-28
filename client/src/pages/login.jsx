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
  Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const LoginForm = () => {
  const [rollno, setRollno] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Roll No:', rollno);
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
            Login to your account
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="rollno" isRequired>
              <FormLabel>Roll Number</FormLabel>
              <Input
                type="text"
                placeholder='22PA1A....'
                value={rollno}
                onChange={(e) => setRollno(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" mt={4} isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder='Password'
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
            <Text textAlign="center" mt={4}>
              ----- or -----
            </Text>
            <Text textAlign="center" mt={2}>
              New Here?{' '}
              <Link color="blue.500" className=' hover:text-blue-400 underline' to="/signup">
                SignUp
              </Link>
            </Text>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
};

export default LoginForm;
