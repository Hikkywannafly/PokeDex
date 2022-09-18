export const typeColors = {
    normal: '#BCBCAC',
    fighting: '#BC5442',
    flying: '#669AFF',
    poison: '#AB549A',
    ground: '#DEBC54',
    rock: '#BCAC66',
    bug: '#ABBC1C',
    ghost: '#6666BC',
    steel: '#ABACBC',
    fire: '#FF421C',
    water: '#2F9AFF',
    grass: '#78CD54',
    electric: '#FFCD30',
    psychic: '#FF549A',
    ice: '#78DEFF',
    dragon: '#7866EF',
    dark: '#785442',
    fairy: '#FFACFF',
    shadow: '#0E2E4C'
};
export const backgroundColor = {
    normal: '#dcdcdc',
    fighting: '#da7589',
    flying: '#bbc9e4',
    poison: '#d6a2e4',
    ground: '#e69a74',
    rock: '#C9BB8A',
    bug: '#bae05f',
    ghost: '#8291e0',
    steel: '#9fb8b9',
    fire: '#ff8383',
    water: '#8cc4e2',
    grass: '#a8ff98',
    electric: '#ffe662',
    psychic: '#ffa5da',
    ice: '#8cf5e4',
    dragon: '#88a2e8',
    dark: '#8e8c94',
    fairy: '#fdb9e9',
    shadow: '#0E2E4C'
    // box-shadow: rgb(251 108 108) 0px 0px 1.25rem 0px;

};

export enum HTTP_METHODS {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
}

export const PokemonGenerationsEnum = {
    GENERATION_1: "151",
    GENERATION_2: "251",
    GENERATION_3: "386",
    GENERATION_4: "494",
    GENERATION_5: "649",
    GENERATION_6: "721",
    GENERATION_7: "809",
}

export const PokemonGenerations = [
    {
        name: "All",
        value: "null",
    },
    {
        name: "Generation 1",
        value: PokemonGenerationsEnum.GENERATION_1
    },
    {
        name: "Generation 2",
        value: PokemonGenerationsEnum.GENERATION_2
    },
    {
        name: "Generation 3",
        value: PokemonGenerationsEnum.GENERATION_3
    },
    {
        name: "Generation 4",
        value: PokemonGenerationsEnum.GENERATION_4
    },
    {
        name: "Generation 5",
        value: PokemonGenerationsEnum.GENERATION_5
    },
    {
        name: "Generation 6",
        value: PokemonGenerationsEnum.GENERATION_6
    },
    {
        name: "Generation 7",
        value: PokemonGenerationsEnum.GENERATION_7
    }
]

export const TypePokemons = [
    {
        name: "Sort by id",
    },
    {
        name: "Sort by name",
    }
]

export const mapIdToGeneration = (id: any) => {
    if (id <= 151) {
        return 'generation 1'
    } else if (id > 151 && id <= 251) {
        return 'generation 2'
    } else if (id > 251 && id <= 386) {
        return 'generation 3'
    } else if (id > 386 && id <= 493) {
        return 'generation 4'
    } else if (id > 483 && id <= 649) {
        return 'generation 5'
    } else if (id > 649 && id <= 721) {
        return 'generation 6'
    } else if (id > 721 && id <= 809) {
        return 'generation 7'
    } /** else if (id > 809 && id <= 898) {
      return 'generation-viii'
    } */ else {
        return 'all'
    }
}