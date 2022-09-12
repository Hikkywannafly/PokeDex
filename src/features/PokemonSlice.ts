import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IPokemon, IPokemonBase } from '../IPokemon';
import fromApi from '../services/fromApi';
import axios from '../services/axios';
export const getPokemonList = createAsyncThunk(
    'pokemon/getAllPokemonList',
    async (paylload, thunkApi) => {
        try {
            const res = await axios(`/pokemon`, {
                params: {
                    limit: 16,
                }
            })

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
        stopLoading(state, action: PayloadAction<any>) {
            state.pokemon = action?.payload;
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPokemonList.pending, state => {
            state.isLoading = true
        })
        builder.addCase(getPokemonList.fulfilled, (state, action: PayloadAction<any>) => {
            const pokemonList = action.payload;
            pokemonList.map((pokemon: IPokemonBase, index: number) => {
                pokemon.id = index + 1;
                return pokemon;
            })
            state.pokemon = pokemonList;
            state.pokemonLength = pokemonList.length;
            state.isLoading = false;
        })
        builder.addCase(getPokemonList.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.isLoading = false
        })
    }

})
// export const { startLoading, stopLoading } = PokemonSlice.actions
export default PokemonSlice.reducer;

