import React from "react";
import { render, screen } from "../test-utils";
import { createGrid } from "../../lib/CreateGrid";
import { nextGeneration } from "../../lib/NextGeneration";

describe("nextGeneration", () => {
  it("should render the heading", () => {
    const sgrid = () : number[][] => [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],                              
    ]; 

    const grid = nextGeneration({grid: sgrid(), x: 10, y: 10});

    console.table(grid);

    expect(grid[6][2]).toEqual(0);
    expect(grid[5][7]).toEqual(1);
  });
});
