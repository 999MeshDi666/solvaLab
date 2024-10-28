import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
  TypedUseSelectorHook,
} from "react-redux";
import charactersApi from "../services/characters";
import starshipsApi from "../services/starships";
import planetsApi from "../services/planets";

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      charactersApi.middleware,
      starshipsApi.middleware,
      planetsApi.middleware
    ),
});

export type RootState = ReturnType<typeof reducer>;

export type AppDispatch = typeof store.dispatch;

const { dispatch } = store;

const useDispatch = () => useAppDispatch<AppDispatch>();
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export { store, dispatch, useSelector, useDispatch };
