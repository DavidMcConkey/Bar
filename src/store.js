import appReducer from "./reducers";
import { configureStore, applyMiddleware, compose } from "redux";

import {
  persistCurrentState,
  supportsPersistence,
} from "./utilities/persistence";
import throttle from "lodash/throttle";

import thunk from "redux-thunk";

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middlewares = compose(applyMiddleware(thunk), devtools || ((a) => a));

const store = configureStore(appReducer, middlewares);

if (supportsPersistence()) {
  store.subscribe(
    throttle(() => {
      persistCurrentState(store.getState(), ["bar", "settings", "favourites"]);
    })
  );
}

export default store;