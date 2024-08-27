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
} from '@chakra-ui/react';

const LoginForm = () => {
  const [rollno, setRollno] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
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
          </form>
        </Stack>
      </Box>
    </Flex>
  );
};

export default LoginForm;
