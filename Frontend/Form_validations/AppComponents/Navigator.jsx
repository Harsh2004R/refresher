import { Flex, Box, Text } from "@chakra-ui/react";

function Navigator() {
  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <Box w="100%" minH="60px" borderBottom="1px solid #969696cd">
      <Flex
        w="100%"
        h="60px"
        align="center"
        justify="space-around"
      >
        <Box flex="1">

        </Box>
        {navItems.map((item, index) => (
          <Box
            key={index}
            px="20px"
            py="8px"
            // border="1px solid lime"
            borderRadius="8px"
            cursor="pointer"
            _hover={{
              bg: "lime",
              color: "black",
              transition: "0.3s",
            }}
          >
            <Text fontWeight="600">{item}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default Navigator;