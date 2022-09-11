
import PokeDex from './container/PokeDex';
import React, { useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import FloatingButton from './components/floatingButton/FloatingButton';
import Header from './components/header/Header';
import { Provider } from 'react-redux';
import { useAppDispatch } from './hooks/useType'
import { getPokemonList } from './features/PokemonSlice';
type Props = {}
const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPokemonList());
  }, [])
  return (
    <>

      <FloatingButton />
      <Header />
      <div className="w-full  m-0 p-0 font-fira ">
        <PokeDex />
      </div>

    </>
  );
}

export default App;
