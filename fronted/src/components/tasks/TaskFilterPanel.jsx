import {
  Box,
  Select,
  Input,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function TaskFilterPanel({ filters, onChange, onReset }) {
  const [localFilters, setLocalFilters] = useState(
    filters || {
      status: "",
      priority: "",
      category: "",
      search: "",
    }
  );

  const bg = useColorModeValue("gray.100", "gray.700");
  const buttonBgColor = useColorModeValue("gray.200", "gray.800");
  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleChange = (field, value) => {
    const updated = { ...localFilters, [field]: value };
    setLocalFilters(updated);
    onChange?.(updated);
  };

  const handleReset = () => {
    const resetFilters = { status: "", priority: "", category: "", search: "" };
    setLocalFilters(resetFilters);
    onReset?.();
  };

  return (
    <Box bg={bg} p={4} borderRadius="md" mb={4}>
      <Stack
        direction={{ base: "column", md: "row" }}
        alignItems={{ md: "center" }}
        spacing={3}
        w="full"
      >
        <Select
          placeholder="Filter by Status"
          value={localFilters.status}
          onChange={(e) => handleChange("status", e.target.value)}
          flex="1"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </Select>

        <Select
          placeholder="Filter by Priority"
          value={localFilters.priority}
          onChange={(e) => handleChange("priority", e.target.value)}
          flex="1"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </Select>

        <Select
          placeholder="Filter by Category"
          value={localFilters.category}
          onChange={(e) => handleChange("category", e.target.value)}
          flex="1"
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Health">Health</option>
          <option value="Shopping">Shopping</option>
          <option value="Urgent">Urgent</option>
        </Select>

        <Input
          placeholder="Search by title or description..."
          value={localFilters.search}
          onChange={(e) => handleChange("search", e.target.value)}
          flex="2"
          p={{ base: "10px" }}
        />

        <Button
          size="sm"
          onClick={handleReset}
          flex={{ base: "1", md: "0" }}
          p={{ base: "10px", md: "10px 30px" }}
          backgroundColor={buttonBgColor}
        >
          Reset
        </Button>
      </Stack>
    </Box>
  );
}
