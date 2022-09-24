import React from 'react'

type Props = {
    Category: any;
    Generation: any;
    Weight: string;
    Height: String;
    Abilities: any;
    Shape: any;
    Color: any;
    description: any;
}

const PokemonInfo = (props: Props) => {
    const { Category, Generation, Weight, Height, Abilities, Shape, Color, description } = props;
    const flavorText = (data: any) => {
        return data.length
            ? data
                .replace(/u'\f'/, /u'\n'/)
                .replace(/\u00AD/g, '')
                .replace(/\u000C/g, ' ')
                .replace(/u' -\n'/, ' - ')
                .replace(/u'-\n'/, '-')
                .replace(/(\r\n|\n|\r)/gm, ' ')
            : 'No description available for currently selected generation.'
    }
    const pokemonWeight = (currWeight: any) =>
        `${currWeight / 10} kg ( ${Math.round(currWeight * 2.2046) / 10} lbs )`

    // height
    const pokemonHeight = (currHeight: any) => {
        // calculate height in feet
        const heightInFeet = Math.round(currHeight * 3.2808) / 10
        // split number
        const numbers = heightInFeet.toString().split('.')
        // return string
        return `${currHeight / 10} m ( ${numbers[0] || '0'}'${numbers[1] || '0'}" )`
    }
    return (
        <div>
            <div className="flex flex-col justify-center">
                <h1 className=' px-6 text-xl font-bold'> ABOUT</h1>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 py-4 inline-block min-w-full sm:px-6 lg:px-8 overflow-hidden">

                    <table className="min-w-full text-left">
                        <tbody>
                            <tr className="border-b">
                                <td colSpan={2} className="px-6 py-4  text-base font-medium text-gray-900">
                                    {flavorText(description[1].flavor_text)}
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-6 py-4 w-10 whitespace-nowrap text-sm font-light text-gray-900">Generation</td>
                                <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap capitalize">
                                    {Generation.name}
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900">Category</td>
                                <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                    {Category[7].genus}  ( {Category[8].genus} )
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900">Abilities</td>
                                <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap flex flex-col">
                                    {Abilities.map((item: any, index: number) => (
                                        <span key={index} className={`capitalize ${!item.is_hidden ? 'font-[800]' : ''}`}>
                                            {index + 1} .   {item.ability.name} {item.is_hidden ? '(hidden ability)' : ''}
                                        </span>
                                    ))}

                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900">Weight</td>
                                <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                    {pokemonWeight(Weight)}
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900">Height</td>
                                <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                    {pokemonHeight(Height)}
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900">Shape</td>
                                <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap capitalize">
                                    {Shape.name}
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900">Color</td>
                                <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap capitalize">
                                    {Color.name}
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>
        </div>
    )
}

export default PokemonInfo