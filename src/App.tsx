import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Home, List } from "@pages";
import theme from "./theme/index";
import { Provider } from "react-redux";
import { store } from "@store";

export function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}
