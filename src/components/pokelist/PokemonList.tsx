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
            <div className="pokemon-list flex flex-row flex-wrap gap-8 lg:gap-10 w-ful  ">
                {/* {showPokemon &&
                    (showPokemon.map((pokemon: IPokemonBase) => { return <PokemonCard key={pokemon.id} data={pokemon} /> }))
                } */}
            </div>
            {
                pokemon.length > 0 && <InfinityScroll sizes={16} pokemonList={showPokemon} />
            }
        </>

    )
}

export default PokemonList