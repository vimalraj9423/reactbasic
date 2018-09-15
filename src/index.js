import App from "./js/components/app.js";
require("./index.scss");

import { Provider } from "react-redux";
import configureStore,{history} from "./js/store/index";
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import React from "react";

import ReactDOM from "react-dom";


const store = configureStore();
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(
  <AppContainer>

    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App  store={store} history={history} />

      </ConnectedRouter>
    </Provider>
  </AppContainer>, wrapper) : false;

if (module.hot) {
  module.hot.accept('./js/components/app', () => {
    const App = require('./js/components/app').default;
    ReactDOM.render( 
        <App store={store} history={history} /> ,
      document.getElementById('app')
    );
  });
}
