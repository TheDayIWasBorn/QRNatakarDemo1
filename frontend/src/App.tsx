import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Box,
  ChakraProvider,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { extendedTheme } from "./theme/theme";

// Routes
import { Home } from "./routes/Home";
import { Menu } from "./routes/Menu";
import { Notifications } from "./routes/Notifications";

function ThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      variant="ghost"
      colorScheme="teal"
      aria-label="Send email"
      icon={colorMode == "dark" ? <SunIcon color="yellow.100" /> : <MoonIcon />}
      position="absolute"
      top={2}
      right={2}
      zIndex={999}
      onClick={() => toggleColorMode()}
    />
  );
}

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/notifications" component={Notifications} />
    </Switch>
  );
}

export default function App() {
  return (
    <ChakraProvider theme={extendedTheme}>
      <Router>
        <Box width="100vw" height="100vh" position="relative">
          <ThemeButton />
          <Routes />
        </Box>
      </Router>
    </ChakraProvider>
  );
}
