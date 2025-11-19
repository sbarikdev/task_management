import {
  Box,
  Text,
  HStack,
  Progress,
  useColorModeValue,
} from "@chakra-ui/react";


export default function StatCard({ label, count, icon, color }) {
  const cardBg = useColorModeValue("gray.100", "gray.700");
  const cardHover = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.700", "white");

 
  return (
    <Box
      bg={cardBg}
      p={5}
      borderRadius="md"
      boxShadow="md"
      _hover={{ bg: cardHover }}
      transition="background-color 0.5s ease"
      minH="120px"
    >
      <HStack align="end" spacing={3}>
        <Text
          fontSize="80px"
          fontWeight="bold"
          color={textColor}
          lineHeight={1}
        >
          {count}
        </Text>
        <Box
          display="flex"
          alignItems="center"
          gap={2}
          transform="translateY(-10px)"
        >
          {icon}
          <Text fontWeight="bold" fontSize="lg" color={textColor}>
            {label}
          </Text>
        </Box>
        <Progress
          value={(count / 10) * 100}
          size="sm"
          colorScheme={color.split(".")[0]}
          borderRadius="md"
        />
      </HStack>
    </Box>
  );
}
