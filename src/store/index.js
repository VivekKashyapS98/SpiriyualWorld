import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

/*
Uncomment the commented code to activate the Redux extension.
Make sure that the Redux extension is installed in your browser.
IMPORTANT: Whan the redux extension is activated, the site doesn't work on Mobile devices.
*/
export function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk)
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
}
