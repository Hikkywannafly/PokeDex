import { configureStore } from "@reduxjs/toolkit";

import PokemonSlice from "./PokemonSlice";

const store = configureStore({
    reducer: PokemonSlice,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;