import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';
import './App.css';

import Home from './pages/Home';
import Details from './pages/Details';
import store from './store';
import theme from './theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/movie/:id">
              <Details />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
