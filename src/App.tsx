import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { extendedTheme } from './theme/theme';
import { Routes } from './routes/routes';

export default function App() {
  return (
    <ChakraProvider theme={extendedTheme}>
      <Router>
        <Routes />
      </Router>
    </ChakraProvider>
  );
}
