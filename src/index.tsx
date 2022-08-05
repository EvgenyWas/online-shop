import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { client } from './graphql/client';
import App from './App';
import GlobalStyles from './styles/global';
import { baseTheme } from './styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={baseTheme} >
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);