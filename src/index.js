import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import todosReducer from './reducers/todos.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import typo from 'redux-typo';
import actionTypes from './actions/types';

let store = createStore( combineReducers({
  todos: todosReducer
}), composeWithDevTools(applyMiddleware(thunk, typo(actionTypes))) );

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, document.getElementById('root')
);

registerServiceWorker();