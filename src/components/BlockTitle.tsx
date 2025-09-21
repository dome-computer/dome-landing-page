"use client";
import React from "react";

const FONT: Record<string, string[]> = {
  D: [
    "1111111100",
    "1100000110",
    "1100000011",
    "1100000011",
    "1100000110",
    "1111111100",
  ],
  Ω: [
    "0011111000",
    "0110001100",
    "1100000110",
    "1100000110",
    "0110001100",
    "0011111000",
    "0001100000",
    "0001100000",
  ],
  M: [
    "1100000011",
    "1110000111",
    "1101001011",
    "1100110011",
    "1100000011",
    "1100000011",
  ],
  E: [
    "1111111110",
    "1100000000",
    "1111111100",
    "1100000000",
    "1111111110",
  ],
};

export default function BlockTitle() {
  const block = 14;
  const gap = 6;
  const letters = ["D", "Ω", "M", "E"];

  let colOffset = 0;
  const ROWS = 8; // biggest letter height

  return (
    <svg
      viewBox={`0 0 ${(letters.length * 12) * (block + gap)} ${ROWS * (block + gap)}`}
      className="w-full max-w-4xl h-auto"
    >
      {letters.map((ch, li) => {
        const grid = FONT[ch];
        if (!grid) return null;

        const g = (
          <g key={li}>
            {grid.flatMap((row, r) =>
              row.split("").map((bit, c) => {
                if (bit !== "1") return null;
                const x = (colOffset + c) * (block + gap);
                const y = r * (block + gap);
                return (
                  <rect
                    key={`${li}-${r}-${c}`}
                    x={x}
                    y={y}
                    width={block}
                    height={block}
                    fill="#111"
                    rx={2}
                    ry={2}
                  />
                );
              })
            )}
          </g>
        );

        colOffset += 12; // width per letter grid
        return g;
      })}
    </svg>
  );
}
