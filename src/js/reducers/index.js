import User from "./user";
import { combineReducers } from 'redux';
const defaultState= combineReducers({
    user :User
});
const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
      state = undefined;
    }
    return defaultState(state, action);
  };
  export default rootReducer;