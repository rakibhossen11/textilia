import React from 'react';

const Collection = () => {
    return (
        <section className="px-[60px]">
        <div className="bg-fixed bg-center h-screen flex items-center justify-center">
          <div
            className="w-full h-[50%] absolute bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${hero})` }}
          ></div>
          <div className="relative z-10 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">Your Website Title</h1>
            <p className="text-lg">Your website content goes here...</p>
          </div>
        </div>
      </section>
    );
};

export default Collection;