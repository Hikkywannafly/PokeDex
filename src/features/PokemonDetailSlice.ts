import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IPokemonDetail } from '../IPokemon';
import axios from '../services/axios'
const initialState = {
    biology: {
        data: {},
        isLoading: true,
        error: {
            status: 'OK',
            message: null,
        },
    },
    info: {
        data: {},
        isLoading: true,
        error: {
            status: 'OK',
            message: null,
        },
    },
    evolution: {
        data: {},
        isLoading: true,
        error: {
            status: 'OK',
            message: null,
        },
    },
}

const getPokemon = createAsyncThunk(
    'pokemon/getPokemon',
    async (payload, thunkApi) => {
        try {
            const res = await axios(`/pokemon/${payload}`)
            return res.data;
        }
        catch (err: any) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
)
const getPokemonSpecies = createAsyncThunk(
    `pokemon/getPokemonSpecies`,
    async (payload, thunkApi) => {

    }
)
const PokemonDetailSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPokemon.fulfilled, (state, action: PayloadAction<IPokemonDetail>) => {
            state.info.data = action.payload;
            state.info.isLoading = false;
        })
    }
})
