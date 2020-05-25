import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reducer from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import 'todomvc-app-css/index.css'

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
