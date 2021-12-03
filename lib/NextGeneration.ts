import _ from "lodash";
interface GenerationOptions {
  grid: number[][];
  x: number;
  y: number;
}
/**
 * Generate next grid
 * @param grid
 * @param X Rows
 * @param Y Cols
 * @returns new grid
 */
export const nextGeneration = (options: GenerationOptions): number[][] => {
  const nextGrid: number[][] = _.cloneDeep(options.grid);

  // cell loop
  for (let l = 0; l < options.x - 1; l++) {
    for (let m = 0; m < options.y - 1; m++) {
      let aliveNeighbours: number = 0;

      //find alive neighbours
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
 	    if ((l + i) >= 0 && (m + j) >= 0) {
	    	aliveNeighbours += options.grid[l + i][m + j];
	    }          
        }
      }

      //subtracts the current cell
      aliveNeighbours -= options.grid[l][m];

      // Rules
      if (options.grid[l][m] == 1 && (aliveNeighbours < 2 || aliveNeighbours > 3)) {
        //Any live cell with fewer than two live neighbours dies || Any live cell with more than three live neighbours dies
        nextGrid[l][m] = 0;
      } else if (options.grid[l][m] == 0 && aliveNeighbours == 3) {
        //Any dead cell with exactly three live neighbours becomes a live cell.
        nextGrid[l][m] = 1;
      } 
    }
  }

  return nextGrid;

};
