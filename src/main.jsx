import React from 'react'
import ReactDOM from 'react-dom/client'
import  theme  from './style/theme'
import GlobalStyles from './style/global'
import { ThemeProvider } from 'styled-components'
import { SignIn } from './pages/SignIn'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>,
)
