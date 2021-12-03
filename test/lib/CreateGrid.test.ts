import React from "react";
import { render, screen } from "../test-utils";
import { createGrid } from "../../lib/CreateGrid";

describe("createGrid", () => {
  it("should render the heading", () => {
    const grid = createGrid({ cols: 10, rows: 10, def: 2 });

    console.table(grid);

    expect(grid.length).toEqual(10);
  });
});
