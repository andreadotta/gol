import f from "fs";
import _ from "lodash";

interface Output {
  generation: number;
  x: number;
  y: number;
  initialState: Array<Array<number>>;
}
/**
 * Parse a config file and return output object as defined in Ouput interface
 * @param
 * @returns
 */
export const parseConfigFile = (filename: string): Output => {
  var lines = require("fs").readFileSync(filename, "utf-8").split("\n");

  return parseConfigLines(lines);
};

export const parseConfigLines = (lines: Array<string>): Output => {
  const generation = (line: string): number => {
    // get value of generation from  of config file
    return parseInt(line.replace("Generation", "").trim());
  };
  const y = (line: string): number => {
    // get x from line of config file
    const p: string | undefined = !_.isNil(line.split(" ").shift())
      ? line.split(" ").shift()
      : "0";
    return parseInt(p as string);
  };
  const x = (line: string): number => {
    // get y from line of config file
    const p: string | undefined = !_.isNil(line.split(" ").pop())
      ? line.split(" ").pop()
      : "0";
    return parseInt(p as string);
  };
  const grid = (lines: Array<string>, y: number): Array<Array<number>> => {
    // get a grid of lines
    const out: Array<Array<number>> = [];
    for (let index = 2; index < lines.length; index++) {
      out.push(
        lines[index].replace(/\./g, "0 ").replace(/\*/g, "1 ")
          .split(" ")
          .map((n) => parseInt(n)).filter((e) => !isNaN(e))
      );
    }
    return out.filter((e) => e.length > 0);
  };
  const yres: number = y(lines[1]);
  return {
    generation: generation(lines[0]),
    x: x(lines[1]),
    y: yres,
    initialState: grid(lines, yres),
  };
};
