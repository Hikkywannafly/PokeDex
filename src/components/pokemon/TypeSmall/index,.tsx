import React from 'react'
import { Tooltip, Button } from "@material-tailwind/react";
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
            <Tooltip


                placement="top"
                className='px-1 bg-red-300 rounded-md shadow-lg'
                content={` ` + `${type}` + ` `}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }}>

                <div
                    style={{ backgroundColor: typeColors[type as colors] }}
                    className={`font-[600] text-white rounded-md tracking-widest  uppercase flex justify-between text-sm p-1.5  w-auto
                    shadow-lg cursor-pointer items-center
                    hover:scale-110 hover:rotate-[3deg] hover:transform-gpu hover:shadow-2xl duration-300 ease-in-out
                    `}
                >
                    <img src={`/types/${type}.svg`} alt="React Logo" className={`${sizes === `sm` ? `w-4 h-4` : `w4 h-4`} text-white `} />
                </div>
            </Tooltip>
        </>
    )
}

export default TypeBade