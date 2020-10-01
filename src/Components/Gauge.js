import React from "react";
import { arc } from "d3-shape";
import { scaleLinear } from "d3-scale";
import { format } from "d3-format";

export default function Gauge({
  value = 50,
  min = 0,
  max = 100,
  color1 = "#dbdbe7",
  color2 = "#4834d4",
  label,
  units,
}) {
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)();

  const percentScale = scaleLinear().domain([min, max]).range([0, 1]);
  const percent = percentScale(value);

  const angleScale = scaleLinear()
    .domain([0, 1])
    .range([-Math.PI / 2, Math.PI / 2])
    .clamp(true);

  const angle = angleScale(percent);

  const filledArc = arc()
    .innerRadius(0.32)
    .outerRadius(0.5)
    .startAngle(-Math.PI / 2)
    .endAngle(angle)
    .cornerRadius(1)();

  const colorScale = scaleLinear().domain([0, 1]).range([color1, color2]);

  const gradientSteps = colorScale.ticks(10).map((value) => colorScale(value));

//   const markerLocation = getCoordsOnArc(angle, 1 - (1 - 0.65) / 2);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <svg
        style={{ overflow: "visible" }}
        width="9em"
        viewBox={[-1, -1, 2, 1].join(" ")}
      >
        <defs>
          <linearGradient
            id="Gauge__gradient"
            gradientUnits="userSpaceOnUse"
            x1="-1"
            x2="1"
            y2="0"
          >
            {gradientSteps.map((color, index) => (
              <stop
                key={color}
                stopColor={color}
                offset={`${index / (gradientSteps.length - 1)}`}
              />
            ))}
          </linearGradient>
        </defs>
        {/* <path d={backgroundArc} fill="#dbdbe7" /> */}
        <path d={filledArc} fill="url(#Gauge__gradient)" />
        {/* <line y1="-1" y2="-0.65" stroke="white" strokeWidth="0.027" /> */}
        {/* <circle
          cx={markerLocation[0]}
          cy={markerLocation[1]}
          r="0.2"
          stroke="#2c3e50"
          strokeWidth="0.01"
          fill={colorScale(percent)}
        /> */}
      </svg>

      <div
        style={{
          marginTop: "0.4em",
          fontSize: "1.5em",
          lineHeight: "1em",
          fontWeight: "900",
          color: "white",
          fontFeatureSettings: "'zero', 'tnum' 1",
        }}
      >
        {format(",")(value)}
      </div>

      {!!label && (
        <div
          style={{
            color: "#8b8ba7",
            marginTop: "0.6em",
            fontSize: "1em",
            lineHeight: "1.3em",
            fontWeight: "700",
          }}
        >
          {label}
        </div>
      )}

      {!!units && (
        <div
          style={{
            color: "#8b8ba7",
            lineHeight: "1em",
            fontWeight: "300",
          }}
        >
          {units}
        </div>
      )}
    </div>
  );
}

const getCoordsOnArc = (angle, offset = 10) => [
  Math.cos(angle - Math.PI / 2) * offset,
  Math.sin(angle - Math.PI / 2) * offset,
];
