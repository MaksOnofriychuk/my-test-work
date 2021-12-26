import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import alertReducer from "./alertReducer";
import ticketsReducer from "./ticketsReducer";

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  alert: alertReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
