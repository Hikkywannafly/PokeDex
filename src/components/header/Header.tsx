
import React, { useEffect, useState, useRef } from "react";
import useScrollDirection from "../../hooks/useScrollDirection";
import * as Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;
const Header: React.FC = (props) => {
  const [scrolledToTop, setScrolledToTop] = useState<boolean>(true);
  const scrollDirection = useScrollDirection({ initialDirection: "down" });
  const [visible, setVisible] = useState<boolean>(false);
  const refScrollUp = useRef<any>(null);
  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = (event: any) => {
      if (window.scrollY > 500) {
        setVisible(true);
      }
      else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={refScrollUp}> </div>
      <header className="header-container">
        <div
          className={
            `  ${!visible ? 'transition-all bg-opacity-100' : 'bg-white bg-opacity-60 backdrop-blur '} fixed z-50 w-full   flex items-center justify-center py-2 duration-300 transform `
          }
        >
          <img
            className="w-10 h-10 transition duration-500 ease-in-out transform hover:rotate-180 cursor-pointer"
            alt="Pokeball"
            src='/pokemonheader/bg1.png'
            onClick={handleScrollUp}
          />
        </div>
      </header>
    </>
  )
};

export default Header;
