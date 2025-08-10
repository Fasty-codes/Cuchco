// howtosolve3x3.jsx
import React, { useState } from 'react';
import NotationImages from '../assets/images/face-moves.png';

const notationImages = {
  AllMoves: NotationImages,
};

const HowToSolve3x3Page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [cubeState, setCubeState] = useState(initializeSolvedCube());

  const solvingSteps = [
    {
      title: "Solve the White Edge Pieces in the First Layer",
      description: "The easiest step is solving the first layer edges of the Rubik's Cube. Choose one color you want to start with. In this beginner's tutorial we're going to start with the white face. I suggest you try to solve the first face without reading these instructions, so you can feel the sense of accomplishment when you complete it all alone. This step is not so hard because you don't have to take care of so many solved cubelets yet. You can determine where a piece comes according to the colour of the center pieces which never swap places. Every edge must fit to the side center piece too. See the attached image.",
      algorithm: "Flipped Edge Algorithm - F U' R U",
      image: "https://ruwix.com/pics/solution/1.svg"
    },
    {
      title: "Solve the White Corners in the First Layer",
      description: "The next step is to solve the white corners. You can determine where a corner comes according to the colour of the center pieces which never swap places. Every corner must fit to the side center piece too. See the attached image.",
      algorithm: "Corner Rotation Algorithm - R U R' U'",
      image: "https://ruwix.com/pics/solution/3.svg"
    },
    {
      title: "Solve the Middle Layer Edges",
      description: "The next step is to solve the middle layer edges. You can determine where a piece comes according to the colour of the center pieces which never swap places. Every edge must fit to the side center piece too. See the attached image.",
      algorithm: "Middle Layer Edge Algorithm - U R U' R' U' F' U F (for right edge)\nU' L' U L U F U' F' (for left edge)",
      image: "https://ruwix.com/pics/solution/4.svg"
    },
    {
      title: "Solve the Yellow Cross",
      description: "The next step is to solve the yellow cross. You can determine where a piece comes according to the colour of the center pieces which never swap places. Every edge must fit to the side center piece too. See the attached image.",
      algorithm: "Yellow Cross Algorithm - F R U R' U' F'",
      image: "https://ruwix.com/pics/solution/5.svg"
    },
    {
      title: "Orient Yellow Edges",
      description: "The next step is to orient the yellow edges. You can determine where a piece comes according to the colour of the center pieces which never swap places. Every edge must fit to the side center piece too. See the attached image.",
      algorithm: "Yellow Edge Orientation Algorithm - R U R' U R U2 R'",
      image: "https://ruwix.com/pics/solution/6.svg"
    },
    {
      title: "Position Yellow Corners",
      description: "The next step is to position the yellow corners. You can determine where a piece comes according to the colour of the center pieces which never swap places. Every edge must fit to the side center piece too. See the attached image.",
      algorithm: "Yellow Corner Permutation Algorithm - U R U' L' U R' U' L",
      image: "https://ruwix.com/pics/solution/7.svg"
    },
    {
      title: "Orient Yellow Corners",
      description: "The next step is to orient the yellow corners. You can determine where a piece comes according to the colour of the center pieces which never swap places. Every edge must fit to the side center piece too. See the attached image.",
      algorithm: "Yellow Corner Orientation Algorithm - R' D' R D",
      image: "https://ruwix.com/pics/solution/8.svg"
    }
  ];

  function initializeSolvedCube() {
    return {
      U: Array(9).fill('white'),
      D: Array(9).fill('yellow'),
      F: Array(9).fill('blue'),
      B: Array(9).fill('green'),
      L: Array(9).fill('orange'),
      R: Array(9).fill('red')
    };
  }

  const handleNextStep = () => {
    if (currentStep < solvingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderCubeFace = (face) => {
    return (
      <div className={`cube-face ${face}`}>
        {cubeState[face].map((color, index) => (
          <div key={index} className="cube-sticker" style={{ backgroundColor: color }}></div>
        ))}
      </div>
    );
  };

  const renderNotation = (notation) => {
    if (!notation) return null;
    
    return notation.split(' ').map((move, i) => (
      notationImages[move] ? (
        <img 
          key={i} 
          src={notationImages[move]} 
          alt={move} 
          className="notation-image"
          title={move}
        />
      ) : (
        <span key={i} className="notation-text">{move}</span>
      )
    ));
  };

  return (
    <div className="rubiks-solver">
      <style jsx>{`
        .rubiks-solver {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          color: #333;
        }

        header {
          text-align: center;
          margin-bottom: 30px;
          padding: 20px;
          background: linear-gradient(135deg, #2c3e50, #3498db);
          color: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        header h1 {
          margin: 0;
          font-size: 2.5rem;
        }

        header p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .solver-container {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          margin-bottom: 40px;
        }

        .cube-display {
          flex: 1;
          min-width: 300px;
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .cube-3d {
          perspective: 1000px;
          width: 300px;
          margin: 0 auto;
        }

        .cube-top, .cube-middle, .cube-bottom {
          display: flex;
          justify-content: center;
        }

        .cube-middle {
          display: flex;
          flex-wrap: wrap;
          width: 300px;
        }

        .cube-face {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 2px;
          width: 100px;
          height: 100px;
          margin: 2px;
        }

        .cube-sticker {
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 3px;
        }

        .solving-steps {
          flex: 2;
          min-width: 300px;
          background: white;
          padding: 25px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .step-image img {
          max-width: 100%;
          height: auto;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          margin: 15px 0;
        }

        .step-algorithm {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
          border-left: 4px solid #3498db;
        }

        .algorithm-notation {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          margin-top: 10px;
        }

        .notation-image {
          width: 40px;
          height: 40px;
          transition: transform 0.2s;
        }

        .notation-image:hover {
          transform: scale(1.2);
        }

        .notation-text {
          font-family: monospace;
          font-size: 1.1rem;
        }

        .step-navigation {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }

        .step-navigation button {
          padding: 12px 24px;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.2s;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .step-navigation button:hover {
          background-color: #2980b9;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .step-navigation button:disabled {
          background-color: #95a5a6;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .cube-notation {
          margin-top: 40px;
          background: white;
          padding: 25px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .notation-images {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .notation-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          background: #f8f9fa;
          border-radius: 5px;
          transition: all 0.2s;
        }

        .notation-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .notation-item img {
          width: 60px;
          height: 60px;
          margin-bottom: 5px;
        }

        .notation-item span {
          font-weight: bold;
          font-family: monospace;
        }

        footer {
          margin-top: 50px;
          text-align: center;
          color: #7f8c8d;
          font-size: 14px;
          padding: 20px;
          border-top: 1px solid #eee;
        }

        footer a {
          color: #3498db;
          text-decoration: none;
          transition: color 0.2s;
        }

        footer a:hover {
          color: #2980b9;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .solver-container {
            flex-direction: column;
          }
          
          .cube-display {
            margin-bottom: 30px;
          }

          header h1 {
            font-size: 2rem;
          }
        }
      `}</style>

      <header>
        <h1>How to Solve a 3x3 Rubik's Cube</h1>
        <p>Step-by-step beginner's guide with visual algorithms</p>
      </header>

      <div className="solver-container">
        <div className="cube-display">
          <h2>Cube Visualization</h2>
          <div className="cube-3d">
            <div className="cube-top">{renderCubeFace('U')}</div>
            <div className="cube-middle">
              {renderCubeFace('L')}
              {renderCubeFace('F')}
              {renderCubeFace('R')}
              {renderCubeFace('B')}
            </div>
            <div className="cube-bottom">{renderCubeFace('D')}</div>
          </div>
        </div>

        <div className="solving-steps">
          <h2>Step {currentStep + 1} of {solvingSteps.length}: {solvingSteps[currentStep].title}</h2>
          
          <div className="step-image">
            <img 
              src={solvingSteps[currentStep].image} 
              alt={solvingSteps[currentStep].title}
            />
          </div>
          
          <div className="step-description">
            <p>{solvingSteps[currentStep].description}</p>
          </div>
          
          <div className="step-algorithm">
            <h3>Algorithm:</h3>
            <div className="algorithm-notation">
              {renderNotation(solvingSteps[currentStep].algorithm)}
            </div>
          </div>
          
          <div className="step-navigation">
            <button onClick={handlePrevStep} disabled={currentStep === 0}>
              ← Previous Step
            </button>
            <button 
              onClick={handleNextStep} 
              disabled={currentStep === solvingSteps.length - 1}
            >
              Next Step →
            </button>
          </div>
        </div>
      </div>

      <div className="cube-notation">
        <h2>Cube Notation Guide</h2>
        <p>These are the basic moves used in Rubik's cube algorithms:</p>
        <div className="notation-images">
          <img src={NotationImages} alt="All Moves" />
        </div>
      </div>

      <footer>
        <p>All cube notation images courtesy of <a href="https://ruwix.com/" target="_blank" rel="noopener noreferrer">Ruwix - The Rubik's Cube Website</a></p>
        <p>This guide follows the beginner's layer-by-layer method for solving the 3x3 Rubik's Cube.</p>
      </footer>
    </div>
  );
};

export default HowToSolve3x3Page;