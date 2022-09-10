import React, { useEffect, useState, useRef, useCallback } from 'react';
import getApi from '../services/fromAxios';

import Search from '../components/search/Search';
import Pokemon from '../components/pokelist/Pokemon';
import PokemonDetail from '../components/pokelist/PokemonDetail';
import { IPokemonBase, IPokemon } from '../IPokemon';
import LoadingHome from '../components/loading/LoadingHome';
import { setTokenSourceMapRange } from 'typescript';


const PokeDex: React.FC = () => {
    const NUMBER_POKEMONS = 800;
    const NUMBER_LIMIT = 12;
    const [defaultPokemons, setDefaultPokemons] = useState<IPokemon[]>([]);
    const [offsetPokemon, setOffsetPokemon] = useState<number>(NUMBER_LIMIT);
    const [loadingHome, setLoadingHome] = useState<boolean>(true);
    const prevScrollY = useRef(0);
    const load = async (offset: number) => {
        const res = await getApi.get(`pokemon/`, {
            params: {
                limit: NUMBER_LIMIT,
                offset: offset,
            }
        })
        await res.data.results.forEach(async (pokemon: IPokemonBase) => {
            const results = await getApi.get(`pokemon/${pokemon.name}`)
            setDefaultPokemons((index) => [...index, {
                id: results.data.id,
                name: pokemon.name,
                type: results.data.types.map((type: any) => type.type.name),
            }])
        })
        setTimeout(() => {
            setLoadingHome(false);
        }, 1000)
    }
    const loadMorePokemons = (async (offset: any) => {
        load(offset);
        console.log(offset);
        console.log(NUMBER_LIMIT);
        setOffsetPokemon(index => index + NUMBER_LIMIT);
    });
    const getDefaultPokemons = useCallback(async () => {
        load(0);
    }, []);
    useEffect(() => {
        getDefaultPokemons();
    }, [])

    return (
        <>
            <LoadingHome loading={loadingHome} />
            <div style={{ backgroundImage: 'url(./pokemonheader/pokeball-icon.png)', backgroundRepeat: `no-repeat`, backgroundPositionX: `-180px`, backgroundPositionY: `-80px` }}
                className=" flex flex-col px-[4vw] lg:px-[12vw] w-full z-10 bg-[#f6f8fc] scroll-smooth overflow-visible ">
                <main className="flex flex-row">
                    <div className="main-display mb-5 flex-1">
                        <div className="mobi my-20">
                            <Search />
                            <div className="search-type mb-5">
                                {/* comming soon */}
                            </div>
                            <div className="pokemon-list flex flex-row flex-wrap gap-8 lg:gap-10 w-ful  ">
                                {/* {
                                    defaultPokemons.map((pokemon: IPokemon) => (
                                        <Pokemon key={pokemon.name} id={pokemon.id} name={pokemon.name} type={pokemon.type} />))
                                } */}
                                <Pokemon />
                            </div>
                        </div>
                        <button onClick={() => loadMorePokemons(offsetPokemon)}> load more</button>
                        <div className="show-detail">

                        </div>
                    </div>
                    <div className="show-pokemon-detail hidden md:block ">
                        <PokemonDetail />
                    </div>

                </main>
            </div>
        </>
    )
}

export default PokeDex