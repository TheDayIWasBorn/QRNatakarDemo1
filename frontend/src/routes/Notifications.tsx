import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Flex, Heading, Text, useToast } from "@chakra-ui/react";
import { io } from "socket.io-client";

export function Notifications(props: RouteComponentProps<any>) {
  const toast = useToast();
  const id = new URLSearchParams(props.location.search).get("id");

  React.useEffect(() => {
    const socket = io("http://localhost:4000", {
      path: "/notifications",
    });

    socket.on("connect_error", (err: any) => console.log(`Connection error: \n${err}`));

    socket.on("notify", (notification) => {
      toast({
        title: `New notification for "${notification.id}"`,
        description: notification.message,
        status: notification.id == id ? "success" : "error",
        position: "top-left",
        duration: 5000,
        isClosable: true,
      });
    });

    socket.emit("notification", { id, message: "asdasd" });
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
      <Heading children="Notifications" />
      <Text mt="6" mb="12" fontSize="lg" children={`ID: ${id}`} />
    </Flex>
  );
}
