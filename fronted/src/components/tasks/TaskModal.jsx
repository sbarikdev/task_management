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
  Textarea,
  Select,
  FormErrorMessage,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { z } from "zod";

// ZOD SCHEMA
const TaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  category: z.string().min(1, "Category is required"),
  dueDate: z.string().optional(),
});

export default function TaskModal({ isOpen, onClose, initialData, onSubmit }) {
  const isEdit = Boolean(initialData);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setDescription(initialData.description || "");
      setCategory(initialData.category || "");
      setDueDate(initialData.dueDate || "");
    } else {
      resetFields();
    }
  }, [initialData]);

  const resetFields = () => {
    setTitle("");
    setDescription("");
    setCategory("");
    setDueDate("");
    setErrors({});
  };

  const handleClose = () => {
    resetFields();
    onClose();
  };

  // ZOD VALIDATION
  const validateForm = () => {
    const result = TaskSchema.safeParse({
      title,
      description,
      category,
      dueDate,
    });

    if (!result.success) {
      const formatted = result.error.flatten().fieldErrors;
      const mapped = Object.fromEntries(
        Object.entries(formatted).map(([key, val]) => [key, val?.[0]])
      );
      setErrors(mapped);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const payload = {
      title,
      description,
      category,
      dueDate,
    };

    onSubmit(payload);
    handleClose();
  };

  const headerBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          bg={headerBg}
          borderBottom="1px solid"
          borderColor="gray.300"
        >
          {isEdit ? "Edit Task" : "Add Task"}
        </ModalHeader>
        <ModalCloseButton onClick={handleClose} />

        <ModalBody py={4}>
          {/* TITLE */}
          <FormControl mb={4} isInvalid={!!errors.title}>
            <FormLabel>Task Title</FormLabel>
            <Input
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <FormErrorMessage>{errors.title}</FormErrorMessage>
          </FormControl>

          {/* DESCRIPTION */}
          <FormControl mb={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Optional description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>

          {/* CATEGORY */}
          <FormControl mb={4} isInvalid={!!errors.category}>
            <FormLabel>Category</FormLabel>
            <Select
              placeholder="Select category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="urgent">Urgent</option>
            </Select>
            <FormErrorMessage>{errors.category}</FormErrorMessage>
          </FormControl>

          {/* DUE DATE */}
          <FormControl mb={4} isInvalid={!!errors.dueDate}>
            <FormLabel>Due Date</FormLabel>
            <Input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            <FormErrorMessage>{errors.dueDate}</FormErrorMessage>
          </FormControl>
        </ModalBody>

        <ModalFooter gap={2}>
          <Button variant="ghost" onClick={handleClose}>
            Cancel
          </Button>
          <Button colorScheme="teal" onClick={handleSubmit}>
            {isEdit ? "Save Changes" : "Add Task"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
