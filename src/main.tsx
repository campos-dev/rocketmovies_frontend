import React from 'react'
import ReactDOM from 'react-dom/client'
import {Details} from './pages/Details'

import { GlobalStyle } from './styles/global.ts';
import { ThemeProvider } from 'styled-components';
import theme  from './styles/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
