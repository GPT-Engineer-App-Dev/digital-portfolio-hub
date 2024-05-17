import { Container, VStack, Text, Box, Image, Link, Button } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTU5NTkwMjV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Image" />
        <Box textAlign="center">
          <Text fontSize="2xl" fontWeight="bold">
            John Doe
          </Text>
          <Text fontSize="md">Software Developer | React Specialist</Text>
        </Box>
        <Box>
          <Link href="https://www.linkedin.com/in/johndoe" isExternal>
            <Button leftIcon={<FaLinkedin />} colorScheme="blue" variant="solid">
              LinkedIn
            </Button>
          </Link>
          <Link href="https://github.com/johndoe" isExternal ml={2}>
            <Button leftIcon={<FaGithub />} colorScheme="gray" variant="solid">
              GitHub
            </Button>
          </Link>
          <Link href="mailto:johndoe@example.com" isExternal ml={2}>
            <Button leftIcon={<FaEnvelope />} colorScheme="red" variant="solid">
              Email
            </Button>
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
