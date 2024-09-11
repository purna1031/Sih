import React, { useState } from "react";
import { Box, Button, Input, Textarea, Heading, Flex, VStack, FormControl, FormLabel, useToast } from "@chakra-ui/react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { FaPaypal } from "react-icons/fa6";


const DonatePage = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handleDonate = () => {
    if (!amount) {
      toast({
        title: "Missing Amount",
        description: "Please enter a donation amount.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }



    toast({
      title: "Donation Successful",
      description: "Thank you for your generous donation!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Clear form after successful donation
    setAmount("");
    setMessage("");
  };

  return (
    <Box bg="gray.50" py={10} px={4} minH="100vh">
      <Flex direction="column" align="center" justify="center" maxW="800px" mx="auto">
        <Heading mb={6} color="gray.800">
          Make a Donation
        </Heading>

        <Box bg="white" p={6} shadow="md" borderRadius="md" w="full">
          <VStack spacing={4} align="stretch">
            <FormControl id="amount" isRequired>
              <FormLabel color="gray.700">Donation Amount</FormLabel>
              <Input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                borderColor="gray.300"
                _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 1px blue.400" }}
              />
            </FormControl>
            <FormControl id="message">
              <FormLabel color="gray.700">Message (Optional)</FormLabel>
              <Textarea
                placeholder="Add a personal message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                borderColor="gray.300"
                _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 1px blue.400" }}
              />
            </FormControl>
            <Button colorScheme="blue" onClick={handleDonate}>
              Donate
            </Button>
          </VStack>
        </Box>

        <Box mt={8} w="full" textAlign="center">
          <Heading size="md" mb={4} color="gray.800">
            Payment Options
          </Heading>
          <Flex justify="center" gap={6}>
            <Button
              leftIcon={<AiOutlineCreditCard />}
              colorScheme="teal"
              variant="outline"
              size="lg"
            >
              Credit Card
            </Button>
            <Button
              leftIcon={<FaPaypal />}
              colorScheme="blue"
              variant="outline"
              size="lg"
            >
              PayPal
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default DonatePage;
