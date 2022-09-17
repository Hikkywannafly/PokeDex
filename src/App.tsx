
import PokeDex from './container/PokeDex';
import React, { useEffect, useState } from 'react'
import FloatingButton from './components/floatingButton/FloatingButton';
import Header from './components/header/Header';
import { useAppDispatch } from './hooks/useType'
import { getPokemonList } from './features/PokemonSlice';
import { useSelector } from 'react-redux';
import LoadingHome from './components/loading/LoadingHome';
import { startLoading, stopLoading } from './features/PokemonSlice';
const App: React.FC = () => {
  const [isLoadingHome, setIsLoadingHome] = useState(true);
  const dispatch = useAppDispatch();
  const pokemonState = useSelector((state: any) => state)
  const { isLoading, pokemonLength } = pokemonState
  useEffect(() => {
    if (pokemonLength === 0 && isLoading) {
      dispatch(getPokemonList());
    }
    setTimeout(() => {
      setIsLoadingHome(isLoading);
    }, 1000)
  }, [pokemonLength]);
  useEffect(() => {
    console.log('test')
    if (pokemonLength && isLoading) dispatch(stopLoading(1))
    // on unmount
    return () => {
      dispatch(startLoading())
    }
  }, [])
  return (
    <>
      <div className="bg-[#f6f8fc]">
        <FloatingButton />
        <Header />
        <LoadingHome loading={isLoadingHome} />
        <div className="w-full  bg-[#f6f8fc] m-0 p-0 font-fira ">
          <PokeDex />
        </div>
      </div>
    </>
  );
}

export default App;
