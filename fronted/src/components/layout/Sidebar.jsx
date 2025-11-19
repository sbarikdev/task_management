import { useState } from "react";
import {
  VStack,
  Box,
  Link,
  Text,
  useColorModeValue,
  Tooltip,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { FaHome, FaTasks, FaList } from "react-icons/fa";

const navItems = [
  { path: "/", label: "Dashboard", icon: <FaHome /> },
  { path: "/tasks", label: "Tasks", icon: <FaTasks /> },
  { path: "/categories", label: "Categories", icon: <FaList /> },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const bgColor = useColorModeValue("gray.100", "gray.900");

  const sideBarShadow = useColorModeValue(
    "rgba(0, 0, 0, 0.1)",
    "rgba(255, 255, 255, 0.1)"
  );

  const activeColor = useColorModeValue("teal.500", "teal.300");

  return (
    <Box
      pos="fixed"
      h="100vh"
      bg={bgColor}
      p={4}
      pt={4}
      w={isOpen ? 60 : 16}
      transition="width 0.2s"
      overflow="hidden"
      zIndex="overlay"
      boxShadow={`0 1px 2px 0 ${sideBarShadow}`}
    >
      <VStack align="start" spacing={4}>
        {/* Toggle button */}

        <Flex w="full" justify="flex-start" mb={5}>
          <IconButton
            aria-label="Toggle sidebar"
            icon={<HiOutlineMenu />}
            size="sm"
            onClick={toggleSidebar}
          />
          <Text
            fontWeight="bold"
            ml={6}
            display={isOpen ? "block" : "none"}
            fontSize="20px"
            style={{ textWrap: "nowrap" }}
          >
            Task Manager
          </Text>
        </Flex>

        {/* Links */}
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              as={NavLink}
              to={item.path}
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Tooltip label={isOpen ? "" : item.label} placement="right">
                <Flex
                  align="center"
                  p={2}
                  borderRadius="md"
                  bg={isActive ? activeColor : "transparent"}
                  color={isActive ? "white" : undefined}
                  _hover={{ bg: isActive ? activeColor : "gray.300" }}
                  transition="all 0.5s ease"
                >
                  {item.icon}
                  {isOpen && (
                    <Text ml={3} fontWeight={isActive ? "bold" : "normal"}>
                      {item.label}
                    </Text>
                  )}
                </Flex>
              </Tooltip>
            </Link>
          );
        })}
      </VStack>
    </Box>
  );
}
