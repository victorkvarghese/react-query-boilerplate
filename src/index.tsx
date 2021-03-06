import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { AppQueryClient } from './services/clients/query-client';

import reportWebVitals from './reportWebVitals';
import './index.css';
import { ChakraAppTheme } from './assets/theme/chakra-theme';

import Welcome from './pages/welcome';
import Docs from './pages/docs';
import About from './pages/about';

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={AppQueryClient}>
      <ChakraProvider theme={ChakraAppTheme}>
        <Router>
          <Switch>
            <Route path="/docs" component={Docs} />
            <Route path="/about" component={About} />
            <Route exact path="/" component={Welcome} />
          </Switch>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
