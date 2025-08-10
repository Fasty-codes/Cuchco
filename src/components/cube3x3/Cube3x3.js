import React from 'react';
// import './Cube3x3.css';

const Cube3x3 = ({ cubeState }) => {
  return (
    <div className="cube-container">
      <div className="cube-3x3">
        {/* Up face */}
        <div className="face up">
          {cubeState.U.map((color, index) => (
            <div key={`U-${index}`} className="sticker" style={{ backgroundColor: color }} />
          ))}
        </div>
        
        {/* Left face */}
        <div className="face left">
          {cubeState.L.map((color, index) => (
            <div key={`L-${index}`} className="sticker" style={{ backgroundColor: color }} />
          ))}
        </div>
        
        {/* Front face */}
        <div className="face front">
          {cubeState.F.map((color, index) => (
            <div key={`F-${index}`} className="sticker" style={{ backgroundColor: color }} />
          ))}
        </div>
        
        {/* Right face */}
        <div className="face right">
          {cubeState.R.map((color, index) => (
            <div key={`R-${index}`} className="sticker" style={{ backgroundColor: color }} />
          ))}
        </div>
        
        {/* Back face */}
        <div className="face back">
          {cubeState.B.map((color, index) => (
            <div key={`B-${index}`} className="sticker" style={{ backgroundColor: color }} />
          ))}
        </div>
        
        {/* Down face */}
        <div className="face down">
          {cubeState.D.map((color, index) => (
            <div key={`D-${index}`} className="sticker" style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cube3x3;