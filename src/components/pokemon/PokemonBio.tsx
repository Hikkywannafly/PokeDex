import React, { memo } from 'react'
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import fetchPokemonData from '../../features/PokemonDetailSlice';
import { useDispatch, useSelector } from 'react-redux';
import { backgroundColor, typeColors, PokemonTypeColors } from '../../globals';
import TypeBade from '../pokemon/Type';
import { fadeInUpVariant } from '../../helper/animation';
type colors = keyof typeof typeColors;
type bg = keyof typeof backgroundColor;
type bg1 = keyof typeof PokemonTypeColors;
type Props = {}
const PokemonBio = (props: Props) => {
    const pokemonState = useSelector((state: any) => state.detail);
    const { info, biology, evolution } = pokemonState;

    return (
        <>
            {!info.isLoading && (

                <div
                    style={{ backgroundColor: PokemonTypeColors[`${info.types[0]}` as bg1].medium }}
                    // style={{ background: `linear-gradient(${backgroundColor[info.types[0] as bg]}, ${backgroundColor[info.types[0] as bg] || backgroundColor[info.types[0] as bg]})` }}
                    className=" w-full h-[350px] flex justify-center ">
                    <div className="mt-[56px] text-white font-bold h-[294px] flex items-center justify-center">
                        <MdArrowBackIosNew size='32' />

                    </div>
                    <div className="relative w-full h-[294px] flex flex-col md:flex-row mt-[56px] items-center md:w-[65%] lg:w-[55%] mx-1 md:mx-10">

                        <div className="flex flex-row md:flex-col justify-between w-[90%] mx-10 gap-2 mb-5">
                            <div className="hidden md:block"> <span className=" text-2xl font-semibold text-white text-opacity-80 pointer-events-none"> Nº {info.id}</span></div>
                            <div className="">
                                <div className="text-xl  md:text-4xl font-bold text-white mb-4 capitalize ">{info.name} </div>
                                <div className=" flex flex-row gap-5 ">
                                    {info.types.map((type: string, index: number) => (<TypeBade key={index} type={type} />))}
                                </div>
                            </div>
                            <div className="md:hidden"> <span className=" text-base font-semibold text-white text-opacity-80 pointer-events-none "> Nº {info.id} </span></div>
                        </div>
                        <div
                            className="relative flex justify-center w-[100%] gap-8 mr-3">
                            <div className="relative z-20">
                                <img src='/pokemonheader/pokeball-icon.png' className="w-[100%] max-w-[220px] max-h-[220px] absolute opacity-40 bottom-[10] right-5 z-[-1]" alt='pokemon' />
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${info.id}.svg`}
                                    alt='pikachu'

                                    className="w-[100%] max-h-[230px] lg:max-h-[260px] z-50  animate-newton" />
                            </div >
                            <div className=" w-2 font-bold text-4xl text-white">{biology.nameKankji}</div>
                        </div >
                    </div >
                    <div className="mt-[56px] text-white font-bold h-[294px] flex items-center  justify-center">
                        <MdArrowForwardIos size='32' />
                    </div>

                </div >
            )
            }


        </>
    )
}
export default PokemonBio