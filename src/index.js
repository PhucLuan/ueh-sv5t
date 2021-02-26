import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './components/Footer/Footer';
import reportWebVitals from './reportWebVitals';
//Store
import { createStore } from "redux";
import myReducer from "./redux/reducers/index";
import { Provider } from 'react-redux';
const store = createStore(myReducer);

ReactDOM.render(
  <Provider store = { store }>
    <App />
    <Footer></Footer>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
