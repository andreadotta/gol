interface GridOptions {
  cols: number;
  rows: number;
  def: 1 | 2;
}
/**
 * Create random grid
 * @param gridOptions 
 * @returns 
 */
export const createGrid = (gridOptions: GridOptions): Array<Array<number>> => {
  return Array.from({ length: gridOptions.rows }, () =>
    Array.from({ length: gridOptions.cols }, () =>
      gridOptions.def > 1
        ? Math.floor(Math.random() * gridOptions.def)
        : gridOptions.def
    )
  );
};
