import React from 'react';
// import { useSelector } from 'react-redux';
import { RouteProps } from 'react-router';

// import { Reducers } from '../../redux/store';
import { ThemeButton } from '../../components/theme-button/ThemeButton';
import { Tag, Center, Flex, Heading, Stack, useColorMode } from '@chakra-ui/react';

export function Home(props: RouteProps) {
  const { colorMode } = useColorMode();
  // const config = useSelector((state: Reducers) => state.config);

  // const style = config.theme === 'dark' ? { color: '#ffffff', backgroundColor: '#000000' } : {};

  return (
    <Center width="100vw" height="100vh" position="relative">
      <Stack spacing={6} align="center">
        <Heading as="h1" size="xl" children="Home" />
        <Flex>
          current theme is <Tag ml={1}>{colorMode}</Tag>
        </Flex>
        <ThemeButton color={colorMode === 'dark' ? 'white' : 'black'} />
      </Stack>
    </Center>
  );
}
