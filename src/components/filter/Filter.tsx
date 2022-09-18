import React, { useState } from 'react'
type Props = {
    data: any,
    handleFilter: any
}
const Filter = (props: Props) => {
    const { data, handleFilter } = props;
    return (

        <>
            <select
                onChange={handleFilter}
                className=" bg-white drop-shadow-2xl bg-opacity-60 backdrop-blur  border-[1.5px] border-gray-200  text-gray-900 text-[14px] rounded-lg focus:ring-transparent  focus:border--gray-200   block  p-1 outline-none">
                {
                    data.map((item: any) =>
                        <option key={item.name} value={item?.name}>{item.name}</option>
                    )
                }
            </select>

        </>
    )
}

export default Filter