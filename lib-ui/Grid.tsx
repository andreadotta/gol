import { createGrid } from "@lib/CreateGrid";
import { useEffect, useState } from "react";
import _ from "lodash";
import { nextGeneration } from "@lib/NextGeneration";

export const Grid = (props: {
  generation: number;
  x: number;
  y: number;
  initialState: Array<Array<number>>;
}) => {
  const numRows = props.x;
  const numCols = props.y;

  const [grid, setGrid] = useState(() =>
    props.initialState
  );
  const [generation, setGeneration] = useState(() =>
  props.generation
);

  useEffect(() => {
    setTimeout(() => {
      //set new grid every call
      setGrid(nextGeneration({ grid: grid, x: numRows, y: numCols }));
      //next up generation counter
      setGeneration(generation +  1);
    }, 500); //repeat every 0,5s
  });

  return (
    <div className="grid-wrapper">
      <div
        key={1}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
          width: "fit-content",
        }}
        className="grid"
      >
        {grid.map((rows, _gi) =>
          rows.map((k, ri) =>
            k == 0 ? (
              <div
                key={ri}
                style={{
                  width: 20,
                  height: 20,
                  border: "1px dotted #230903",
                }}
              ></div>
            ) : (
              <div
                key={ri}
                style={{
                  width: 20,
                  height: 20,
                  border: "1px solid #230903",
                  backgroundColor: "#34252F",
                  transition: "background-color 0.3s ease-in-out",
                }}
              ></div>
            )
          )
        )}
      </div>

      <div>Generation: {generation}</div>
      <div>Grid size: {numRows} {numCols}</div>
    </div>
  );
};
