import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes} from './routes'
import { AuthProvider } from './hooks/auth.tsx';
import { NotesProvider } from './hooks/notes.tsx';

import { GlobalStyle } from './styles/global.ts';
import { ThemeProvider } from 'styled-components';
import theme  from './styles/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AuthProvider>
      <NotesProvider>
        <Routes />
      </NotesProvider>
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
