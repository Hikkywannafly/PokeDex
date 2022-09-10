import { combineReducers } from "redux";

import pokemonSlice from "./pokemonSlice";

const reducer = combineReducers({
    pokemon: pokemonSlice,
})
export default reducer;