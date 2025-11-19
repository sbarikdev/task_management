import { FaClock, FaTasks, FaCheckCircle } from "react-icons/fa";
import {
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";

import StatCard from "../dashboard/StatCard";

const stats = [
  { label: "Pending", count: 5, icon: <FaClock />, color: "yellow.400" },
  { label: "In Progress", count: 3, icon: <FaTasks />, color: "blue.400" },
  {
    label: "Completed",
    count: 7,
    icon: <FaCheckCircle />,
    color: "green.400",
  },
];
const StatsList = () => {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default StatsList;
