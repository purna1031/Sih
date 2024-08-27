import React from 'react';
import { Box, Container, Stack, Text, Link, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      py={4}
      px={6}
      borderTopWidth={0}
      color={useColorModeValue('gray.600', 'gray.400')} // Adjusted color for text
      borderTopColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Container maxW="container.lg">
        <Stack spacing={4} align="center">
          <Text fontSize="sm" textAlign="center" color="bisque">
            &copy; {new Date().getFullYear()} VishnAlumni. All rights reserved.
          </Text>
          <Stack direction={['column', 'row']} spacing={4} justify="center" color="bisque">
            
            <Link href="/contact" fontSize="sm">
              Contact
            </Link>
            <Link href="/privacy" fontSize="sm">
              Privacy Policy
            </Link>
            <Link href="/terms" fontSize="sm">
              Terms of Service
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
