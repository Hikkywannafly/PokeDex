import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../components/header/Header';
import Search from '../components/search/Search';
import Pokemon from '../components/pokelist/Pokemon';
import PokemonDetail from '../components/pokelist/PokemonDetail';
import { IPokemon } from '../IPokemon';
import ScrollToTop from "react-scroll-to-top";
import { url } from 'inspector';
type Props = {}
interface Pokemons {
    name: string;
    url: string;
}


const PokeDex = (props: Props) => {
    const [pokemons, setPokemons] = useState<IPokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [backTop, setBackTop] = useState<boolean>(false);
    const [newPokemons, setNewPokemons] = useState<string>();
    const fetchPokemon = (async (url: any) => {
        const res = await axios.get(url);
        setNewPokemons(res.data.next);

        await res.data.results.forEach(async (pokemon: Pokemons) => {
            let pokemonInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            let id = await pokemonInfo.data.id;
            let type = await pokemonInfo.data.types.map((type: any) => type.type.name);
            let urlImg = await pokemonInfo.data.sprites.front_default;
            setPokemons((index) => [...index, { id: id, name: pokemon.name, url: urlImg, type: type }]);
            setLoading(false);
        });
    }
    );
    const scrollHandler = async (event: any) => {
        const scrollHeight = event.currentTarget.scrollHeight;
        const currentHeight = Math.ceil(
            event.currentTarget.scrollTop + window.innerHeight
        );
        if (currentHeight + 1 >= scrollHeight && !loading) {
            await fetchPokemon(newPokemons);

        }

    };
    useEffect(() => {
        fetchPokemon('https://pokeapi.co/api/v2/pokemon/?limit=12?offset=0');
        window.addEventListener("scroll", scrollHandler);
    }, [])
    const scrollToTop = (event: React.UIEvent<HTMLDivElement>) => {
        const win: Window = window;
        win.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        console.log(event.currentTarget.scrollTop);
    };

    return (
        <>
            <div className={` ${loading ? null : 'animate-aniLoad '} absolute w-screen h-screen flex items-center justify-center z-40 bg-white `}>
                <img src="/pokemonheader/log2.png" className=" animate-aniLoadIcon w-16 h-16" alt="pokeball "></img>
            </div>
            <div onScroll={scrollHandler} className="bg-container w-screen h-screen m-0 p-0 font-fira overflow-x-hidden">

                <div style={{ backgroundImage: 'url(./pokemonheader/pokeball-icon.png)', backgroundRepeat: `no-repeat`, backgroundPositionX: `-180px`, backgroundPositionY: `-80px` }}
                    className=" flex flex-col px-[4vw] lg:px-[8vw] w-full z-10 bg-[#f6f8fc] h-auto">
                    <header className="header-container my-5">
                        <Header />

                    </header>
                    <main className="main-container flex flex-row">
                        <div className="main-display mb-5 flex-1">
                            <div className="mobi">
                                <div className="search">
                                    <Search />
                                </div>
                                <div className="search-type mb-5">
                                    {/* comming soon */}
                                </div>
                                <div className="pokemon-list flex flex-row flex-wrap gap-8  w-ful  ">
                                    {
                                        pokemons.map((pokemon: IPokemon) => (
                                            <Pokemon key={pokemon.name} id={pokemon.id} name={pokemon.name} url={pokemon.url} type={pokemon.type} />
                                        )
                                        )
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
                <ScrollToTop smooth />
            </div>
            <div onClick={scrollToTop} className="absolute right-2 bottom-6 bg-gray-300 p-2 rounded-2xl  hover:bg-green-300 duration-150" >
                <img className='w-4 h-3' src="/pokemonheader/arrow-up-icon.png" alt="pokeball "></img>
            </div>

        </>
    )
}

export default PokeDex