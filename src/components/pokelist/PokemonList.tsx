import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IPokemonBase } from '../../IPokemon';
import InfinityScroll from '../infinityScroll/InfinityScroll';
const PokemonList: React.FC = ({ data }: any) => {
    const pokemon = useSelector((state: any) => state.pokemon)
    const [showPokemon, setShowPokemon] = useState<IPokemonBase[]>([]);
    useEffect(() => {
        if (pokemon.length > 0) {
            setShowPokemon(pokemon);
        }
    }, [pokemon]);
    return (
        <>
            {
                pokemon.length > 0 &&
                <InfinityScroll
                    sizes={8}
                    pokemonList={showPokemon}
                />
            }
        </>

    )
}

export default PokemonList