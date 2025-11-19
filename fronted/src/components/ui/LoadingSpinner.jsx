import {
  Center,
  Spinner,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function LoadingSpinner({
  message = "Loading...",
  size = "xl",
  fullScreen = false,
}) {
  const bg = useColorModeValue("whiteAlpha.800", "blackAlpha.600");

  if (fullScreen) {
    return (
      <Center
        position="fixed"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        bg={bg}
        zIndex="overlay"
        flexDirection="column"
      >
        <VStack spacing={4}>
          <Spinner size={size} />
          <Text fontSize="lg" fontWeight="bold">
            {message}
          </Text>
        </VStack>
      </Center>
    );
  }

  return (
    <VStack spacing={2}>
      <Spinner size={size} />
      <Text>{message}</Text>
    </VStack>
  );
}
