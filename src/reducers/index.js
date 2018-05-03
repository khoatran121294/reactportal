import { combineReducers } from "redux";
import demoReducer from "./demo.reducer";
import localeReducer from "./locale.reducer";

export default combineReducers({
  demo: demoReducer,
  locale: localeReducer
});
