import React from 'react'

type IProps = {
    loading: boolean,
}

const LoadingHome = ({ loading }: IProps) => {
    return (
        <>
            <div className={` ${loading ? null : 'animate-aniLoad '} absolute w-screen h-screen flex items-center justify-center z-[1000] bg-white `}>
                <img src="/pokemonheader/log2.png" className=" animate-spin w-16 h-16" alt="pokeball "></img>
            </div>
        </>
    )
}

export default LoadingHome