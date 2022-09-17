import React from 'react'

type Props = {}

const Filter = (props: Props) => {
    return (
        <div className="search-type mb-5">
            
            <select id="countries" className=" bg-transparent bg-opacity-60 backdrop-blur  border-1 border-black  text-black text-[16px] font-bold rounded-lg focus:ring-transparent  focus:border-black  block w-36 p-0.5 outline-none">
                <option selected>Generations</option>
                <option value="US">All</option>
                <option value="CA">Generation I</option>
                <option value="CA">Generation II</option>
                <option value="CA">Generation III</option>
                <option value="CA">Generation IV</option>
                <option value="CA">Generation V</option>
                <option value="CA">Generation VI</option>
                <option value="CA">Generation VII</option>
            </select>


        </div>
    )
}

export default Filter