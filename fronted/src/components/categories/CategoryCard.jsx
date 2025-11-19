import {
  Box,
  Text,
  IconButton,
  Flex,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

export default function CategoryCard({ name, color, onDelete }) {
  
  const bg = useColorModeValue(color || "gray.100", color || "gray.700");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p={4}
      bg={bg}
      color={textColor}
      shadow="sm"
      _hover={{ shadow: "md" }}
      position="relative"
    >
      <Flex w="full" align="center">
        <Text fontWeight="bold">{name}</Text>
        <Spacer />
        <IconButton
          aria-label="Delete category"
          icon={<FaTrash />}
          size="sm"
          variant="ghost"
          color="red.600"
          _hover={{ bg: "red.100" }}
          onClick={onDelete}
        />
      </Flex>
    </Box>
  );
}
