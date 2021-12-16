import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >

      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.200"
        padding="8" 
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="5">
          <Input name="email" label="E-mail" type="email" />
          <Input name="password" label="Password" type="password" />
        </Stack>

        <Button type="submit" marginTop="4" colorScheme="blue" size="lg">Submit</Button>

      </Flex>

    </Flex>
  );
}