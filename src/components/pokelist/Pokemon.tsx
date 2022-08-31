import React from 'react'

type Props = {}

const Pokemon = (props: Props) => {
    return (
        <div className="relative bg-white rounded-2xl drop-shadow-[0_10px_10px_#ededed]
        flex-1 min-w-[30%]  flex flex-col justify-center items-center
        cursor-pointer mt-[40px] pt-[40px] pb-3
        ">
            <img className="absolute top-[-55px]" src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' alt="" />
            <span className="mb-1.5">23</span>
            <h3 className="mb-1.5"> Pikachu </h3>
            <div className="ability flex flex-row">
                <div className="bg-red-400 rounded-[5px] text-[12px] font-medium tracking-widest px-1 mx-1 items-center"> <span>Fire </span>  </div>

            </div>
        </div>

    )
}

export default Pokemon