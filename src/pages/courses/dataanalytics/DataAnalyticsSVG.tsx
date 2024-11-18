import React from "react";

const DataAnalyticsSVG: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[400px] relative">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background Grid with Fade Effect */}
        <pattern
          id="grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          className="text-blue-500/5"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <animate
              attributeName="opacity"
              values="0.1;0.3;0.1"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
        </pattern>
        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          className="animate-pulse-slow"
        />

        {/* Animated Bar Chart */}
        <g transform="translate(100, 300)">
          {[100, 160, 120, 200].map((height, index) => (
            <g key={`bar-group-${index}`}>
              <rect
                key={`bar-${index}`}
                x={index * 60}
                y={-height}
                width="40"
                height={height}
                fill="url(#barGradient)"
                className="animate-rise"
              >
                <animate
                  attributeName="height"
                  values={`0;${height};${height * 0.8};${height}`}
                  dur="3s"
                  begin={`${index * 0.2}s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
                />
                <animate
                  attributeName="y"
                  values={`0;${-height};${-height * 0.8};${-height}`}
                  dur="3s"
                  begin={`${index * 0.2}s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
                />
              </rect>
              <circle
                cx={index * 60 + 20}
                cy={-height - 10}
                r="4"
                fill="#60A5FA"
                className="animate-pulse"
              >
                <animate
                  attributeName="cy"
                  values={`0;${-height - 10};${-height * 0.8 - 10};${
                    -height - 10
                  }`}
                  dur="3s"
                  begin={`${index * 0.2}s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
                />
              </circle>
            </g>
          ))}
        </g>

        {/* Animated Circular Progress */}
        <g transform="translate(600, 300)">
          <circle r="80" fill="none" stroke="#1E293B" strokeWidth="30" />
          <circle
            r="80"
            fill="none"
            stroke="url(#pieGradient)"
            strokeWidth="30"
            className="origin-center"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0 502;502 502;0 502"
              dur="4s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Animated Line Graph */}
        <g transform="translate(100, 100)">
          <path
            d="M0,100 L100,80 L200,120 L300,60 L400,90"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="4"
            className="animate-draw"
          >
            <animate
              attributeName="d"
              values="
                M0,100 L100,80 L200,120 L300,60 L400,90;
                M0,90 L100,110 L200,70 L300,100 L400,60;
                M0,100 L100,80 L200,120 L300,60 L400,90
              "
              dur="6s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </path>
          {[
            [0, 100],
            [100, 80],
            [200, 120],
            [300, 60],
            [400, 90],
          ].map(([x, y], index) => (
            <circle
              key={`point-${index}`}
              cx={x}
              cy={y}
              r="6"
              fill="#60A5FA"
              className="animate-pulse"
            >
              <animate
                attributeName="cy"
                values={`${y};${y + (index % 2 ? 30 : -30)};${y}`}
                dur="6s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
              />
              <animate
                attributeName="r"
                values="4;6;4"
                dur="2s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
              />
            </circle>
          ))}
        </g>

        {/* Floating Data Icons */}
        <g className="data-icons">
          {[
            { x: 650, y: 150, scale: 1 },
            { x: 700, y: 200, scale: 0.8 },
            { x: 600, y: 450, scale: 1.2 },
          ].map((pos, index) => (
            <g
              key={`icon-${index}`}
              transform={`translate(${pos.x}, ${pos.y}) scale(${pos.scale})`}
            >
              <rect
                width="30"
                height="30"
                rx="6"
                fill="url(#iconGradient)"
                className="animate-float"
              >
                <animate
                  attributeName="y"
                  values={`${pos.y};${pos.y - 20};${pos.y}`}
                  dur={`${2 + index}s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                />
              </rect>
            </g>
          ))}
        </g>

        {/* Enhanced Gradients */}
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60A5FA">
              <animate
                attributeName="stop-color"
                values="#60A5FA;#818CF8;#60A5FA"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#3B82F6">
              <animate
                attributeName="stop-color"
                values="#3B82F6;#6366F1;#3B82F6"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <linearGradient id="pieGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#818CF8">
              <animate
                attributeName="stop-color"
                values="#818CF8;#60A5FA;#818CF8"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#6366F1">
              <animate
                attributeName="stop-color"
                values="#6366F1;#3B82F6;#6366F1"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#34D399">
              <animate
                attributeName="stop-color"
                values="#34D399;#60A5FA;#34D399"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#10B981">
              <animate
                attributeName="stop-color"
                values="#10B981;#3B82F6;#10B981"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <linearGradient id="iconGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default DataAnalyticsSVG;
