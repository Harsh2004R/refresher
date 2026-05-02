import React from "react";
import { useForm } from "react-hook-form";
import { Box, Center, Text, Input, Field, Button } from "@chakra-ui/react";
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <Center flexDirection={"column"} w="100%" minH="100vh">
      <Text p="15px" color="wheat" textAlign={"center"} fontSize={"2xl"}>
        Form Validation
      </Text>
      <Center
        minW="50%"
        minH="70vh"
        p="5"
        borderRadius={"lg"}
        flexDirection={"column"}
        border={"1px solid #888798"}
      >
        <form onSubmit={handleSubmit(handleForm)}>
          <Field.Root required>
            <Field.Label>First Name</Field.Label>
            <Input
              {...register("firstName", {
                required: "First Name Must Required",
              })}
              minW="100%"
              m="0.5rem"
              placeholder="Your irst Name"
            />

            <Field.Label>Last Name</Field.Label>
            <Input
              {...register("lastName", { required: "Last Name Must Required" })}
              minW="100%"
              m="0.5rem"
              placeholder="Your Last Name"
            />

            <Field.Label>
              Email<Field.RequiredIndicator></Field.RequiredIndicator>
            </Field.Label>
            <Field.HelperText>We'll never share your email.</Field.HelperText>
            <Input
              {...register("email", {
                required: "Email Must Required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
              minW="100%"
              m="0.5rem"
              placeholder="Your Email"
            />
            <p>{errors.email?.message}</p>
            <Field.Label>Phone</Field.Label>
            <Input
              minW="100%"
              m="0.5rem"
              {...register("phone", { required: "Phone Number Must Required" })}
              type="number"
              placeholder="Your Phone Number"
            />

            <Field.Label>
              Password<Field.RequiredIndicator></Field.RequiredIndicator>{" "}
            </Field.Label>
            <Input
              type="password"
              {...register("password", {
                required: "Password Field van't be empty ...",
              })}
              minW="100%"
              m="0.5rem"
              placeholder="Enter Strong Password"
            />
            <p>{errors.password?.message}</p>
          </Field.Root>

          <Button
            bgColor={"wheat"}
            color="#000"
            minW="80px"
            h="35px"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Center>
    </Center>
  );
}

export default App;
