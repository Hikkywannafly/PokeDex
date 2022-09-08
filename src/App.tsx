
import PokeDex from './container/PokeDex';
import React, { useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import FloatingButton from './components/floatingButton/FloatingButton';
import Header from './components/header/Header';
type Props = {}
const App: React.FC = () => {

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
