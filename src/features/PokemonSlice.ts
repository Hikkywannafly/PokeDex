import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IPokemon, IPokemonBase } from '../IPokemon';
import fromApi from '../services/fromApi';
import axios from '../services/axios';
export const getPokemonList = createAsyncThunk(
    'pokemon/getAllPokemonList',
    async (paylload, thunkApi) => {
        try {
            const res = await axios(`/pokemon`, {
                params: {
                    limit: 6,
                    offset: 0,
                }
            });
            console.log(res.data.results)
            return res.data.results;
        }
        catch (err: any) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
);
interface PokemonState {
    isLoading: boolean;
    pokemon: IPokemon[];
    pokemonLength: number;
    error: any;
}
const initialState: PokemonState = {
    isLoading: true,
    pokemon: [],
    pokemonLength: 0,
    error: null,
}
const PokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        startLoading(state) {
            state.isLoading = true;
            state.error = null;
        },
        stopLoading(state, action) {
            state.pokemon = action.payload;
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPokemonList.pending, state => {
            state.isLoading = true
        })
        builder.addCase(getPokemonList.fulfilled, (state, action) => {
            state.pokemon = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getPokemonList.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false
        })
    }

})

export default PokemonSlice.reducer;

