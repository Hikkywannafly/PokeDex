import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IPokemonDetail } from '../IPokemon';

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
