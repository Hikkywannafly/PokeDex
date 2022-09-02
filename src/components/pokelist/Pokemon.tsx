import React from 'react'

interface Props {
    id: number;
    name: string;
    url: string;
    type: [];
}
const typeColors = {
    normal: '#BCBCAC',
    fighting: '#BC5442',
    flying: '#669AFF',
    poison: '#AB549A',
    ground: '#DEBC54',
    rock: '#BCAC66',
    bug: '#ABBC1C',
    ghost: '#6666BC',
    steel: '#ABACBC',
    fire: '#FF421C',
    water: '#2F9AFF',
    grass: '#78CD54',
    electric: '#FFCD30',
    psychic: '#FF549A',
    ice: '#78DEFF',
    dragon: '#7866EF',
    dark: '#785442',
    fairy: '#FFACFF',
    shadow: '#0E2E4C'
};
type colors = keyof typeof typeColors;
const Pokemon: React.FC<Props> = (props) => {
    const { id, name, url, type } = props;
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