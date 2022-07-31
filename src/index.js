
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'
import axios from 'axios';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"

ReactDOM.render(

<Provider store={store}>
    <App />
  </Provider>
, document.querySelector('#root'));
    