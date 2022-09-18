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
                type="submit" className=" p-2 top-2.5 right-3
        text-sm font-medium text-white bg-[#c5c5c5] rounded-lg border
         hover:bg-blue-400 duration-150 
         drop-shadow-[0_10px_10px_#ededed]  focus:outline-none
         ">
                <GrPowerReset className="w-4 h-4" />
                <span className="sr-only">Search</span>
            </button>
        </>
    )
}

export default Reset