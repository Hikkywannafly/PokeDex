import React, { useEffect, useState } from 'react'
import PokemonBio from '../components/pokemon/PokemonBio'
import { useParams } from 'react-router';
import { useAppDispatch } from '../hooks/useType'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonData } from '../features/PokemonDetailSlice';
import { startLoading, cleanData } from '../features/PokemonDetailSlice';
import PokemonDetails from '../components/pokemonDetail/PokemonDetail';
import LoadingMore from '../components/loading/LoadingMore';
type Props = {}
interface MatchParams {
    name: string,
}
const PokemonDetail: React.FC = (props: Props) => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const pokemonState = useSelector((state: any) => state.detail);
    const { info, biology, evolution } = pokemonState;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (params.pokemon) {
            dispatch(fetchPokemonData(params.pokemon.toLowerCase()));
        }
        // on unmount
        return () => {
            dispatch(cleanData());
            setLoading(true);

        }
    }, [params.pokemon]);
    useEffect(() => {
        if (!info.isLoading && !biology.isLoading)
            setTimeout(() => {
                setLoading(false);
            }, 900)
        // setLoading(false);
        // console.log(`asdasd`, info, biology);
    }, [info.isLoading, biology.isLoading, evolution.isLoading]);
    return (
        <>

            {
                !loading ? (<PokemonDetails />) :
                    (
                        <div className="
                        
                        absolute flex justify-center h-[80%] w-full items-center my-10">
                            <LoadingMore />
                        </div>

                    )
            }
        </>
    )
}

export default PokemonDetail