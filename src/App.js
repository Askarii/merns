import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './views/auth/Login'
import Register from './views/auth/Register'

import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import Landing from './components/layout/Landing'
const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#1C2833",
      light: "#34495E",
      dark:  "#34495E"
    },
    secondary: {
      main: "#85929E",
      dark: "#5D6D7E",
      light: "#EBEDEF"
    }
  },
  typography: {
    allVariants: {
      color: "#E5E8E8",
      fontFamily: "cursive"
    }
  },
})

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Landing>
          <Switch>
            <Route path="/" exact  />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Landing>
      </Router>
      <CssBaseline/>
    </ThemeProvider>
  )
}

export default App
