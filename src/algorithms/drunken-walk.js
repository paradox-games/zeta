// ZETA ENGINE:
// Drunken walk algorithm
// implementation

export const maze = (width, height, iterations) => {
    let maze = [[]];
    for (let i = 0; i < height-1; i++) {
        maze.push([]);
        maze[i].forEach(element => {
            for (let j = 0; j < width; j++) {
                maze[i].push(' ');
            }
        });
    }

    let playerX = Math.floor(Math.random() * Math.pow(10, width.toString().length)) % width;
    let playerY = Math.floor(Math.random() * Math.pow(10, height.toString().length)) % height;

    let maze_write = () => {
        if (maze[playerY][playerX] == 'X')
            return;
        else
            maze[playerY][playerX] == '.';
    }

    maze[playerY][playerX] = 'X'; //where the player starts

    for (let i = 0; i < iterations; i++) {
        let instruction = Math.random() * 10 % 4;
        switch(instruction) {
            case 0: case 1:
                playerX--;
                maze_write();
                break;
            case 2:
                playerY++;
                maze_write();
                break;
            case 3:
                playerX++;
                maze_write();
                break;
            case 4:
                playerY--;
                maze_write()
                break;
        }
    }

    return maze;
}
