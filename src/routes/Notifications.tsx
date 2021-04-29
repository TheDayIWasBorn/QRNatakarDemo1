import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Flex, Heading, Text } from "@chakra-ui/react";

export function Notifications(props: RouteComponentProps<any>) {
  const id = new URLSearchParams(props.location.search).get("id");

  return (
    <Flex direction="column" w="100%" h="100%" position="relative" align="center" pt="50px">
      <Heading children="Notifications" />
      <Text mt="6" fontSize="lg" children={`ID: ${id}`} />
    </Flex>
  );
}
