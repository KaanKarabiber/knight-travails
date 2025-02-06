class KnightMoves {
  constructor() {
    this.directions = [
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
    ];
  }

  isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  findShortestPath(start, target) {
    if (start[0] === target[0] && start[1] === target[1]) {
      return [[...start]];
    }

    let queue = [[start, [start]]];
    let visited = new Set();
    visited.add(start.toString());

    while (queue.length) {
      let [current, path] = queue.shift();
      let [x, y] = current;

      for (let [dx, dy] of this.directions) {
        let nx = x + dx;
        let ny = y + dy;
        let newPosition = [nx, ny];

        if (this.isValid(nx, ny) && !visited.has(newPosition.toString())) {
          let newPath = [...path, newPosition];

          if (nx === target[0] && ny === target[1]) {
            console.log(
              `You made it in ${newPath.length - 1} moves! Here's your path:`
            );
            return newPath;
          }

          queue.push([newPosition, newPath]);
          visited.add(newPosition.toString());
        }
      }
    }
    return [];
  }
}

let knight = new KnightMoves();
let start = [3, 3];
let target = [4, 3];

console.log(knight.findShortestPath(start, target));
