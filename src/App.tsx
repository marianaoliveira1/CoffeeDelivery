import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/theme/default"

function App() {
  return (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <h1>ola, mundo</h1>
  </ThemeProvider>
  )
}

export default App
