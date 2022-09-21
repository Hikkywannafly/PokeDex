
import React, { useEffect, useState, useRef } from "react";
import * as Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;
const Header: React.FC = (props) => {
  const [scrolledToTop, setScrolledToTop] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(false);
  const refScrollUp = useRef<any>(null);
  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {

  }, []);
  return (
    <>
      <div ref={refScrollUp}> </div>
      <header className="header-container">
        <div
          className={
            "fixed z-50 w-full bg-opacity-20 backdrop-blur flex items-center justify-center py-2 transition-all duration-300 transform"
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
