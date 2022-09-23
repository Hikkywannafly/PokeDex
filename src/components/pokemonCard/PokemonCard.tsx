import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { IPokemonBase } from '../../IPokemon';
import axios from '..//../services/axios';
import { typeColors, backgroundColor } from '../../globals';
import ProgressiveImage from "react-progressive-image-loading";
import Trail from './Trail';
type colors = keyof typeof typeColors;
type bg = keyof typeof backgroundColor;
type IProps = {
    data: IPokemonBase
}

const PokemonCard = ({ data }: IProps) => {
    const { name, url, id } = data;
    const [pokemon, setPokemon] = useState<any>([]);
    const [isDone, setIsDone] = useState(false);
    const navigate = useNavigate();
    const pokemonCall = async (pokemon: IPokemonBase) => {
        const res = await axios.get(pokemon.url);
        setPokemon({ id: id, name: name, sprites: res.data.sprites, type: res.data.types.map((type: any) => type.type.name) });
        setIsDone(true);
    }
    const goPokemonDetail = () => {
        navigate(`/pokemon/${name}`);
    }
    useEffect(() => {
        pokemonCall(data);
    }, [])
    return (
        <>
            {pokemon.id && (
                <Trail open={true}>
                    <div
                        onClick={goPokemonDetail}
                        style={{ boxShadow: `${backgroundColor[pokemon.type[0] as bg]} 0px 0px 1.25rem 0px`, background: `linear-gradient(${backgroundColor[pokemon.type[0] as bg]}, ${backgroundColor[pokemon.type[0] as bg] || backgroundColor[pokemon.type[0] as bg]})` }}
                        className=" relative rounded-xl drop-shadow-[0px_0px_1.25rem_0px_red] w-full h-60 md:h-80
            flex-1 normal-case  flex flex-col justify-between items-center cursor-pointer mt-[10px] pt-6 pb-3  group hover:rounded-[20px] duration-500 hover:drop-shadow-[0px_0px_1.25rem_0px_red]  hover:translate-y-[-10px]  ">
                        <div className="flex justify-items-end ">
                        </div>
                        <span className=" text-2xl font-semibold text-black text-opacity-25 pointer-events-none absolute top-3 left-3"> Nº {id}</span>
                        <div className=" flex justify-center">
                            <ProgressiveImage
                                preview={pokemon.sprites.other["official-artwork"].front_default || `./pokemonheader/log2.png`}
                                // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg` || pokemon.sprites.orther["official-artwork"].front_default}
                                // src={pokemon.sprites.other["official-artwork"].front_default}
                                src={pokemon.sprites.other["dream_world"].front_default || pokemon.sprites.other["official-artwork"].front_default || `./pokemonheader/log2.png`}
                                render={(src, style) => (
                                    <img className='w-[50%] max-h-[350px] group-hover:animate-newton  ease-in duration-150 z-10 my-4 ' src={src} style={style} alt={name} />
                                )}
                            />

                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="mb-3 capitalize font-[700] text-xl lg:text-2xl text-gray-900 "> {name} </h3>
                            <div className="ability flex flex-row mb-1.5">
                                {pokemon.type.map((item: any) =>
                                    <div key={item} style={{ backgroundColor: typeColors[item as colors] }}
                                        className='font-[700] opacity-[0.8] text-white rounded-[5px] text-[11px] tracking-widest px-1 mx-1 flex items-center uppercase lg:p-[3px] lg:py-[2px] lg:text-[12px]'> <span> {item} </span>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </Trail>
            )}

        </>
    )
}

export default PokemonCard