import { useState, useEffect, useRef } from 'react'
import Search from '../../components/search/Search'
import Filter from '../../components/filter/Filter';
import { useDispatch, useSelector } from 'react-redux'
import { PokemonGenerations, TypePokemons, mapIdToGeneration } from "../../globals"
import { IPokemonBase } from '../../IPokemon';
import InfinityScroll from '../infinityScroll/InfinityScroll';
import Reset from '../../components/filter/Reset';
const PokemonList: React.FC = ({ data }: any) => {
    const pokemon = useSelector((state: any) => state.pokemon)
    const [showPokemon, setShowPokemon] = useState<IPokemonBase[]>([]);
    const [generation, setGeneration] = useState<string>('all');
    const [sortBy, setSortBy] = useState<string>('id');
    const [reset, setReset] = useState<boolean>(false);
    const handleReset = () => {
        setGeneration('all');
        setSortBy('id');
        setReset(true);
    }
    const handleSearch = (e: any) => {
        const search = e.target.value;
        const _ = pokemon.filter((pokemon: any) => {
            return pokemon.name.toLowerCase().includes(search.toLowerCase());
        });
        setShowPokemon(sortPokemon(_, sortBy));
        setReset(false);

    }
    const sortPokemon = (pokemonList: any, sortBy: any) =>
        [...pokemonList].sort((a, b) => {
            if (a[`${sortBy}`] > b[`${sortBy}`]) return 1
            if (a[`${sortBy}`] < b[`${sortBy}`]) return -1
            return 0
        })
    const handleFilter = (e: any) => {
        const filter = e.target.value;
        // trigger filter
        // eslint-disable-next-line array-callback-return
        PokemonGenerations.filter((generation: any): void => {
            const _ = generation.name.toLowerCase().trim() === (filter.toLowerCase()).trim();
            if (_) setGeneration(generation.name.toLowerCase().trim());
        })
        return 0;
    }
    const handleSort = (e: any) => {
        const sort = e.target.value;
        setSortBy(sort.split(" ").pop());
    }
    useEffect(() => {
        showPokemon?.length && setShowPokemon(sortPokemon(showPokemon, sortBy))
    }, [sortBy])
    useEffect(() => {
        console.log(generation);
        if (generation && generation !== 'all') {
            const filteredPokemon = pokemon.filter(
                (pokemon: any) => generation === mapIdToGeneration(pokemon.id)
            )
            setShowPokemon(sortPokemon(filteredPokemon, sortBy));
            setReset(false);
        }
        else {
            setShowPokemon(sortPokemon(pokemon, sortBy));
            setReset(false);
        }
    }, [generation, pokemon])
    return (
        <>

            <Search handleSearch={handleSearch} />
            <div className="search-type mb-5">
                <div className="flex flex-row justify-between">
                    <Filter handleFilter={handleFilter} data={PokemonGenerations} reset={reset} />
                    {/* <h1 className="  text-[20px] font-medium"> Available {showPokemon?.length}</h1> */}
                    <div className="flex flex-row gap-3">
                        <Filter data={TypePokemons} handleFilter={handleSort} reset={reset} />
                        <Reset handleReset={handleReset} />
                    </div>
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

