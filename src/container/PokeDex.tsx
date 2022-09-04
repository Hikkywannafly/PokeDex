import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import Header from '../components/header/Header';
import Search from '../components/search/Search';
import Pokemon from '../components/pokelist/Pokemon';
import PokemonDetail from '../components/pokelist/PokemonDetail';
import { IPokemon } from '../IPokemon';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
type Props = {}
interface Pokemons {
    name: string;
    url: string;
}

const PokeDex = (props: Props) => {
    const [pokemons, setPokemons] = useState<IPokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [loadPoke, setloadPoke] = useState<boolean>(false);
    const [newPokemons, setNewPokemons] = useState<string>();
    const refScrollUp = useRef<any>(null);
    const [visible, setVisible] = useState<boolean>(false);
    const fetchPokemon = (async (url: any) => {
        const res = await axios.get(url);
        setNewPokemons(res.data.next);
        await res.data.results.forEach(async (pokemon: Pokemons) => {
            let pokemonInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            let id = pokemonInfo.data.id;
            let type = pokemonInfo.data.types.map((type: any) => type.type.name);
            let urlImg = pokemonInfo.data.sprites.front_default;
            setPokemons((index) => [...index, { id: id, name: pokemon.name, url: urlImg, type: type }]);
            setLoading(false);
            setTimeout(() => {
                setloadPoke(false);
            }, 500);

        });
    }
    );
    const scrollHandler = async (event: any) => {
        const test = Math.floor(event.currentTarget.scrollHeight - event.currentTarget.scrollTop);
        event.currentTarget.scrollTop > 200 ? setVisible(true) : setVisible(false);
        if (test === event.currentTarget.clientHeight) {
            setloadPoke(true);
            fetchPokemon(newPokemons);
        }
    };
    const handleScrollUp = () => {
        refScrollUp.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        fetchPokemon('https://pokeapi.co/api/v2/pokemon/?limit=12?offset=0');


    }, [])

    return (
        <>

            <div className={` ${loading ? null : 'animate-aniLoad '} absolute w-screen h-screen flex items-center justify-center z-40 bg-white `}>
                <img src="/pokemonheader/log2.png" className=" animate-aniLoadIcon w-16 h-16" alt="pokeball "></img>
            </div>

            <div onScroll={scrollHandler} className="bg-container w-screen h-screen m-0 p-0 font-fira  overflow-x-hidden scroll-smooth">
                <div style={{ backgroundImage: 'url(./pokemonheader/pokeball-icon.png)', backgroundRepeat: `no-repeat`, backgroundPositionX: `-180px`, backgroundPositionY: `-80px` }}
                    className=" flex flex-col px-[4vw] lg:px-[8vw] w-full z-10 bg-[#f6f8fc] h-auto">

                    <Box sx={{
                        display: 'flex',
                        width: '40px',
                        height: '40px',
                        position: 'fixed',
                        backgroundColor: 'white',
                        dropShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
                        borderRadius: '50%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        left: '50%',
                        zIndex: 30,
                        visibility: loadPoke ? 'visible' : 'hidden',
                    }}>
                        <CircularProgress size="1.5rem" />
                    </Box>
                    <header className="header-container my-8">
                        <div ref={refScrollUp}> </div>
                        <Header />

                    </header>
                    <main className="main-container flex flex-row">
                        <div className="main-display mb-5 flex-1">
                            <div className="mobi">
                                <div className="search  mb-10">
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
            </div>
            <div
                onClick={handleScrollUp}
                className={` ${visible ? 'block' : 'hidden'} absolute drop-shadow-[0_10px_10px_#ededed]  right-5 bottom-6 bg-gray-100 p-2 rounded-2xl  hover:bg-green-300 duration-150`} >
                <img className='w-4 h-3' src="/pokemonheader/arrow-up-icon.png" alt="pokeball "></img>
            </div>

        </>
    )
}

export default PokeDex