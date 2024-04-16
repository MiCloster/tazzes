import React from 'react';
import "../styles/animation.css";

export const Preloader = () => {
  return (
    <div className='preloader-container'>
      <main className='main-preloader'>
        <div className="mugContainer">
          <div className="mug">
            <div className="coffee"></div>
            <div className="tazzez-text">TAZZES</div> 
          </div>
        </div>
      </main>
    </div>
  );
};
