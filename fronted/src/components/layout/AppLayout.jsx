import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }) {
  return (
    <Flex minH="100vh">
      <Sidebar />
      <Box flex="1">
        <Header />
        <Box pl="80px" pr={"15px"} pt={6} minH="100vh">
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
}
