import React from 'react'

type Props = {
    data: any
}

const PokemonStats = (props: Props) => {
    const { data } = props;
    return (
        <div>
            <h1 className='px-6 text-xl font-bold'> Pokemon Stats</h1>
            <div className="flex justify-start items-start ">

                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 py-4 inline-block min-w-full sm:px-6 lg:px-8 overflow-hidden">

                    <table className="min-w-full text-left">
                        <tbody>
                            {data.map((item: any, index: number) => (
                                <tr key={index} className="border-b">
                                    <td className="px-6 py-4 w-10 whitespace-nowrap text-sm font-light text-gray-900 capitalize">{item.stat.name}</td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap capitalize">
                                        {item.base_stat}
                                    </td>
                                    <td className="w-[170px]  md:w-[550px] max-h-2">
                                        <div className="bg-gray-200 h-2 rounded-full">
                                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${item.base_stat / 4}%` }}></div>
                                        </div>

                                    </td>
                                </tr>
                            ))}
                            {/* 
                            <tr className="border-b">
                                <td className="px-6 py-4 w-10 whitespace-nowrap text-sm font-light text-gray-900 capitalize">Total</td>
                                <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap capitalize">
                                    {data.map((item: number, index: number) => (
                                        item.base_stat + index
                                    ))}
                                </td>

                            </tr> */}
                        </tbody>
                    </table>


                </div>
            </div>
        </div>
    )
}

export default PokemonStats