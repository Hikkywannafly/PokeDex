import React from 'react'
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import fetchPokemonData from '../../features/PokemonDetailSlice';
import { useDispatch, useSelector } from 'react-redux'
type Props = {}
const PokemonBio = (props: Props) => {
    const pokemonState = useSelector((state: any) => state.detail);

    return (
        <>
            <div className=" bg-red-500 w-full h-[350px] flex justify-center ">
                <div className="mt-[56px] text-white font-bold h-[294px] flex items-center justify-center">
                    <MdArrowBackIosNew size='32' />
                </div>
                <div className="relative w-full h-[294px] flex flex-col md:flex-row mt-[56px] items-center md:w-[65%] lg:w-[55%] mx-1 md:mx-10">

                    <div className="flex flex-row md:flex-col justify-between w-[90%] mx-10 gap-2">
                        <div className="hidden md:block"> <span className=" text-2xl font-semibold text-white text-opacity-80 pointer-events-none"> Nº </span></div>
                        <div className="">
                            <div className="text-xl  md:text-4xl font-bold text-white mb-2 capitalize "></div>
                            <div className="w-14 ">
                                <div style={{ backgroundColor: `red` }}
                                    className='font-[700] opacity-[0.8] text-white rounded-[5px] text-[11px] tracking-widest px-1 flex items-center uppercase lg:p-[3px] lg:py-[2px] lg:text-[12px]'> <span> FIre </span>
                                </div>
                            </div>
                        </div>
                        <div className="md:hidden"> <span className=" text-base font-semibold text-white text-opacity-80 pointer-events-none "> Nº </span></div>
                    </div>
                    <div className="relative flex justify-center w-[100%]   ">
                        <div className="relative z-20">
                            <img src='/pokemonheader/pokeball-icon.png' className="w-[100%] max-w-[220px] max-h-[220px] absolute opacity-20 bottom-3 right-5 z-[-1]" alt='pokemon' />
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${2}.svg`}
                                alt='pikachu'
                                className="w-[100%] max-h-[230px] lg:max-h-[260px] z-50 " />
                        </div >
                        <div className="absolute right-9 w-2 font-bold text-4xl text-white">{ }</div>
                    </div >
                </div >
                <div className="mt-[56px] text-white font-bold h-[294px] flex items-center  justify-center">
                    <MdArrowForwardIos size='32' />
                </div>

            </div >
        </>
    )
}
export default PokemonBio