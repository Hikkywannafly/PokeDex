import React from 'react';
import HeaderRow from './HeaderRow';

const data = [
  { name: 'Home', link: '/pokemonheader/log1.png' },
  { name: 'PokeDex', link: '/pokemonheader/log2.png' },
  { name: 'VideoGames', link: '/pokemonheader/log3.png' },
  { name: 'TV Pokemon', link: '/pokemonheader/log1.png' },
  { name: 'Play! Pokemon', link: '/pokemonheader/log1.png' },
  { name: 'New', link: '/pokemonheader/log1.png' },
]
const Header: React.FC = (props) => {
  return (
    <>
      <div className="rounded-lg w-full h-16 bg-white drop-shadow-xl flex flex-row justify-between 
      items-center sm:text-[12px] sm:p-4 lg:px-4 lg:py-8 lg:text-base md:text-xs p-3 text-base font-semibold text-gray-500  ">
        {data.map((item, index) => {
          return <HeaderRow key={index} name={item.name} link={item.link} />
        })}
      </div>

    </>
  )
};

export default Header;
