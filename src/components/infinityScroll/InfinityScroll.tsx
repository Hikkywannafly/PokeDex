import React, { useState, useEffect, useRef } from 'react'
import { setTimeout } from 'timers/promises';
import PokemonCard from '../pokemonCard/PokemonCard';
type Props = {
    sizes: number,
    pokemonList: any
}

const InfinityScroll = (props: Props) => {
    const { sizes, pokemonList } = props;

    const [currentPage, setCurrentPage] = useState(1);
    const [prevY, setPrevY] = useState(1);
    const [showList, setShowList] = useState<any>([]);
    const [node, setNode] = useState<any>(null);
    const observer = useRef<IntersectionObserver | null>(null);
    // slice the page 
    const sliceNewPage = (page: number, listUpdate: boolean) => {
        const newPage = pokemonList.slice(
            page === 1 ? 0 : (page - 1) * sizes,
            page * sizes
        )
        console.log(`set New Page`, newPage);
        listUpdate ?
            setShowList([...newPage]) :
            setShowList([...showList, ...newPage])


    }

    const handelObserver = (entries: any) => {
        const {
            isIntersecting,
            boundingClientRect,
            intersectionRatio
        } = entries[0];
        console.log('>>check boudingClientRect , ', boundingClientRect.y)
        console.log('>>check prevY , ', prevY)
        if (isIntersecting &&
            intersectionRatio === 1 &&
            boundingClientRect.y > prevY) {

            console.log('boundingClientRect', boundingClientRect.y)

            console.log('preY', prevY)

            setPrevY(boundingClientRect.y - 100)
            setCurrentPage(currentPage + 1);
            console.warn(`run handelObserver`);

        }
    }
    useEffect(() => {
        if (pokemonList.length > 0) {
            setShowList([]);

            setPrevY(0);

            if (currentPage !== 1) {
                console.log('>>check currentPage khavc', currentPage)
                setCurrentPage(1);

            } else {
                console.log('current page start', currentPage);
                sliceNewPage(currentPage, true);
                console.log('inital start currentPage', currentPage);
            }
        }
    }, [pokemonList]);

    useEffect(() => {
        console.log(`node`, node)
        if (showList.length > 0) {
            console.log('disconnect page current ', currentPage);
            console.log('showList', showList);
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 1,
            };
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver(
                handelObserver,
                options
            );

            const { current: currentObserver } = observer

            if (node) observer.current.observe(node);

            return () => {
                if (currentObserver) currentObserver.disconnect();
            };
        }
    }, [currentPage, node]);
    useEffect(() => {
        sliceNewPage(currentPage, false);
    }, [currentPage]);

    return (
        <>
            <div className="pokemon-list flex flex-row flex-wrap gap-8 lg:gap-10 w-ful  ">
                {
                    showList.map((pokemon: any) => (
                        <PokemonCard key={pokemon.id} data={pokemon} />
                    ))
                }
            </div>
            {/* <div ref={setNode}>Loading...</div> */}
            {showList.length > 0 && showList.length !== pokemonList.length &&
                (<div ref={setNode}>Loading...</div>)
            }

        </>
    )
}
export default InfinityScroll