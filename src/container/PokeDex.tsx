import React, { useEffect, useState, useRef, useCallback } from 'react';
import getApi from '../services/fromAxios';
import Header from '../components/header/Header';
import Search from '../components/search/Search';
import Pokemon from '../components/pokelist/Pokemon';
import PokemonDetail from '../components/pokelist/PokemonDetail';
import { IPokemonBase, IPokemon } from '../IPokemon';
import LoadingHome from '../components/loading/LoadingHome';


const PokeDex: React.FC = () => {
    const NUMBER_POKEMONS = 800;
    const NUMBER_LIMIT = 18;
    const [defaultPokemons, setDefaultPokemons] = useState<IPokemon[]>([]);
    const [loadingHome, setLoadingHome] = useState<boolean>(true);
    const getDefaultPokemons = useCallback(async () => {
        let tempPokemons: IPokemon[] = [];
        const res = await getApi.get(`pokemon/`, {
            params: {
                limit: NUMBER_LIMIT,
            }

        })
        await res.data.results.forEach(async (pokemon: IPokemonBase) => {
            const results = await getApi.get(`pokemon/${pokemon.name}`)
            setDefaultPokemons((index) => [...index, {
                id: results.data.id,
                name: pokemon.name,
                url: results.data.sprites.front_default,
                type: results.data.types.map((type: any) => type.type.name),
            }])
        })
        setLoadingHome(false);

    }, []);
    useEffect(() => {
        getDefaultPokemons();
    }, [])

    return (
        <>
            <div className=" w-screen h-screen m-0 p-0 font-fira  overflow-x-hidden scroll-smooth">
                <LoadingHome loading={loadingHome} />
                <Header />
                <div style={{ backgroundImage: 'url(./pokemonheader/pokeball-icon.png)', backgroundRepeat: `no-repeat`, backgroundPositionX: `-180px`, backgroundPositionY: `-80px` }}
                    className=" flex flex-col px-[4vw] lg:px-[8vw] w-full z-10 bg-[#f6f8fc] h-auto">
                    <main className="main-container flex flex-row">
                        <div className="main-display mb-5 flex-1">
                            <div className="mobi my-20">
                                <Search />
                                <div className="search-type mb-5">
                                    {/* comming soon */}
                                </div>
                                <div className="pokemon-list flex flex-row flex-wrap gap-8 w-ful  ">
                                    {
                                        defaultPokemons.map((pokemon: IPokemon) => (
                                            <Pokemon key={pokemon.name} id={pokemon.id} name={pokemon.name} url={pokemon.url} type={pokemon.type} />))
                                    }
                                </div>
                            </div>
                            <div className="show-detail">

                            </div>
                        </div>
                        <div className="show-pokemon-detail hidden md:block ">
                            <PokemonDetail />
                        </div>
                    </main>

                </div>
            </div>


        </>
    )
}

export default PokeDex