import React from 'react';

const Solution3x3 = ({ solution, applyMove, currentStep, setCurrentStep }) => {
  if (solution.length === 0) {
    return <div className="solution-3x3">No solution yet. Click "Solve" to find a solution.</div>;
  }

  return (
    <div className="solution-3x3">
      <h3>Solution ({solution.length} moves):</h3>
      <div className="move-controls">
        <button 
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="step-btn"
        >
          Previous
        </button>
        <span>Step {currentStep + 1} of {solution.length}</span>
        <button 
          onClick={() => setCurrentStep(Math.min(solution.length - 1, currentStep + 1))}
          disabled={currentStep === solution.length - 1}
          className="step-btn"
        >
          Next
        </button>
      </div>
      <div className="moves">
        {solution.map((move, index) => (
          <button 
            key={index} 
            onClick={() => {
              setCurrentStep(index);
              applyMove(move);
            }}
            className={`move-btn ${index === currentStep ? 'active' : ''}`}
          >
            {move}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Solution3x3;