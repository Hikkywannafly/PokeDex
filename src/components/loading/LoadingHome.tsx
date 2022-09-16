import React from 'react'

type IProps = {
    loading: boolean,
}

const LoadingHome = ({ loading }: IProps) => {
    return (
        <>

            <div className={` ${loading ? null : 'animate-aniLoad'}  absolute w-screen h-screen flex flex-col items-center justify-center z-[1000] bg-white `}>
                <div className="">
                    <img src="/pokemonheader/log2.png" className=" animate-spin w-16 h-16" alt="pokeball "></img>
                </div>

                <div className="mt-5 text-lg font-bold"> Loading
                </div>
            </div>

        </>
    )
}

export default LoadingHome