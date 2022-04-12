import React from 'react';
//import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyles from './components/StyledComponents/Global'
import { Provider } from 'react-redux';
import { store } from '../src/components/Redux/store';
import * as ReactDOMClient from 'react-dom/client';
const container = document.getElementById('root');
// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
     <GlobalStyles />
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);
