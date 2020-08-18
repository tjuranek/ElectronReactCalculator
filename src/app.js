import React from 'react';
import { ThemeProvider } from 'emotion-theming'
import { theme } from './theme';
import Typography from './components/typography';
import Button from './components/button';
import Calculator from './containers/calculator';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography color="" size="" text="2048" />
      <Button text="mybutton"></Button>
      {/* <Calculator /> */}
    </ThemeProvider>
  )
};

export default App;
