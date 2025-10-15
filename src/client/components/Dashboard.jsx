import React, { useState } from 'react';

export default function Dashboard() {
  const [circleColor, setCircleColor] = useState('#e0e0e0');
  const [lastFunction, setLastFunction] = useState('');

  const handleFunction = (functionNumber, color, name) => {
    setCircleColor(color);
    setLastFunction(`Function ${functionNumber} (${name})`);
  };

  return (
    <div className="dashboard">
      <h2>Interactive Color Dashboard</h2>
      
      <div 
        className="color-circle" 
        style={{ backgroundColor: circleColor }}
      ></div>
      
      {lastFunction && (
        <p style={{ color: 'white', fontSize: '18px', margin: '20px 0' }}>
          Last activated: {lastFunction}
        </p>
      )}
      
      <div className="function-buttons">
        <button 
          className="function-btn"
          onClick={() => handleFunction(1, '#ff6b6b', 'Red')}
        >
          Function 1
        </button>
        <button 
          className="function-btn"
          onClick={() => handleFunction(2, '#4ecdc4', 'Green')}
        >
          Function 2
        </button>
        <button 
          className="function-btn"
          onClick={() => handleFunction(3, '#45b7d1', 'Blue')}
        >
          Function 3
        </button>
        <button 
          className="function-btn"
          onClick={() => handleFunction(4, '#f9ca24', 'Yellow')}
        >
          Function 4
        </button>
      </div>
      
      <div style={{ marginTop: '40px', color: 'white', textAlign: 'center' }}>
        <p>Click any function button to change the circle color!</p>
        <p style={{ fontSize: '14px', opacity: '0.8' }}>
          Function 1: Red • Function 2: Green • Function 3: Blue • Function 4: Yellow
        </p>
      </div>
    </div>
  );
}