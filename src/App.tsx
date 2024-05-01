import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./global";
import { defaultTheme } from "./styles/themes/default";
import { Home } from "./pages/Home";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}
