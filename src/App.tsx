
import PokeDex from './container/PokeDex';
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import FloatingButton from './components/floatingButton/FloatingButton';
import Header from './components/header/Header';
import { useAppDispatch } from './hooks/useType'
import { getPokemonList } from './features/PokemonSlice';
import { useSelector } from 'react-redux';
import LoadingHome from './components/loading/LoadingHome';
import { startLoading, stopLoading } from './features/PokemonSlice';
import { RouterPoke } from './router/Router';
const App: React.FC = () => {
    const [isLoadingHome, setIsLoadingHome] = useState(true);
    const dispatch = useAppDispatch();
    const pokemonState = useSelector((state: any) => state.home)
    const { isLoading, pokemonLength } = pokemonState
    useEffect(() => {
        if (pokemonLength === 0 && isLoading) {
            dispatch(getPokemonList());
        }
        setTimeout(() => {
            setIsLoadingHome(isLoading);
        }, 1500)
    }, [pokemonLength]);
    useEffect(() => {
        if (pokemonLength && isLoading) dispatch(stopLoading(1))
        // on unmount
        return () => {
            dispatch(startLoading());
        }
    }, [])
    return (
        <>
            <Header />
            <div className="bg-[#f6f8fc]">
                <FloatingButton />
                <LoadingHome loading={isLoadingHome} />
                <div className="w-full bg-[#f6f8fc] m-0 p-0 font-fira ">
                    <BrowserRouter>
                        <RouterPoke />
                    </BrowserRouter>
                    {/* <PokeDex /> */}
                </div>
            </div>
        </>
    );
}

export default App;