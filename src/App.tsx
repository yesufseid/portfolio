
import { RouterProvider } from "react-router-dom"
import router from "./utils/router"
import { ThemeProvider,createTheme } from "@material-ui/core"
import { lime, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: lime,
    secondary: purple,
  },
});


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider> 
    </>
  )
}

export default App