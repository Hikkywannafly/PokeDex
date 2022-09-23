import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { info } from 'console';
import { IPokemonDetail } from '../IPokemon';
import { Stat, Type, Ability, PokemonSpecical, EvolutionChain, Chain, FlavorTextEntrie, Variety, Types } from '../IPokemon';
import axios from '../services/axios';
import Axios from 'axios';
interface PokemonDetail {

    info: {
        id: string;
        name: string;
        weight: string;
        types: Types[];
        stats: Stat[];
        isLoading: boolean;
        error: {
            status: 'OK',
            message: null,
        },
    }
    biology: {
        abilities: Ability[];
        flavor_text_entries: FlavorTextEntrie[];
        evolution_chain: {
            url: string;
        };
        varieties: Variety[];
        nameKankji: string;
        is_baby: boolean;
        is_legendary: boolean;
        is_mythical: boolean;
        generation: string;
        isLoading: boolean;
        error: {
            status: 'OK',
            message: null,
        };
    }
}
const initialState: PokemonDetail = {
    info: {
        id: '',
        name: '',
        weight: '',
        types: [],
        stats: [],
        isLoading: true,
        error: {
            status: 'OK',
            message: null,
        }
    },
    biology: {
        abilities: [],
        flavor_text_entries: [],
        evolution_chain: {
            url: ''
        },
        varieties: [],
        nameKankji: '',
        is_baby: false,
        is_legendary: false,
        is_mythical: false,
        generation: '',
        isLoading: true,
        error: {
            status: 'OK',
            message: null,
        },
    }
}
const initialStateTeamp: PokemonDetail = {
    info: {
        id: '',
        name: '',
        weight: '',
        types: [],
        stats: [],
        isLoading: true,
        error: {
            status: 'OK',
            message: null,
        }
    },
    biology: {
        abilities: [],
        flavor_text_entries: [],
        evolution_chain: {
            url: ''
        },
        varieties: [],
        nameKankji: '',
        is_baby: false,
        is_legendary: false,
        is_mythical: false,
        generation: '',
        isLoading: true,
        error: {
            status: 'OK',
            message: null,
        },
    }
}
export const fetchPokemonData = createAsyncThunk(
    'detail/getPokemon',
    async (pokemon: any, thunkApi) => {
        try {
            const res = await axios(`/pokemon/${pokemon}`);
            thunkApi.dispatch(fetchPokemonBiology(res.data.species.url))
            return res.data;
        }
        catch (err: any) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
)

export const fetchPokemonBiology = createAsyncThunk(
    'detail/getPokemonBiology',
    async (urlSpecial: any, thunkApi) => {
        try {
            const res = await Axios.get(urlSpecial);
            return res.data;
        }
        catch (err: any) {
            return thunkApi.rejectWithValue(err.response.data);
        }
    }
)
const PokemonDetailSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.info.isLoading = true;
            state.biology.isLoading = true;
            // state.evolution.isLoading = true;
        },
        cleanData(state) {
            state.info = initialStateTeamp.info;
            state.biology = initialStateTeamp.biology;
        },
    },
    extraReducers: (builder) => {
        // info pokemon
        builder.addCase(fetchPokemonData.pending, ({ info }: any) => {
            info.isLoading = true;
        })
        builder.addCase(fetchPokemonData.fulfilled, ({ info }: any, { payload }: PayloadAction<any>) => {
            // info.id = payload.data.id;
            // info.id = payload.data.id;
            info.id = payload.id;
            info.name = payload.name;
            info.weight = payload.weight;
            // info.types = payload.types;
            payload.types.map((index: any) => {
                info.types.push(index.type.name);
            })
            info.stats = payload.stats;
            info.isLoading = false
        })
        builder.addCase(fetchPokemonData.rejected, ({ info }: any, { payload }: PayloadAction<any>) => {
            // update error
            info.error.status = payload.status
            info.error.message = payload.data
        })
        // biology pokemon
        builder.addCase(fetchPokemonBiology.pending, ({ biology }: any, { payload }: PayloadAction<any>) => {
            biology.isLoading = true;
        })
        builder.addCase(fetchPokemonBiology.fulfilled, ({ biology }: any, { payload }: PayloadAction<any>) => {
            biology.abilities = payload.abilities;
            biology.flavor_text_entries = payload.flavor_text_entries;
            biology.evolution_chain = payload.evolution_chain;
            biology.varieties = payload.varieties;
            biology.nameKankji = payload.names[0].name;
            biology.is_baby = payload.is_baby;
            biology.is_legendary = payload.is_legendary;
            biology.is_mythical = payload.is_mythical;
            biology.generation = payload.generation;
            biology.isLoading = false;
        })
        builder.addCase(fetchPokemonBiology.rejected, ({ biology }: any, { payload }: PayloadAction<any>) => {
            biology.error.status = payload.status
            biology.error.message = payload.data
        })
    }
})
export const { startLoading, cleanData } = PokemonDetailSlice.actions
export default PokemonDetailSlice.reducer;
