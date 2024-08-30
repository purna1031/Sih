import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardBody,
  Heading, 
  SimpleGrid,
  Text, 
  useColorModeValue,
  Box,
  Container,
  Stack,
  Button,
} from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <Box
        minH="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bg="black"
        p={0}
      >
        <Container maxW="container.lg" centerContent>
          <Stack spacing={6} textAlign="center">
            <Heading as="h1" size="2xl" color="bisque">
              Welcome to VishnuAlumni
            </Heading>
            <Text fontSize="lg" color="bisque">
              Connect with fellow alumni, stay updated on events, and contribute to our community.
            </Text>
            <Text fontSize="lg" color="bisque">
              We are excited to have you here!
            </Text>
            <Button
              onClick={() => alert('Login to interact with Alumni..')}
              backgroundColor="bisque"
              color="black"
            >Let's connect with Alumni...
            </Button>
          </Stack>
        </Container>
      </Box>

      <hr />

      <Box
        py={8}
        px={4}
        bg={useColorModeValue('gray.100', 'gray.900')}
        color="bisque"
        backgroundColor="black"
      >
        <Container maxW="container.lg">
          <Heading textAlign="center" pb={5} color="bisque">
            Features
          </Heading>
          <SimpleGrid spacing={8} templateColumns="repeat(auto-fill, minmax(300px, 1fr))" alignItems="start">
            <Card>
              <CardHeader>
                <Heading size="lg">Projects</Heading>
              </CardHeader>
              <CardBody>
                <Text>Get mentorship from the alumni of the college.</Text>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Heading size="lg">Events</Heading>
              </CardHeader>
              <CardBody>
                <Text>Receive real-time updates of events and participate in community activities.</Text>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Heading size="lg">Job Discussions</Heading>
              </CardHeader>
              <CardBody>
                <Text>Alumni can intimate the students about how to approach for a job in certain domains.</Text>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Heading size="lg">Success Stories</Heading>
              </CardHeader>
              <CardBody>
                <Text>Students can be inspired by the Alumni who had reached greater heights.</Text>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Heading size="lg">Contributions</Heading>
              </CardHeader>
              <CardBody>
                <Text>Contribute funds to projects that need financial support for further development.</Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}

export default Home;
