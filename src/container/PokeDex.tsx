import React from 'react'
import Header from '../components/header/Header';
import Search from '../components/search/Search';
import Pokemon from '../components/pokelist/Pokemon';
import PokemonDetail from '../components/pokelist/PokemonDetail';
type Props = {}

const PokeDex = (props: Props) => {
    return (
        <>
            <div className="bg-container w-screen h-screen m-0 p-0 font-fira">

                <div style={{ backgroundImage: 'url(./pokemonheader/pokeball-icon.png)', backgroundRepeat: `no-repeat`, backgroundPositionX: `-180px`, backgroundPositionY: `-80px` }}
                    className=" flex flex-col px-[4vw] lg:px-[8vw] w-full z-10 bg-[#f6f8fc] h-full">
                    <header className="header-container my-5">
                        <Header />
                    </header>
                    <main className="main-container flex flex-row">
                        <div className="main-display mb-5 flex-1">
                            <div className="mobi">
                                <div className="search">
                                    <Search />
                                </div>
                                <div className="search-type mb-5">
                                    comming soon
                                </div>
                                <div className="pokemon-list flex flex-row flex-wrap gap-8  w-ful  ">
                                    <Pokemon />
                                    <Pokemon />
                                    <Pokemon />
                                    <Pokemon />
                                </div>
                            </div>
                            <div className="show-detail">

                            </div>
                        </div>
                        <div className="show-pokemon-detail hidden md:block ">
                            <PokemonDetail />
                        </div>
                    </main>

                </div>

            </div>
        </>
    )
}

export default PokeDex