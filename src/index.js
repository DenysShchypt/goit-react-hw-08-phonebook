import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    grey: 'grey',
    blue: 'blue',
    white: 'white',
    black: 'black',
    error: 'red',
  },
  spacing: value => `${value * 2}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <App />
              <GlobalStyle />
            </BrowserRouter>
          </PersistGate>
        </ThemeProvider>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
