import getApi from "../services/fromAxios";
import { IPokemon, IPokemonBase } from "../IPokemon";

import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter
} from "@reduxjs/toolkit";
interface IPokemonState {
    isLoading: boolean;
    pokemon: IPokemon[];
    pokemonLength: number;
    error: string;
}
interface MyKnownError {
    errorMessage: string
    // ...
}
interface MyData {
    isLoading: true,
  }
const NUMBER_LIMIT = 1000;
// entity adapter
const pokemonAdapter = createEntityAdapter();
// initial state
const initialState = pokemonAdapter.getInitialState({
    isLoading: true,
    pokemon: [{} as IPokemon],
    pokemonLength: 0,
    error: {
        status: true,
        message: null
    } as any
})

// thunk func get pokemon
export const getAllPokemonList = createAsyncThunk<
// Return type of the payload creator
MyData,
// First argument to the payload creator
IPokemonState,
// Types for ThunkAPI
{
  extra: {
    jwt: string
  }
  rejectValue: MyKnownError
}
>(
    'pokemon/getAllPokemonList',
    async (payload, { rejectWithValue  })  => {
        const tempArr: any[] = [];
        try {
            const res = await getApi('/pokemon', {
                params: {
                    limit: NUMBER_LIMIT
                },
            })
            await res.data.results.forEach(async (pokemon: IPokemonBase) => {
                const results = await getApi.get(`pokemon/${pokemon.name}`)
                tempArr.push({
                    id: results.data.id,
                    name: pokemon.name,
                    type: results.data.types.map((type: any) => type.type.name),
                })
            })
            return tempArr;
        }
        catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
)
// create silce
const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        startLoading(state) {
            state.isLoading = true;
            state.error = {
                status: false,
                message: null
            }
        },
        stopLoading(state) {
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllPokemonList.pending, state => {
            state.isLoading = true
        })
        builder.addCase(getAllPokemonList.fulfilled, (state, action) => {
            state.pokemon = action.payload;
            state.pokemonLength = action.payload.length;
            state.isLoading = false;
        })
        builder.addCase(getAllPokemonList.rejected, (state, action) => {
            state.error.status = action.payload
            state.error.message = action.payload
            state.isLoading = false
        })
    }

});
export const { startLoading, stopLoading } = pokemonSlice.actions;
export default pokemonSlice.reducer;