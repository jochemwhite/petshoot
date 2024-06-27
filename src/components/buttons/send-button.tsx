import React from "react";

const SendButton: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-blue-100 to-white h-screen w-screen overflow-hidden">
      <button className="relative w-72 h-22 bg-blue-900 rounded-lg transform -translate-y-1/2 p-0 border-none flex justify-center cursor-pointer">
        <p className="absolute z-10 top-1/2 transform -translate-y-1/2 text-center text-xl text-blue-100">SEND</p>
        <svg version="1.1" className="absolute w-1/5 left-1/2 top-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 38">
          <g>
            <path
              className="fill-current text-blue-900"
              d="M20.8,31.6c3.1-0.7,2.9-2.3,2,1c9.1,4.4,20.4,3.7,29.1-0.8l0,0c0.7-2.1,1-3.9,1-3.9c0.6,0.8,0.8,1.7,1,2.9
                  c4.1-2.3,7.6-5.3,10.2-8.3c0.4-2.2,0.4-4,0.4-4.1c0.6,0.4,0.9,1.2,1.2,2.1c4.5-6.1,5.4-11.2,3.7-13.5c1.1-2.6,1.6-5.4,1.2-7.7
                  c-0.5,2.4-1.2,4.7-2.1,7.1c-5.8,11.5-16.9,21.9-30.3,25.3c13-4,23.6-14.4,29.1-25.6C62.8,9,55.6,16.5,44.7,20.7
                  c2.1,0.7,3.5,1.1,3.5,1.6c-0.1,0.4-1.3,0.6-3.2,0.4c-7-0.9-7.1,1.2-16,1.5c1,1.3,2,2.5,3.1,3.6c-1.9-0.9-3.8-2.2-5.6-3.6
                  c-0.9,0.1-10.3,4.9-22.6-12.3C5.9,17.7,11.8,26.9,20.8,31.6z"
            />
          </g>
        </svg>
        {/* Birds */}
        {[...Array(30)].map((_, i) => (
          <span key={i} className={`bird bird--${i + 1} absolute bg-no-repeat bg-center bg-contain`}></span>
        ))}
      </button>
    </div>
  );
};

export default SendButton;
