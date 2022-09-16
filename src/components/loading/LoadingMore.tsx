import * as React from 'react';

interface ILoadingProps {
}

const LoadingMore: React.FC = (props) => {
  return (
    <>
      <div className="flex justify-center h-[30px] w-full ">
        <div className=" w-20 h-20">
          <img
            className=" transition duration-500 ease-in-out transform cursor-pointer"
            alt="Pokeball"
            src='https://i.pinimg.com/originals/fe/61/dc/fe61dc2b7ef08a538b906eced7fa5cb5.gif'
          />
          <div className="mt-5 ml-5 text-lg font-bold"> Loading
          </div>
        </div>
      </div>

    </>
  );
};

export default LoadingMore;
