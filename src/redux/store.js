import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import signUpReducers from "./SignUpReducers";
import { accountSetupReducers } from "./reducers";
import { linkedReducers, linkedLoginNextReducers } from "./reducers";

const rootReducer = combineReducers({
  signUpReducers,
  accountSetupReducers,
  linkedReducers,
  linkedLoginNextReducers,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
