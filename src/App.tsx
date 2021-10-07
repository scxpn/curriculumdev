import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./contexts/UserContext";
import Routes from "./routes";

const theme = {
  styles: {
    global: {
      "html, body": {
        width: "100vw",
        height: "100vh",
      },
    },
  },
};

function App() {
  return (
    <ChakraProvider>
      <UserProvider>
        <Routes />
      </UserProvider>
    </ChakraProvider>
  );
}

export default App;
