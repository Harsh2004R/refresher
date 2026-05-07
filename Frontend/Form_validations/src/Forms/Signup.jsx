import { Center, Box, Text, Input, Field, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = (data) => {
    const formatedData = {
      ...data,
      phone: Number(data.phone),
    };
    console.log(formatedData);
  };

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
        <form onSubmit={handleSubmit(handleSignup)}>
          <Field.Root required>
            <Field.Label color="#000">
              First Name <Field.RequiredIndicator></Field.RequiredIndicator>
            </Field.Label>
            <Input
              {...register("first_name", {
                required: "first_name must required",
              })}
              color={"#000"}
              placeholder="First name"
              type="text"
              w="100%"
            />

            <Field.Label color="#000">
              Last Name<Field.RequiredIndicator></Field.RequiredIndicator>
            </Field.Label>
            <Input
              {...register("last_name", {
                required: "email must required",
              })}
              color={"#000"}
              placeholder="Last name"
              type="text"
              w="100%"
            />

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
              Phone <Field.RequiredIndicator></Field.RequiredIndicator>
            </Field.Label>
            <Input
              {...register("phone", {
                required: "phone number must required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be exactly 10 digits",
                },
              })}
              color={"#000"}
              placeholder="Enter your mail"
              type="number"
              w="100%"
            />
            <Text fontSize="10px" color={"#eba626"}>
              {" "}
              {errors.phone?.message}
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

export default Signup;
