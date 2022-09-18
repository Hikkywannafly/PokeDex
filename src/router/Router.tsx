import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PokeDex from '../container/PokeDex';
import PokemonDetail from '../container/PokemonDetail';

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<PokeDex />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes >
    )
} 