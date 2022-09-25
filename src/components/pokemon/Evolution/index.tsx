import React from 'react'
import { Link } from 'react-router-dom';
type Props = {
    data: any
}

const Evolution = (props: Props) => {
    const { data } = props;
    function filterIdFromSpeciesURL(url: any) {
        return url.replace('https://pokeapi.co/api/v2/pokemon-species/', '').replace('/', '');
    };
    return (
        <>
            <Link to={`/pokemon/${data.name}`}>
                <div className="hover:scale-110 hover:rotate-[3deg] hover:transform-gpu hover:shadow-2xl duration-300 ease-in-out mt-[10px] pt-6 pb-3  relative flex flex-col justify-between items-center cursor-pointer w-32 h-32  p-1 bg-gray-800 text-white rounded-[100%]">
                    <div className="flex justify-center w-[50px]">
                        <img className="" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${filterIdFromSpeciesURL(data.url)}.gif`} alt='poke' />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className=" text-sm font-semibold text-white text-opacity-80 pointer-events-none"> Nº {filterIdFromSpeciesURL(data.url)}</span>
                        <span>{data.name}</span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Evolution