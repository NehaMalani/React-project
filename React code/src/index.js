import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import configureStore from './store/store';
/**
 * Added by E5CTBU7
 */

ReactDOM.render(
    <Provider store={configureStore()}>
      <BrowserRouter><App /></BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );

serviceWorker.unregister();

