import React from 'react'

type Props = {}
const Search: React.FC = (props: Props) => {
    return (
        <>
            <div className="search  mb-10">
                <div className="w-full">
                    <div className="flex">

                        <div className="relative w-full flex-1">
                            <input type="search" id="search-dropdown" className="outline-none drop-shadow-[0_10px_10px_#ededed] lg:p-4  p-3 block  w-full z-20 text-sm lg:text-base text-gray-900  rounded-lg   hover:drop-shadow-[1px_1px_3px_#acd6ff] duration-150 " placeholder="Search your Pokemon" required>
                            </input>
                            <button type="submit" className="absolute p-1 top-2 right-2  lg:p-2 lg:top-2.5 lg:right-3
                        text-sm font-medium text-white bg-[#ff5350] rounded-lg border
                         hover:bg-blue-800 duration-150 focus:ring-4  focus:ring-blue-300
                         drop-shadow-[5px_5px_15px_#ff535088] focus:shadow-outline-blue focus:outline-none
                         ">
                                <img src='./pokemonheader/pokeball-icon.png' alt="pic" className="w-4 h-4"></img>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        //p-2 top-3 right-2
    )
}

export default Search