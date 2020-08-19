import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './theme';
import { Calculator } from './containers/calculator';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Calculator />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
