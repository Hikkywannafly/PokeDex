import { useState, useEffect, useRef } from 'react'
import Search from '../../components/search/Search'
import Filter from '../../components/filter/Filter';
import { useDispatch, useSelector } from 'react-redux'
import { IPokemonBase } from '../../IPokemon';
import InfinityScroll from '../infinityScroll/InfinityScroll';
const PokemonList: React.FC = ({ data }: any) => {
    const pokemon = useSelector((state: any) => state.pokemon)
    const [showPokemon, setShowPokemon] = useState<IPokemonBase[]>([]);
    const handleSearch = (e: any) => {
        const search = e.target.value;
        const filteredPokemon = pokemon.filter((pokemon: any) => {
            return pokemon.name.toLowerCase().includes(search.toLowerCase());
        });
        setShowPokemon(filteredPokemon);

    }
    useEffect(() => {
        if (pokemon.length > 0) {
            setShowPokemon(pokemon);
        }
    }, [pokemon]);
    return (
        <>
            <Search handleSearch={handleSearch} />
            <Filter />
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

// const handleSearch = (e: any) => {
//     const search = e.target.value;
//     const pokemonSearch = pokemon.filter((pokemon: any) => {
//         return search.toLowerCase().includes(pokemon.name.toLowerCase());
//     })
//     setShowPokemon(pokemonSearch);
