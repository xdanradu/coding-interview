let evenMatrix = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
];

let oddMatrix = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
];

var FEATURES = [];
function getCopy(a){
    return JSON.parse(JSON.stringify(a));
}

let n = 0;
let m = 0;
function computeDimensions(matrix) {
    n = matrix.length;
    m = matrix[0].length;
}


function show(matrix) {
    computeDimensions(matrix);
    let result = getCopy(matrix);
    for( let i = 0; i < n ; i++ ) {
        for( let j = 0; j < m ; j++ ) {
            if (shouldMark(i, j)) result[i][j] = 'X';
        }
    }
    
    return result;
}

function shouldMark(i, j) {
    let evaluation = false;
    for (let k = 0; k < FEATURES.length; k++ ){
        switch (FEATURES[k]){
            case 'PRIMARY': {
                if ( i === j ) {        
                    evaluation = true;
                }
                break;
            }
            case 'ABOVE-PRIMARY': {
                if ( j > i ) { 
                    evaluation = true;
                }
                break;
            }
            case 'BELOW-PRIMARY': {
                if ( j < i ) { 
                    evaluation = true;
                }
                break;
            }
            case 'SECONDARY': {
                if ( i === m - j - 1 ) { 
                    evaluation = true;
                }
                break;
            }
            case 'ABOVE-SECONDARY': {
                if (i < m - j - 1) { 
                    evaluation = true;
                }
                break;
            }
            case 'ABOVE-PRIMARY-ABOVE-SECONDARY': {
                if (j > i && i < m - j - 1) { 
                    evaluation = true;
                }
                break;
            }
            case 'BELLOW-PRIMARY-BELLOW-SECONDARY': {
                if (i > j && i > m - j - 1) { 
                    evaluation = true;
                }
                break;
            }
            case 'BELOW-SECONDARY': {
                if ( i > m - j - 1 ) { 
                    evaluation = true;
                }
                break;
            }
            case 'CENTER': {
                if ( n % 2 !== 0 && m % 2 !== 0 && i === Math.round(n/2-1) && j === Math.round(m/2-1) ) { 
                    evaluation = true;
                }
                if ( n % 2 === 0 && m % 2 === 0 ) {
                    if( i === Math.round(n/2-1) && j === Math.round(m/2-1) ) evaluation = true;
                    if( i === Math.round(n/2-1)+1 && j === Math.round(m/2-1)+1 ) evaluation = true;
                    if( i === Math.round(n/2-1) && j === Math.round(m/2-1)+1 ) evaluation = true;
                    if( i === Math.round(n/2-1)+1 && j === Math.round(m/2-1) ) evaluation = true;
                }
                break;
            }
        }
    }
    return evaluation;
}
function display(matrix, features){
    FEATURES = features;
    console.log("\x1b[34m\x1b[43m < %s > \x1b[0m" , '--- ENABLED FEATURES ---');
    console.table(FEATURES);
    console.table(show(matrix));
    FEATURES = [];
}

display(oddMatrix, ['PRIMARY', 'SECONDARY', 'CENTER', 'ABOVE-PRIMARY-ABOVE-SECONDARY', 'BELLOW-PRIMARY-BELLOW-SECONDARY']);
// display(oddMatrix, ['PRIMARY', 'SECONDARY']);
// display(oddMatrix, ['CENTER']);
// display(evenMatrix, ['CENTER']);
