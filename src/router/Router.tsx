import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import PokeDex from '../container/PokeDex';
import PokemonDetail from '../container/PokemonDetail';
import NotFound from '../container/_404';
import { useParams } from 'react-router-dom';
import { useLocation } from "react-router";
export const RouterPoke = () => {
    const { pokemon } = useParams();
    const location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
        if (location.pathname === '/poke') {
            console.log('home')
        }
    }, [location]);
    return (
        <Routes>
            <Route path="/" element={<PokeDex />} />
            <Route path="/pokemon/:pokemon" element={<PokemonDetail />} />
            <Route path="*" element={< NotFound />} />
        </Routes >
    )
} 