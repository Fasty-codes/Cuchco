import React from 'react';

const Controls3x3 = ({ 
  applyMove, 
  scramble, 
  solve, 
  reset, 
  undo, 
  redo, 
  isSolving,
  setManualInput
}) => {
  const moves = ['U', 'D', 'L', 'R', 'F', 'B', 'U\'', 'D\'', 'L\'', 'R\'', 'F\'', 'B\'', 'U2', 'D2', 'L2', 'R2', 'F2', 'B2'];
  
  return (
    <div className="controls-3x3">
      <div className="move-buttons">
        {moves.map(move => (
          <button key={move} onClick={() => applyMove(move)} className="move-btn">{move}</button>
        ))}
      </div>
      
      <div className="action-buttons">
        <button onClick={scramble} className="action-btn">Scramble</button>
        <button onClick={solve} disabled={isSolving} className="action-btn">
          {isSolving ? 'Solving...' : 'Solve'}
        </button>
        <button onClick={reset} className="action-btn">Reset</button>
        <button onClick={undo} className="action-btn">Undo</button>
        <button onClick={redo} className="action-btn">Redo</button>
        <button onClick={() => setManualInput(true)} className="action-btn">Manual Input</button>
      </div>
    </div>
  );
};

export default Controls3x3;