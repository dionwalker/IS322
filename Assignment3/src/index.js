import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
//import App from './components/App';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
 rootElement
);

//ReactDOM.render(<App />,document.getElementById('root'));