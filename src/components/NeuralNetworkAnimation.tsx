import React from 'react';

const NeuralNetworkAnimation = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      <svg
        className="w-full h-full"
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Neural Network Nodes */}
        <g className="nodes">
          {/* Input Layer */}
          {[100, 200, 300].map((y, i) => (
            <circle
              key={`input-${i}`}
              cx="150"
              cy={y}
              r="20"
              className="fill-blue-500 animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}

          {/* Hidden Layer */}
          {[150, 250, 350].map((y, i) => (
            <circle
              key={`hidden-${i}`}
              cx="400"
              cy={y}
              r="20"
              className="fill-blue-400 animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}

          {/* Output Layer */}
          {[200, 300].map((y, i) => (
            <circle
              key={`output-${i}`}
              cx="650"
              cy={y}
              r="20"
              className="fill-blue-300 animate-pulse"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          ))}
        </g>

        {/* Connections */}
        <g className="connections">
          {/* Input to Hidden Layer Connections */}
          {[100, 200, 300].map((inputY, i) =>
            [150, 250, 350].map((hiddenY, j) => (
              <line
                key={`conn1-${i}-${j}`}
                x1="170"
                y1={inputY}
                x2="380"
                y2={hiddenY}
                className="stroke-blue-500/30 animate-pulse"
                style={{ animationDelay: `${(i + j) * 0.1}s` }}
                strokeWidth="2"
              />
            ))
          )}

          {/* Hidden to Output Layer Connections */}
          {[150, 250, 350].map((hiddenY, i) =>
            [200, 300].map((outputY, j) => (
              <line
                key={`conn2-${i}-${j}`}
                x1="420"
                y1={hiddenY}
                x2="630"
                y2={outputY}
                className="stroke-blue-400/30 animate-pulse"
                style={{ animationDelay: `${(i + j) * 0.1}s` }}
                strokeWidth="2"
              />
            ))
          )}
        </g>

        {/* Data Flow Animation */}
        <g className="data-flow">
          {[100, 200, 300].map((y, i) => (
            <circle
              key={`flow-${i}`}
              className="fill-white animate-ping"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path={`M 150 ${y} Q 275 ${y} 400 ${y + 50} T 650 ${y + 100}`}
              />
            </circle>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default NeuralNetworkAnimation;
