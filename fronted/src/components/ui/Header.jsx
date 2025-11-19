import { Text } from "@chakra-ui/react";

const Header = ({ title }) => {
  return (
    <Text fontSize="2xl" fontWeight="bold" mb={8}>
      {title}
    </Text>
  );
};

export default Header;
