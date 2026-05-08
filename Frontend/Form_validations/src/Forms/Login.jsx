import React from "react";
import { Center, Box, Text, Input, Field, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../Redux/Features/authSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, user } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      const res = await dispatch(loginRequest({data, navigate})).unwrap();
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: res.token,
        
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(user.token)

  if (isLoading) {
    return (
      <Center w="1005" h="50vh" bg="grey">
        <Text color={"#fff"}>Loading...</Text>
      </Center>
    );
  }
  return (
    <Center flexDirection={"column"} w="100%" h="100vh" bg="#ebebeb">
      <Text textAlign={"center"} color="#000" fontSize="3xl">
        Login
      </Text>
      <Box
        p={{ base: "2", md: "4", lg: "6" }}
        w={{ base: "95%", md: "40%", lg: "35%" }}
        // minH="70vh"
        borderRadius={"md"}
        border={"0.5px solid #cbcbcbaa"}
      >
        <form onSubmit={handleSubmit(handleLogin)}>
          <Field.Root required>
            <Field.Label color="#000">
              Email <Field.RequiredIndicator></Field.RequiredIndicator>
            </Field.Label>
            <Input
              {...register("email", {
                required: "email must required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid Email Address...",
                },
              })}
              color={"#000"}
              placeholder="Enter your mail"
              type="text"
              w="100%"
            />
            <Text fontSize="10px" color={"#eba626"}>
              {" "}
              {errors.email?.message}
            </Text>
            <Field.Label color="#000">
              Password <Field.RequiredIndicator></Field.RequiredIndicator>
            </Field.Label>
            <Input
              {...register("password", {
                required: "password must required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                  message:
                    "Password must inclue 1 lower case 1 upper case and atleast length of 6-8 characters...",
                },
              })}
              placeholder="Enter your password"
              color={"#000"}
              type="password"
              w="100%"
            />
            <Text fontSize="10px" color={"#eba626"}>
              {errors.password?.message}
            </Text>
          </Field.Root>

          <Button
            type="submit"
            mt="20px"
            mb="20px"
            w="100%"
            bgColor="#38a0ea"
            color="#fff"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Center>
  );
}

export default Login;
