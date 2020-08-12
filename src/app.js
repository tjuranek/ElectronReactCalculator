import React from 'react';
import { ThemeProvider } from 'emotion-theming'
import { theme } from './theme';
import Typography from './components/Typography';
import Button from './components/Button';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography color="" size="" text="2048" />
      <Button text="mybutton"></Button>
    </ThemeProvider>
  )
};

export default App;
