import React from 'react'
import { typeColors } from '../../globals'
import { IPokemon } from '../..//IPokemon'
type colors = keyof typeof typeColors;
const Pokemon = ({ id, name, url, type }: IPokemon) => {

    return (
        <div className="relative bg-white rounded-2xl drop-shadow-[0_10px_10px_#ededed]
        flex-1 min-w-[30%] 2xl:min-w-[20%] normal-case  flex flex-col justify-center items-center
        cursor-pointer mt-[40px] pt-[45px] pb-3  group hover:drop-shadow-xl
        ">
            <img className="absolute top-[-55px] group-hover:scale-125  ease-in duration-150 " src={url} alt="" />
            <span className="mb-1 text-sm text-gray-600 "> Nº{id}</span>
            <h3 className="mb-2 capitalize font-[700]  "> {name} </h3>
            <div className="ability flex flex-row mb-1.5 ">

                {type.map((item: any) => {
                    const myItem = item as colors;
                    let color = '';
                    typeColors.hasOwnProperty(item) ? color = typeColors[myItem] as colors : color = '';
                    return <div key={item} style={{ backgroundColor: color }}
                        className='font-[700] opacity-[0.8] rounded-[5px] text-[11px]  tracking-widest px-1 mx-1 flex items-center uppercase'> <span> {item} </span>
                    </div>
                })}

            </div>
        </div>

    )
}

export default Pokemon