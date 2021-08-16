import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./root-reducer";

const configureStore = (initialState: any) => {
  const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

  const store = createStore(rootReducer, initialState, composeEnhancers);
  return store;
};

export default configureStore;
export * from "./root-reducer";
