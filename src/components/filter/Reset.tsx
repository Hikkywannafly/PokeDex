import React from 'react'
import { GrPowerReset } from 'react-icons/gr'
type Props = {
    handleReset: any,
}

const Reset = (props: Props) => {
    const { handleReset } = props;
    return (
        <>
            <button
                onClick={handleReset}
                style={{ boxShadow: `rgb(0 0 0 / 20%) 0px 0px 1rem 0px` }}
                type="submit" className=" p-2 
        text-sm font-medium text-white bg-[#e5e5e5] rounded-lg border
         hover:bg-blue-400 duration-150 
      focus:outline-none
         ">
                <GrPowerReset className="w-4 h-4" />
                <span className="sr-only ">Search</span>
            </button>
        </>
    )
}

export default Reset