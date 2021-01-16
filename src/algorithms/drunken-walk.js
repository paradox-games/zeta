// ZETA ENGINE:
// Drunken walk algorithm
// implementation

// X means player
// O means enemy
// . means floor
// S means stairs
export const maze = (width, height, iterations) => {
    let maze      = [[]];
    let positions = [[]];
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

    positions[0].push(playerX, playerY);

    let maze_write = (enemy, stairs) => {
        if (maze[playerY][playerX] == 'X')
            return;
        else
            if (stairs)
                maze[playerY][playerX] = 'S';
            else if (enemy)
                maze[playerY][playerX] = 'O';
            else
                maze[playerY][playerX] = '.';
    }

    maze[playerY][playerX] = 'X'; //where the player starts

    for (let i = 0; i < iterations; i++) {
        let instruction = Math.random() * 10 % 4;
        let enemy = Math.random() * 100;
        if (enemy <= 15) enemy = true;
        else enemy = false;
    
        let stairs = false;
        if ((i+1) == iterations) stairs = true;
        else stairs = false;
    
        switch(instruction) {
            case 0: case 1:
                playerX--;
                maze_write(enemy, stairs);
                break;
            case 2:
                playerY++;
                maze_write(enemy, stairs);
                break;
            case 3:
                playerX++;
                maze_write(enemy, stairs);
                break;
            case 4:
                playerY--;
                maze_write(enemy, stairs)
                break;
        }
    }

    return maze;
}
