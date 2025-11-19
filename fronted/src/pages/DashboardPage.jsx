import { useEffect } from "react";
import { Box } from "@chakra-ui/react";

import Header from "../components/ui/Header";
import StatsList from "../components/dashboard/StatsList";

export default function DashboardPage() {
  useEffect(() => {}, []);

  return (
    <Box>
      <Header title="Dashboard" />
      <StatsList />
    </Box>
  );
}
