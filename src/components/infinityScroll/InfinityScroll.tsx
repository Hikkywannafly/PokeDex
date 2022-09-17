import React, { useState, useEffect, useRef } from 'react'
import LoadingMore from '../loading/LoadingMore';
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
        if (isIntersecting &&
            intersectionRatio === 1 &&
            boundingClientRect.y > prevY) {
            setPrevY(boundingClientRect.y - 50)
            setCurrentPage(currentPage + 1);
        }
    }
    useEffect(() => {
        // if (pokemonList.length > 0) {
        console.log(`change`);
        setShowList([]);

        setPrevY(0);

        if (currentPage !== 1) {
            setCurrentPage(1);
        } else {
            setTimeout(() => {
                sliceNewPage(currentPage, true);
            }, 1200);
        }
        // }
    }, [pokemonList]);

    useEffect(() => {
        if (showList.length > 0) {
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
            <div className="pokemon-list  grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 w-ful  ">
                {
                    showList.map((pokemon: any) => (
                        <PokemonCard key={pokemon.id} data={pokemon} />
                    ))
                }
            </div>

            {showList.length > 0 && showList.length !== pokemonList.length &&
                (
                    <div className="flex justify-center items-center my-10">
                        <LoadingMore />
                        <div ref={setNode} ></div>
                    </div>
                )

            }

        </>
    )
}
export default InfinityScroll