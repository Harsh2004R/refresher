import { Flex, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Navigator() {
  const navItems = [
    { page: "Home", link: "/" },
    { page: "Products", link: "/products" },
    { page: "Login", link: "/login" },
    { page: "Signup", link: "/signup" },
  ];

  return (
    <Box w="100%" minH="60px" borderBottom="1px solid #969696cd">
      <Flex w="100%" h="60px" align="center" justify="space-around">
        <Box flex="1"></Box>
        {navItems.map((item, index) => (
          <Link key={index} to={item.link}>
            {" "}
            <Box
              px="20px"
              py="8px"
              // border="1px solid lime"
              borderRadius="8px"
              cursor="pointer"
              _hover={{
                // bg: "lime",
                color: "#3592de",
                transition: "0.3s",
              }}
            >
              <Text fontWeight="600">{item.page}</Text>
            </Box>
          </Link>
        ))}
      </Flex>
    </Box>
  );
}

export default Navigator;
