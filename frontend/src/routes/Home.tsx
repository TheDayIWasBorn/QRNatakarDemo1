import React from "react";
import { Button, Center, Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Center width="100%" height="100%" position="relative">
      <Stack direction="column" spacing="48px" align="center">
        <Heading children="QR Natakar" />
        <Stack direction="row" spacing="24px">
          <Link to="/menu">
            <Button
              colorScheme="orange"
              variant="outline"
              width="150px"
              children="Menu"
            />
          </Link>
          <Link to="/notifications">
            <Button
              colorScheme="teal"
              variant="outline"
              width="150px"
              children="Notifications"
            />
          </Link>
        </Stack>
      </Stack>
    </Center>
  );
}
