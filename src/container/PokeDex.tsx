import React, { useEffect, useState, useRef, useCallback } from 'react';
import Search from '../components/search/Search'
import Filter from '../components/filter/Filter';
import PokemonList from '../components/pokelist/PokemonList';
import PokemonDetail from '../components/pokelist/PokemonDetail';

import { useDispatch, useSelector } from 'react-redux';
const PokeDex: React.FC = () => {
    const dispatch = useDispatch();
    const pokemonState = useSelector((state: any) => state.pokemon);
    const { pokemon } = pokemonState;
    const [pokemonList, setPokemonList] = useState<any>([]);


    return (
        <>
            <div style={{ backgroundImage: 'url(./pokemonheader/pokeball-icon.png)', backgroundRepeat: `no-repeat`, backgroundPositionX: `-180px`, backgroundPositionY: `-80px` }}
                className=" flex flex-col px-[4vw] lg:px-[12vw] w-full z-10 bg-[#f6f8fc] scroll-smooth overflow-visible ">
                <main className="flex flex-row">
                    <div className="main-display mb-5 flex-1">
                        <div className="mobi my-20">
                            <Search />
                            <Filter />
                            <PokemonList />
                        </div>
                        <div className="show-detail">
                            {pokemonList}
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