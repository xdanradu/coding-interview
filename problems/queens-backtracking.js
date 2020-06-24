function isAllowed(x, y, sol) {
    return (x >= 0 && x < N && y >= 0 &&
        y < N && sol[x][y] == -1);

}

function solveKT(x, y, index, sol) {
    if (index == 9)
        return sol;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (isAllowed(i, j, sol))
                markLines(sol, i, j, 0);
                sol[i][j] = index;
                console.table(sol);
                // mark diags
                if (solveKT(i, j, index + 1, sol))
                    return sol;
                else
                    //undo last position = unmark lines and diags
                        markLines(sol, i, j, -1);
                    // sol[i][j] = -1;
            }
        }
    }



function markLines(sol, x, y, val) {
    for (let i = 0; i < N ; i++ ) {
        for (let j = 0; j < N ; j++ ) {
            if ( x === i) sol[i][j] = val;
            if ( y === j) sol[i][j] = val;
        }
    }
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

let solution = solveKT(0, 0, 1, initial);
!solution ? console.log("Solution does not exist") : console.table(solution);
