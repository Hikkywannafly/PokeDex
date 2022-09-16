import * as React from 'react';

interface ILoadingProps {
}

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
  return (
    <>
      <div className="loading">
        <h1> Loading </h1>
      </div>
    </>
  );
};

export default Loading;
