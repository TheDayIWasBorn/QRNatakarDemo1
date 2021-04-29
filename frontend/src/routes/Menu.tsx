import React from "react";
import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from "@chakra-ui/react";
import { io, Socket } from "socket.io-client";

export function Menu() {
  const [id, setId] = React.useState<string>();
  const [message, setMessage] = React.useState<string>();
  const [socket, setSocket] = React.useState<Socket>();

  React.useEffect(() => {
    const socket = io("http://localhost:4000", {
      path: "/notifications",
    });

    socket.on("connect_error", (err: any) =>
      console.log(`Connection error: \n${err}`)
    );

    setSocket(socket);
  }, []);

  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      position="relative"
      align="center"
      pt="50px"
    >
      <Heading children="Menu" />
      <Flex
        mt="12"
        paddingX="12"
        direction="row"
        justifyContent="space-between"
        width="100%"
        alignItems="center"
        height="fit-content"
        position="relative"
      >
        <Stack
          mr="12"
          direction="column"
          spacing="12px"
          width="100%"
          height="fit-content"
        >
          <InputGroup width="100%">
            <InputLeftAddon children="ID" />
            <Input
              width="100%"
              type="text"
              placeholder="Enter ID"
              onChange={(e) => setId(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Message" />
            <Input
              type="text"
              placeholder="Enter Message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </InputGroup>
        </Stack>
        <Button
          height="100%"
          width="100px"
          onClick={() => socket?.emit("notification", { id, message })}
          children="Send"
        />
      </Flex>
    </Flex>
  );
}
