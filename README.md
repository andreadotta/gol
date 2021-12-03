Game of life

## Getting Started

Compile and execute:

```bash
npm run build
```

```bash
npm run build
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Config

The config file gol.text that give the initial state is in folder [root]/config


## Problem description

Given a input generation the goal of this kata is to calculate the next
generation. The world consists of a two dimensional grid of cells, where
each cell is either dead or alive. For the purpose of this kata let's assume
that the grid is finite and no life can exist off the edges.

Given a cell we define its eight neighbours as the cells that are horizontally,
vertically, or diagonally adjacent.

When calculating the next generation you should follow these rules
Any live cell with fewer than two live neighbours dies
Any live cell with two or three live neighbours lives on to the next
generation
Any live cell with more than three live neighbours dies
Any dead cell with exactly three live neighbours becomes a live cell

## Implementation

The initial state (the current generation) will be provided via a text file
that specifies:
the current generation numbe
the grid size
the population state (* represents a live cell, . represents a dead cell)



