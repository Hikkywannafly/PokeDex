import React, { useState, useEffect, useRef } from 'react'
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

    const sliceNewPage = (page: number, listUpdate: any) => {
        const newPage = pokemonList.slice(
            page === 1 ? 0 : (page - 1) * sizes,
            page * sizes
        )
        listUpdate ?
            setShowList([...newPage]) :
            setShowList([...showList, ...newPage])

        console.log(newPage);
    }

    const handelObserver = (entries: any) => {
        const {
            isIntersecting,
            boundingClientRect,
            intersectionRatio
        } = entries[0];
        if (isIntersecting &&
            intersectionRatio === 1 &&
            boundingClientRect.y > prevY) {
            setPrevY(boundingClientRect.y - 100)
            setCurrentPage(currentPage + 1);
        }
    }
    useEffect(() => {
        setShowList([]);
        setPrevY(0);
        if (currentPage !== 1) {
            setCurrentPage(1);
        } else {
            sliceNewPage(currentPage, true);
            console.log('currentPage1', currentPage);
        }
    }, [pokemonList]);

    useEffect(() => {
        console.log('currentPage', currentPage);
        if (showList.length > 0) {
            console.log('showList', showList);
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 1,
            };
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver(handelObserver, options);

            const { current: currentObserver } = observer

            if (node) observer.current.observe(node);

            return () => currentObserver.disconnect()
        }
    }, [node, currentPage]);

    useEffect(() => {
        sliceNewPage(currentPage, false)
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
            <div ref={setNode}> ds</div>
        </>
    )
}
export default InfinityScroll