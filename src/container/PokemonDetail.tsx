import React, { useEffect, useState } from 'react'
import PokemonBio from '../components/pokemon/PokemonBio'
import { useParams } from 'react-router';
import { useAppDispatch } from '../hooks/useType'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonData } from '../features/PokemonDetailSlice'
type Props = {}
interface MatchParams {
    name: string,
}
const PokemonDetail: React.FC = (props: Props) => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const pokemonState = useSelector((state: any) => state.detail);
    const { info, biology, evolution } = pokemonState;
    useEffect(() => {
        if (params.pokemon) {
            dispatch(fetchPokemonData(params.pokemon.toLowerCase()));
        }
    }, [params.pokemon]);

    return (
        <>
            <>
                <PokemonBio />
            </>
        </>
    )
}

export default PokemonDetail