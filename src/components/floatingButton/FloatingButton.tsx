import React, { useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import * as Scroll from "react-scroll";

const scroll = Scroll.animateScroll;
type Props = {

}

const FloatingButton = (props: Props) => {
    const [isActive, setIsActive] = React.useState(false)
    useEffect(() => {
        window.addEventListener('scroll', (_: Event) => {
            if (window.scrollY >= 400 && !isActive) {
                setIsActive(true);
            }

            if (window.scrollY <= 400 && isActive) {
                setIsActive(false);
            }
        })
    }, [isActive])

    return (
        <>
            <div onClick={() => scroll.scrollToTop()}
                className={` 
                focus:scale-50 focus:rotate-[3deg] focus:transform-gpu focus:shadow-2xl duration-150 ease-in-out
                ${isActive ? 'visible  opacity-100' : 'hidden opacity-0'} transform  ease-out  duration-[1.5s] fixed z-[200] hover:scale-110  bg-white right-4 bottom-4 flex cursor-pointer w-10 h-10 rounded-2xl drop-shadow-2xl justify-center items-center`}>
                <FiArrowUp className="text-black text-2xl" />
            </div>
        </>
    )
}

export default FloatingButton