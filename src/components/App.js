import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { injectGlobal, ThemeProvider } from 'styled-components';
import { HomePage, SearchListDetail } from 'components';
import theme from './themes/default';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/items" component={HomePage} exact />
        <Route path="/items/:id/:desc" component={SearchListDetail} exact />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
