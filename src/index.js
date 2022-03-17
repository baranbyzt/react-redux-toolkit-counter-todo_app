import React from 'react';
import ReactDOM from 'react-dom';
import './styles/GeneralStyle.css'
import App from './App';

// our redux files
import {Provider} from 'react-redux'
import store from './redux/Store'

ReactDOM.render(
  <React.StrictMode>
<Provider store={store}>
<App />
</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

