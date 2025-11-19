import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useState, useMemo } from "react";

import TaskCard from "../components/tasks/TaskCard";
import AddButton from "../components/ui/AddButton";
import TaskModal from "../components/tasks/TaskModal";
import TaskFilterPanel from "../components/tasks/TaskFilterPanel";
import useErrorToast from "../hooks/useErrorToast";
import useSuccessToast from "../hooks/useSuccessToast";
import Header from "../components/ui/Header";

export default function TaskListPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: "",
    priority: "",
    category: "",
    search: "",
  });
  const showError = useErrorToast();
  const showSuccess = useSuccessToast();

  const tasks = [
    {
      id: 1,
      title: "Finish project report",
      description: "Complete report",
      status: "Pending",
      priority: "High",
      dueDate: "2025-11-20",
      category: "Work",
    },
    {
      id: 2,
      title: "Buy groceries",
      description: "Buy milk and eggs",
      status: "Completed",
      priority: "Low",
      dueDate: "2025-11-14",
      category: "Personal",
    },
    {
      id: 3,
      title: "Workout session",
      description: "Gym session",
      status: "In Progress",
      priority: "Medium",
      dueDate: "2025-11-15",
      category: "Health",
    },
  ];

  // Filtered tasks based on filters
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesStatus = filters.status
        ? task.status === filters.status
        : true;
      const matchesPriority = filters.priority
        ? task.priority === filters.priority
        : true;
      const matchesCategory = filters.category
        ? task.category === filters.category
        : true;
      const matchesSearch = filters.search
        ? task.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          task.description.toLowerCase().includes(filters.search.toLowerCase())
        : true;
      return (
        matchesStatus && matchesPriority && matchesCategory && matchesSearch
      );
    });
  }, [tasks, filters]);

  const handleEdit = () => {
    setIsOpen(true);
  };

  const handleFormSubmit = () => {
    try {
      showSuccess("Task Successfully Submitted!");
    } catch (e) {
      showError(e.message);
    }
  };
  return (
    <Box>
      <Header title="Tasks" />

      <TaskFilterPanel
        filters={filters}
        onChange={setFilters}
        onReset={() =>
          setFilters({ status: "", priority: "", category: "", search: "" })
        }
      />

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} {...task} handleEdit={handleEdit} />
        ))}
      </SimpleGrid>

      <TaskModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialData={null}
        onSubmit={handleFormSubmit}
      />

      <AddButton handleClick={() => setIsOpen(true)} />
    </Box>
  );
}
