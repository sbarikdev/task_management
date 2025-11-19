import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function CategoryModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setColor(initialData.color || "");
    } else {
      setName("");
      setColor("");
    }
  }, [initialData, isOpen]);

  const handleSubmit = () => {
    if (!name.trim()) return;

    onSubmit({
      name: name.trim(),
      color: color.trim() || undefined,
    });

    onClose();
  };

  const headerBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg={headerBg} borderBottomWidth="1px">
          {initialData ? "Edit Category" : "Add Category"}
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody mt={4}>
          <FormControl mb={4}>
            <FormLabel>Category Name</FormLabel>
            <Input
              placeholder="e.g. Work, Health, Shopping"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Color (optional)</FormLabel>
            <Input
              placeholder="e.g. blue.200"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Cancel
          </Button>

          <Button colorScheme="teal" onClick={handleSubmit}>
            {initialData ? "Save Changes" : "Add Category"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
