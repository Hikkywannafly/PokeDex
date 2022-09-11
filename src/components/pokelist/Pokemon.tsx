import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { typeColors, backgroundColor } from '../../globals'
import { IPokemon } from '../../IPokemon';
// import { startLoading, stopLoading } from '../../store/pokemonSlice';
type colors = keyof typeof typeColors;
type bg = keyof typeof backgroundColor;


const Pokemon: React.FC = () => {

    // const pokemon = useSelector((state: any) => state.pokemon);
    const dispatch = useDispatch()
    const [showPokemon, setShowPokemon] = useState<IPokemon[]>([]);
    const pokemonState = useSelector((state: any) => state.pokemon)
    const { isLoading, pokemonLength, pokemon } = pokemonState
    useEffect(() => {
        // if (pokemonLength && isLoading) dispatch(stopLoading())
        // // on unmount
        // return () => {
        //     dispatch(startLoading())
        // }
    }, []);
    // useEffect(() => {
    //     setShowPokemon(pokemon);
    //     console.log(pokemon);
    // }, [pokemon])
    return (
        // <div
        //     style={{ boxShadow: `${backgroundColor[type[0] as bg]} 0px 0px 1.25rem 0px`, background: `linear-gradient(${backgroundColor[type[0] as bg]}, ${backgroundColor[type[0] as bg] || backgroundColor[type[0] as bg]})` }}
        //     className="relative rounded-xl drop-shadow-[0px_0px_1.25rem_0px_red]  
        //     flex-1 min-w-[30%] md:min-w-[30%] lg:min-w-[30%] 2xl:min-w-[20%] normal-case  flex flex-col justify-between items-center cursor-pointer mt-[10px] pt-6 pb-3  group hover:rounded-[20px] duration-500 hover:drop-shadow-[0px_0px_1.25rem_0px_red]  hover:translate-y-[-10px]  ">
        //     <div className="flex justify-items-end">
        //         <span className=" text-xl font-semibold text-black text-opacity-25 pointer-events-none absolute top-3 left-3"> Nº {id}</span>
        //     </div>
        //     <div className=" flex justify-center">
        //         <img className="group-hover:animate-newton w-[50%] ease-in duration-150 z-10 my-4" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt="" />
        //     </div>
        //     <div className="flex flex-col justify-center items-center">
        //         <h3 className="mb-3 capitalize font-[700] text-xl lg:text-2xl "> {name} </h3>
        //         <div className="ability flex flex-row mb-1.5 ">
        //             {type.map((item: any) =>
        //                 <div key={item} style={{ backgroundColor: typeColors[item as colors] }}
        //                     className='font-[700] opacity-[0.8] rounded-[5px] text-[11px] tracking-widest px-1 mx-1 flex items-center uppercase'> <span> {item} </span>
        //                 </div>
        //             )}
        //         </div>
        //     </div>
        // </div>
        <>

            {/* <h1>{showPokemon.pokemon}</h1> */}

        </>

    )
}

export default Pokemon