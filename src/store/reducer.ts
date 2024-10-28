import { combineReducers } from "@reduxjs/toolkit";
import charactersApi from "../services/characters";
import starshipsApi from "../services/starships";
import planetsApi from "../services/planets";

const reducer = combineReducers({
  [charactersApi.reducerPath]: charactersApi.reducer,
  [planetsApi.reducerPath]: planetsApi.reducer,
  [starshipsApi.reducerPath]: starshipsApi.reducer,
});
export default reducer;
