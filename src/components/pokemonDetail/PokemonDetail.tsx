import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import PokemonBio from '../pokemon/PokemonBio';
import LoadingMore from '../loading/LoadingMore';
import PokemonVarieties from '../pokemon/PokemonVarieties';
import PokemonInfo from '../pokemon/PokemonInfo';
import PokemonDamage from '../pokemon/PokemonDamage';
import PokemonStats from '../pokemon/PokemonStats';
import PokemonEvolution from '../pokemon/PokemonEvolution';
type Props = {}

const PokemonDetail = (props: Props) => {
    const pokemonData = useSelector((state: any) => state.detail);
    const navigate = useNavigate();
    const { info, biology, evolution } = pokemonData;

    const handleVarieties = (e: any) => {
        navigate(`/pokemon/${e.target.value.toLowerCase()}`);
    }
    return (
        <>
            {!info.isLoading && !biology.isLoading && !evolution.isLoading &&
                (
                    <>
                        <PokemonBio />
                        <div className="flex flex-col justify-start items-center w-full overflow-hidden mb-10">
                            <PokemonVarieties name={info.name} onChange={handleVarieties} varieties={biology.varieties} />
                            <PokemonInfo
                                description={biology.flavor_text_entries}
                                Abilities={info.abilities}
                                Shape={biology.shape}
                                Color={biology.color}
                                Category={biology.genenral} Generation={biology.generation} Weight={info.weight} Height={info.height} />
                            <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-32">
                                <PokemonDamage types={info.types} title={`DAMAGE ATK`} />
                                <PokemonDamage types={info.types} title={`DAMAGE DEF`} />
                            </div>
                            <PokemonStats data={info.stats} />
                            <PokemonEvolution key={info} data={evolution} />
                        </div>
                    </>
                )}
        </>
    )
}

export default PokemonDetail