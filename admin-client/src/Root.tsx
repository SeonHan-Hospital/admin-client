import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./styles/theme";

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

export default Root;
