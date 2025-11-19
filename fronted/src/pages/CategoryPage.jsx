import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";

import CategoryCard from "../components/categories/CategoryCard";
import AddButton from "../components/ui/AddButton";
import useErrorToast from "../hooks/useErrorToast";
import CategoryModal from "../components/categories/CategoryModal";
import useSuccessToast from "../hooks/useSuccessToast";
import Header from "../components/ui/Header";

export default function CategoryPage() {
  const showError = useErrorToast();
  const showSuccess = useSuccessToast();
  const [isOpen, setIsOpen] = useState(false);

  // Dummy categories
  const categories = [
    { id: 1, name: "Work", color: "blue.200" },
    { id: 2, name: "Personal", color: "green.200" },
    { id: 3, name: "Shopping", color: "yellow.200" },
    { id: 4, name: "Health", color: "red.200" },
  ];

  const handleFormSubmit = () => {
    try {
      // Simulate API call or validation
      console.log("Add Category clicked");

      // throw new Error("Failed to add category");
      showSuccess("Category successfully added!");
    } catch (err) {
      showError(err.message);
    }
  };

  return (
    <Box position="relative" minH="100vh">
      <Header title="Categories" />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </SimpleGrid>
      <CategoryModal
        initialData={null}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleFormSubmit}
      />
      <AddButton handleClick={() => setIsOpen(true)} />
    </Box>
  );
}
