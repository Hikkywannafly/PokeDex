import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PokemonBio from '../pokemon/PokemonBio';
import LoadingMore from '../loading/LoadingMore';
type Props = {}

const PokemonDetail = (props: Props) => {
    const pokemonData = useSelector((state: any) => state.detail);
    const { info, biology, evolution } = pokemonData;
    console.log(`asdasd`, info, biology, evolution);
    return (
        <>
            {
                info.isLoading && biology.isLoading && evolution.isLoading && (
                    <div className="absolute flex justify-center h-[80%] w-full items-center my-10">
                        <LoadingMore />
                    </div>
                )
            }
            {
                <PokemonBio />
            }
        </>
    )
}

export default PokemonDetail