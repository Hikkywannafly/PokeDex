import React from 'react'

type Props = {
    varieties: any,
    onChange: any,
    name: any
}

const PokemonVarieties = (props: Props) => {
    const varieties = props;
    return (
        <div className=" flex flex-row justify-center items-center gap-5">
            <h1 className="font-bold"> Varieties: </h1>
            <select
                onChange={props.onChange}
                className=" capitalize my-5 bg-white drop-shadow-2xl  bg-opacity-60 backdrop-blur  border-1 border-gray-800  text-gray-900 text-[14px] rounded-lg focus:ring-transparent  focus:border--gray-200   block  p-1 outline-none">
                <option disabled>Pick your pokemon varieties</option>
                {varieties.varieties.map((variety: any, index: number) => {
                    return (
                        <option className='capitalize' key={index} selected={props.name === variety.pokemon.name ? true : false} value={variety.pokemon.name}>{variety.pokemon.name}</option>
                    )
                })}
            </select>

        </div>
    )
}

export default PokemonVarieties