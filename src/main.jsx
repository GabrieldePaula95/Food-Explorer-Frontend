import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from "./styles/global"

import theme from "./styles/theme"

import { Home } from './pages/Home/';
import { Dishes } from './pages/Dishes/';
import { Menu } from './pages/Menu/';
import { NewDishes } from './pages/NewDishes'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NewDishes />
    </ThemeProvider>
  </React.StrictMode>,
)
