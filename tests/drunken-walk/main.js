// ZETA ENGINE:
// Drunken walk algorithm
// test file

import * as zeta from '../src/algorithms/drunken-walk'


let main = () => {
    let maze = zeta.maze(50, 50, 50);
    maze.forEach(element => {
        element.forEach(el => {
            process.stdout.write(el);
        });
        process.stdout.write('\n');
    });
}

main();