import FormContainer from "./js/components/container/FormContainer";
require("./index.scss");
 
import { Provider } from "react-redux"; 
import configureStore from "./js/store/index";
import React, { Component } from "react";

import ReactDOM from "react-dom";
const store = configureStore; 
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(
    <Provider store={store}>
    <FormContainer    />
  </Provider>, wrapper) : false;