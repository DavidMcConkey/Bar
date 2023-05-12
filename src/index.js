import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { loadDatabase } from "./util/db.utils";
import { Provider } from "react-redux";
import store from "./store";

async function start() {
  await loadDatabase(store);
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}

start();
