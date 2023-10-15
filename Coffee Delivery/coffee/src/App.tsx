import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'


import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { OrderFormContextProvider } from './contexts/OrderFormContext'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <OrderFormContextProvider>
          <Router />
        </OrderFormContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

