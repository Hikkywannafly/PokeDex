import React, { useState, useEffect, useRef } from 'react'
import LoadingMore from '../loading/LoadingMore';
import PokemonCard from '../pokemonCard/PokemonCard';
type Props = {
    sizes: number,
    pokemonList: any
}

const InfinityScroll = (props: Props) => {
    const { sizes, pokemonList } = props;
    const [ready, setReady] = useState<boolean>(false);
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
        setReady(true);
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
        setShowList([]);
        setReady(false);
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

            {ready && showList.length > 0 && showList.length !== pokemonList.length &&
                (
                    <div className="flex justify-center items-center my-10">
                        <LoadingMore />
                        <div ref={setNode} ></div>
                    </div>
                )

            }
            {!ready &&
                (
                    <div className="flex justify-center items-center my-10">
                        <LoadingMore />
                    </div>
                )

            }

            {
                ready && pokemonList.length === 0 && showList.length === 0 && (
                    <div className="flex flex-col justify-center items-center my-20">
                        <img
                            className=" transition duration-500 ease-in-out transform cursor-pointer w-20 h-20 mb-5"
                            alt="Pokeball"
                            src='https://i.pinimg.com/originals/fe/61/dc/fe61dc2b7ef08a538b906eced7fa5cb5.gif'
                        />
                        <h1 className="text-center text-lg font-bold"> NO POKEMON FOUND</h1>
                    </div>
                )
            }

        </>
    )
}
export default InfinityScroll