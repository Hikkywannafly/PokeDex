export interface IPokemon {
    id: number;
    name: string;
    type: string[];
}
export interface IPokemonDetail {
    id: number;
    name: string;
    type: string[];
}
export interface IPokemonBase {
    id: number;
    name: string;
    url: string;
}
export interface IPokemonState {
    payload: IPokemon[];

}
export interface Stat {
    base_stat: number;
    stat: {
        name: string;
    };
}

export interface Type {
    slot: number;
    type: {
        name: string;
    };
}
export interface Types {
    type: string;
}
export interface Ability {
    ability: {
        name: string;
    };
    is_hidden: boolean;
}

export interface PokemonSpecical {
    flavor_text_entries: FlavorTextEntrie[];
    evolution_chain: {
        url: string;
    };
    varieties: Variety[];
}

export interface EvolutionChain {
    chain: Chain;
}

export interface Chain {
    evolves_to: Array<Chain>;
    species: {
        name: string;
        url: string;
    };
}

export interface FlavorTextEntrie {
    flavor_text: string;
    language: {
        name: string;
    };
}

export interface Variety {
    pokemon: {
        name: string;
        url: string;
    };
}

export interface PokemonName {

}