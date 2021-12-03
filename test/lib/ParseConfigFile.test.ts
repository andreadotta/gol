import React from "react";
import { render, screen } from "../test-utils";
import { createGrid } from "../../lib/CreateGrid";
import { parseConfigLines } from "../../lib/ParseConfigFile";

describe("parseConfigFile", () => {
  it("get config line parsed", () => {
    const configLines = parseConfigLines([
      "Generation 3",
      "4 8",
      "........",
      "...**...",
      "....*...",
      "........",
      "",
    ]);

    expect(configLines.generation).toEqual(3);
    expect(configLines.x).toEqual(8);
    expect(configLines.y).toEqual(4);
    expect(configLines.initialState).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ]);


  });
});
