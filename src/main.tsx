import React from 'react'
import ReactDOM from 'react-dom/client'
import {Profile} from './pages/Profile/index.tsx'

import { GlobalStyle } from './styles/global.ts';
import { ThemeProvider } from 'styled-components';
import theme  from './styles/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <Profile />
    </ThemeProvider>
  </React.StrictMode>,
)
