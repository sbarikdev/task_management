import {
  Flex,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header() {

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");
  const headerShadow = useColorModeValue(
    "rgba(0, 0, 0, 0.1)",
    "rgba(255, 255, 255, 0.1)"
  );

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      w="full"
      h="16"
      px={4}
      boxShadow={`0 1px 2px 0 ${headerShadow}`}
      bgColor={bg}
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Spacer />

      <Flex align="center" gap={2}>
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          variant="ghost"
        />
      </Flex>
    </Flex>
  );
}
