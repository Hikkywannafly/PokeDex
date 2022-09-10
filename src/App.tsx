
import PokeDex from './container/PokeDex';
import React, { useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import FloatingButton from './components/floatingButton/FloatingButton';
import Header from './components/header/Header';
import store from './store/store';
import { Provider } from 'react-redux';
import getAllPokemonList from './store/pokemonSlice';

type Props = {}
const App: React.FC = () => {
  useEffect(() => {

    store.dispatch(getAllPokemonList())

  }, [])
  return (
    <>
      <Provider store={store}>
        <FloatingButton />
        <Header />
        <div className="w-full  m-0 p-0 font-fira ">
          <PokeDex />
        </div>
      </Provider>
    </>
  );
}

export default App;
