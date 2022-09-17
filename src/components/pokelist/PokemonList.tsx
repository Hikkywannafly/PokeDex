import { useState, useEffect, useRef } from 'react'
import Search from '../../components/search/Search'
import Filter from '../../components/filter/Filter';
import { useDispatch, useSelector } from 'react-redux'
import { PokemonGenerations, TypePokemons, mapIdToGeneration } from "../../globals"
import { IPokemonBase } from '../../IPokemon';
import InfinityScroll from '../infinityScroll/InfinityScroll';
const PokemonList: React.FC = ({ data }: any) => {
    const pokemon = useSelector((state: any) => state.pokemon)
    const [showPokemon, setShowPokemon] = useState<IPokemonBase[]>([]);
    const [generation, setGeneration] = useState<string>('All');
    const [sortBy, setSortBy] = useState<string>('id');
    const handleSearch = (e: any) => {
        const search = e.target.value;
        const filteredPokemon = pokemon.filter((pokemon: any) => {
            return pokemon.name.toLowerCase().includes(search.toLowerCase());
        });
        setShowPokemon(filteredPokemon);

    }
    const handleFilter = (e: any) => {
        const filter = e.target.value;
        if (filter === 'All') return
        const filteredPokemon = pokemon.filter(
            (pokemon: any) => filter === mapIdToGeneration(pokemon.id)
        )
        setShowPokemon(filteredPokemon);
    }
    useEffect(() => {
        console.log(`test2`)
        if (pokemon.length > 0) {
            setShowPokemon(pokemon);
        }
    }, [pokemon]);
    // useEffect(() => {
    //     if (generation === 'All') {
    //         setShowPokemon(pokemon);
    //     }
    //     else {

    //     }
    // }, [generation])
    return (
        <>
            <Search handleSearch={handleSearch} />
            <h1 className=" mb-6  text-[20px] font-medium">Pokemons available {showPokemon?.length}</h1>
            <div className="search-type mb-5">
                <div className="flex flex-row justify-between">
                    <Filter handleFilter={handleFilter} data={PokemonGenerations} />
                    {/* <Filter data={TypePokemons} /> */}
                </div>
            </div>

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

