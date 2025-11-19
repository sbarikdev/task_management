import {
  Box,
  Text,
  Badge,
  VStack,
  useColorModeValue,
  Flex,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function TaskCard({
  title,
  description,
  status,
  priority,
  dueDate,
  category,
  onDelete,
  handleEdit,
}) {
  
  const statusColor = (status) => {
    switch (status) {
      case "Pending":
        return "yellow";
      case "In Progress":
        return "blue";
      case "Completed":
        return "green";
      default:
        return "gray";
    }
  };

  
  const bg = useColorModeValue("white", "gray.700");
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
      <Flex w="full" align="center" mb={2}>
        <Spacer />
        <IconButton
          aria-label="Update task"
          icon={<FaEdit />}
          size="sm"
          variant="ghost"
          color="blue.500"
          _hover={{ bg: useColorModeValue("blue.100", "blue.200") }}
          onClick={handleEdit}
          mr={2}
        />
        <IconButton
          aria-label="Delete task"
          icon={<FaTrash />}
          size="sm"
          variant="ghost"
          color="red.600"
          _hover={{ bg: useColorModeValue("red.100", "red.300") }}
          onClick={onDelete}
        />
      </Flex>

      <VStack align="start" spacing={1}>
        <Text fontWeight="bold">{title}</Text>
        {description && (
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.300")}>
            {description}
          </Text>
        )}
        <Badge colorScheme={statusColor(status)}>{status}</Badge>
        <Text>Priority: {priority}</Text>
        <Text>Due: {dueDate}</Text>
        <Text>Category: {category}</Text>
      </VStack>
    </Box>
  );
}
