import React from 'react'
import { typeColors, PokemonTypeColors } from '../../../globals';
type colors = keyof typeof typeColors;
type Props = {
    type: string,
    sizes?: string,
}

const TypeBade = (props: Props) => {
    const { type, sizes } = props;
    return (
        <>
            <div
                style={{ backgroundColor: typeColors[type as colors] }}
                className={`font-[600] text-white rounded-md tracking-widest  uppercase flex justify-between ${sizes === `sm` ? `text-[12px] p-1 pr-1.5` : `text-sm p-1.5 pr-2`} w-auto
                    shadow-lg cursor-pointer
                    hover:scale-110 hover:rotate-[3deg] hover:transform-gpu hover:shadow-2xl duration-300 ease-in-out
                    `}
            >
                <img src={`/types/${type}.svg`} alt="React Logo" className={`${sizes === `sm` ? `w-4 h-4` : `w5 h-5`} text-white mr-1.5`} />
                <span className=''>{type}</span>
            </div>

        </>
    )
}

export default TypeBade