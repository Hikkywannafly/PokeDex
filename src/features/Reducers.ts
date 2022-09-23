import { combineReducers } from 'redux'
import PokemonSlice from "./PokemonSlice";
import PokemonDetailSlice from "./PokemonDetailSlice";

export const rootReducer = combineReducers({
    home: PokemonSlice,
    detail: PokemonDetailSlice,
})