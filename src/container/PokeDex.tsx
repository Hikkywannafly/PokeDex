import React, { useEffect, useState, useRef, useCallback } from 'react';
import { FaBeer } from 'react-icons/fa';
import { AiFillGithub } from "react-icons/ai";
import PokemonList from '../components/pokelist/PokemonList';

import { useDispatch, useSelector } from 'react-redux';
const PokeDex: React.FC = () => {
    const dispatch = useDispatch();
    const pokemonState = useSelector((state: any) => state.pokemon);
    const { pokemon } = pokemonState;
    const [pokemonList, setPokemonList] = useState<any>([]);


    return (
        <>
            <div style={{ backgroundImage: 'url(./pokemonheader/pokeball-icon.png)', backgroundRepeat: `no-repeat`, backgroundPositionX: `-180px`, backgroundPositionY: `-80px` }}
                className=" flex flex-col px-[4vw] lg:px-[15vw] w-full z-10 bg-[#f6f8fc] h-auto scroll-smooth overflow-visible ">
                <main className="flex flex-row">
                    <div className="main-display mb-5 flex-1">

                        <div className="mobi my-20">
                            <div className="flex items-center justify-center lg:justify-start mb-5">
                                <h1 className="text-3xl lg:text-3xl font-semibold sm:text-left inline-block">
                                    Hikkywanafly Pokédex
                                </h1>
                                <a
                                    href="https://github.com/Hikkywannafly/PokeDex"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block ml-4 transform hover:opacity-50 hover:-translate-y-1 transition-all duration-150"
                                >
                                    <AiFillGithub size={40} />
                                </a>
                            </div>

                            <PokemonList />
                        </div>
                        <div className="show-detail">
                            {pokemonList}
                        </div>
                    </div>
                    {/* <div className="show-pokemon-detail hidden md:block ">
                        <PokemonDetail />
                    </div> */}
                </main>
            </div>
        </>
    )
}

export default PokeDex