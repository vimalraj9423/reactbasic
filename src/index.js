import App from "./js/components/app.js";
require("./index.scss");

import { Provider } from "react-redux";
import configureStore,{history} from "./js/store/index";
import { ConnectedRouter } from 'react-router-redux';
import { hot } from 'react-hot-loader';
import React from "react";

import ReactDOM from "react-dom";


const store = configureStore();
const wrapper = document.getElementById("create-article-form");

ReactDOM.render( 

    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App  store={store} history={history} />

      </ConnectedRouter>
    </Provider> , wrapper) ;
