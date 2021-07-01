import { combineReducers } from "redux";
import counterReducer from "../app/features/counterSlice";

const injectedReducers = {
  counters: counterReducer,
};

const rootReducer = combineReducers({
  ...injectedReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createReducer = () => rootReducer;
