import React from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import Navigator from "./Navigator.jsx";

function Home() {
  return (
    <>
      <Navigator />
      <Center w="100%" minH="100vh" bg="#000">
        <Text fontSize={"4xl"} color="#fff">
          Home
        </Text>
      </Center>
    </>
  );
}

export default Home;
