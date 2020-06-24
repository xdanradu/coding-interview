function isAllowed(x, y, sol) {
    return (x >= 0 && x < N && y >= 0 &&
        y < N && sol[x][y] == -1);
}

function solveKT(x, y, index, sol, xMove, yMove) {
    let k, nextX, nextY;
    if (index == N * N)
        return sol;

    for (k = 0; k < 8; k++) { // for all eight possible moves
        nextX = x + xMove[k];
        nextY = y + yMove[k];
        if (isAllowed(nextX, nextY, sol)) {
            sol[nextX][nextY] = index; //go to next square
            if (solveKT(nextX, nextY, index + 1, sol, xMove, yMove))
                return sol;// return solution upstream if we found a solution downstream - solution forwarding only
            else // if this returns false try another way
                sol[nextX][nextY] = -1;// backtracking
        }
    }

    return false;
}

let initial = [];
let N = 8;
for (let x = 0; x < N; x++) {
    let nextRow = [];
    for (let y = 0; y < N; y++) {
        nextRow.push(-1);
    }
    initial.push(nextRow);
}
let xMove = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
let yMove = [ 1, 2, 2, 1, -1, -2, -2, -1 ];
initial[0][0] = 0;

let solution = solveKT(0, 0, 1, initial, xMove, yMove);
!solution ? console.log("Solution does not exist") : console.table(solution);
