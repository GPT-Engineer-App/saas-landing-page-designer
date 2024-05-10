import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" justify="center" minH="100vh" bg="white">
        {/* Navigation Bar */}
        <Flex as="nav" w="full" bg="gray.100" p={4} justify="space-between" align="center">
          <Heading size="md" color="blue.600">
            SaaS Company
          </Heading>
          <Stack direction="row" spacing={4}>
            <Link href="#" p={2} fontSize="md" fontWeight="bold" color="gray.700">
              Home
            </Link>
            <Link href="#" p={2} fontSize="md" fontWeight="bold" color="gray.700">
              Features
            </Link>
            <Link href="#" p={2} fontSize="md" fontWeight="bold" color="gray.700">
              Pricing
            </Link>
            <Link href="#" p={2} fontSize="md" fontWeight="bold" color="gray.700">
              About
            </Link>
          </Stack>
        </Flex>

        {/* Hero Section */}
        <VStack spacing={6} py={10} textAlign="center">
          <Heading size="2xl" fontWeight="bold" color="gray.800">
            Empower Your Workflow
          </Heading>
          <Text fontSize="xl" color="gray.500">
            Innovative solutions to boost your creative projects.
          </Text>
          <Button rightIcon={<FaRocket />} colorScheme="blue" size="lg">
            Get Started
          </Button>
        </VStack>

        {/* Features Section */}
        <Box py={10}>
          <VStack spacing={8}>
            <Heading size="lg" color="gray.800">
              Why Choose Us?
            </Heading>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="xl">Feature One</Heading>
                <Text mt={4} color="gray.500">
                  Description of feature one.
                </Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="xl">Feature Two</Heading>
                <Text mt={4} color="gray.500">
                  Description of feature two.
                </Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="xl">Feature Three</Heading>
                <Text mt={4} color="gray.500">
                  Description of feature three.
                </Text>
              </Box>
            </Stack>
          </VStack>
        </Box>

        {/* Call to Action Section */}
        <Flex bg="blue.600" color="white" p={10} w="full" justifyContent="center" alignItems="center">
          <VStack>
            <Heading size="lg">Ready to Start?</Heading>
            <Text>Join us today and make a difference!</Text>
            <Button colorScheme="blue" variant="outline">
              Sign Up Now
            </Button>
          </VStack>
        </Flex>

        {/* Footer */}
        <Box as="footer" p={5} bg="gray.100" w="full" textAlign="center">
          <Text>&copy; {new Date().getFullYear()} SaaS Company. All rights reserved.</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
