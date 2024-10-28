import { combineReducers } from "@reduxjs/toolkit";
import charactersApi from "../services/characters";

const reducer = combineReducers({
  [charactersApi.reducerPath]: charactersApi.reducer,
});
export default reducer;
