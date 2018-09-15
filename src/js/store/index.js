// src/js/store/index.js
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from "../reducers/index";
import {  routerMiddleware } from "react-router-redux";

import createHistory from 'history/createBrowserHistory';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
export const history = createHistory();

function getstore(){
    const reactRouterMiddleware = routerMiddleware(history);
    const middlewares = [
      // Add other middleware on this line...
  
      // thunk middleware can also accept an extra argument to be passed to each thunk action
      // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
      thunk,
      reactRouterMiddleware,
      reduxImmutableStateInvariant()
    ];
    const store=createStore(
        rootReducer, // new root reducer with router state 
       compose(
         applyMiddleware(
          ...middlewares
         ),
       ));
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }
    return store;
}
const configureStore = getstore;
export default configureStore;
