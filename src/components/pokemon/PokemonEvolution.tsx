import React from 'react'
import Evolution from './Evolution'
type Props = {
    data: any
}

const PokemonEvolution = (props: Props) => {
    const { data } = props;
    const [evolutionChain, setEvolutionChain] = React.useState<any>([]);
    const [evolutionChainLv, setEvolutionChainLv] = React.useState<any>([]);

    const evolutionGet = (data: any) => {
        const chain: any = [];
        const lvs: any = [];
        const recurse = (data: any) => {
            if (data.evolves_to.length) {
                chain.push(data.species);
                if (data.evolution_details[0]) lvs.push(data.evolution_details[0]);

                recurse(data.evolves_to[0]);
            } else {
                chain.push(data.species);
                lvs.push(data.evolution_details[0]);
            }
        }
        recurse(data.chain);
        setEvolutionChain(chain);
        setEvolutionChainLv(lvs);
    }
    React.useEffect(() => {
        evolutionGet(data);
    }, [])
    React.useEffect(() => {
        // console.log(evolutionChain);
    }, [evolutionChain])
    return (
        <div className=" p-4 w-full flex flex-col justify-center  items-center ">
            <h1 className=' uppercase bg-clip-text  text-transparent rounded-xl drop-shadow-2xl animate-text bg-gradient-to-r from-blue-300 to-red-300 via-yellow-300 px-6 text-xl font-bold m-3'>Pokemon Evolution</h1>
            <div className="flex flex-col md:flex-row items-center  justify-center text-center gap-10">
                {evolutionChain.length > 0 && evolutionChain.map((data: any, index: number) => {
                    return (

                        <>

                            <Evolution data={data} key={index} />
                            <div key={index + '2'} className="">
                                {evolutionChainLv[index] &&
                                    <div key={index + 'asd'} className="flex flex-col justify-center items-center w-32">
                                        <span key={index + '6'} className="text-sm font-semibold text-black text-opacity-80 pointer-events-none capitalize">{evolutionChainLv[index].trigger.name}</span>
                                        <span key={index + '0'} className="text-sm font-semibold text-red-400 text-opacity-80 pointer-events-none">Lv {evolutionChainLv[index].min_level ? evolutionChainLv[index].min_level : '???'}</span>
                                    </div>
                                }

                            </div>


                        </>
                    )

                })}


            </div>
        </div>
    )
}

export default PokemonEvolution