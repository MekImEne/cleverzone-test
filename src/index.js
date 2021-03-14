import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './store';
import HttpsRedirect from 'react-https-redirect';
import ScrollToTop from "./utils/scrollToTop";

ReactDOM.render(
  <Provider store={store}>
    <HttpsRedirect>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </HttpsRedirect>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
