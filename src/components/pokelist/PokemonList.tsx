import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { typeColors, backgroundColor } from '../../globals'
import { IPokemonBase } from '../../IPokemon';
import InfinityScroll from '../infinityScroll/InfinityScroll';
import PokemonCard from '../pokemonCard/PokemonCard';
type colors = keyof typeof typeColors;
type bg = keyof typeof backgroundColor;
const PokemonList: React.FC = ({ data }: any) => {
    const pokemon = useSelector((state: any) => state.pokemon)
    const ref = useRef(null);
    const [showPokemon, setShowPokemon] = useState<IPokemonBase[]>([]);
    const dispatch = useDispatch();
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
                    sizes={6}
                    pokemonList={showPokemon}
                />
            }
        </>

    )
}

export default PokemonList