import React, { useState } from 'react'
type Props = {
    data: any,
    handleFilter: any,
    reset: any,
}
const Filter = (props: Props) => {
    const { data, handleFilter, reset } = props;
    return (

        <>
            <select
                onChange={handleFilter}
                style={{ boxShadow: `rgb(0 0 0 / 20%) 0px 0px 1rem 0px` }}
                className=" bg-white drop-shadow-2xl  bg-opacity-60 backdrop-blur  border-1 border-gray-800  text-gray-900 text-[14px] rounded-lg focus:ring-transparent  focus:border--gray-200   block  p-1 outline-none">
                {
                    data.map((item: any) =>
                        <option
                            selected={reset && (item.name === 'All' || item.name === 'Sort by id') ? true : false}
                            key={item.name} value={item?.name}>
                            {item.name}
                        </option>
                    )
                }
            </select>

        </>
    )
}

export default Filter