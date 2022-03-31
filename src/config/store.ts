import { createStore, applyMiddleware, compose, Middleware } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer, { getInitialState } from "../modules";

const configureStore = () => {
  const initialState = getInitialState();
  const middleware: Middleware[] = [thunk];

  // if (process.env.DEPLOY_ENV === "development") {
  middleware.push(logger);
  // }

  const composeEnhancers =
    // (process.env.DEPLOY_ENV === "development" &&
    (typeof window !== "undefined" &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
};

export default configureStore;
