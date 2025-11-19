import { FaPlus } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

const AddButton = ({ handleClick }) => {
  const addButtonBg = useColorModeValue("gray.800", "gray.200");
  const addButtonHover = useColorModeValue("gray.700", "gray.300");
  const addButtonColor = useColorModeValue("white", "gray.800");
  return (
    <IconButton
      aria-label="Add Category"
      icon={<FaPlus />}
      size="lg"
      bg={addButtonBg}
      _hover={{ bg: addButtonHover }}
      color={addButtonColor}
      position="fixed"
      bottom="6"
      right="6"
      borderRadius="full"
      onClick={handleClick}
      boxShadow="md"
    />
  );
};

export default AddButton;
