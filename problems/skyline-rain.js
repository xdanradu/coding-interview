/*
Problem:
    A skyline is a collection of rectangles/buildings and a building is defined as a pair of (width, height)
    Compute the water that can accumulate between buildings (see corresponding picture for a better understanding)

Solution approach:
    Answer to the question: for a given building index, does it store water above the building or not?
    Use memoization for O(n): for each index compute the maximum on its left side and on its right side sub arrays
    and store them into two arrays maxLeft and maxRight
*/

let b1 = { width: 2, height: 1 };
let b2 = { width: 2, height: 0 };
let b3 = { width: 2, height: 2 };
let b4 = { width: 1, height: 1 };
let b5 = { width: 1, height: 0 };
let b6 = { width: 1, height: 3 };
let b7 = { width: 1, height: 0 };
let b8 = { width: 1, height: 1 };
let buildings = [b1, b2, b3, b4, b5, b6, b7, b8];

/*
For the given example the expected result is 6
    leftMax: [ 0, 1, 1, 2, 2, 2, 3, 3 ]
    rightMax: [ 3, 3, 3, 3, 3, 1, 1, 0 ]

Time complexity: O(n)
Space complexity: O(1)
*/

function getLeftMax(buildings) {
    let leftMax = [0];
    for ( let i=1; i<buildings.length; i++ ){
        if (leftMax[i-1] < buildings[i-1].height) {
            leftMax[i] = buildings[i-1].height;
        } else {
            leftMax[i] = leftMax[i-1];
        }
    }
    return leftMax;
}

function getRightMax(buildings) {
    let rightMax = [];
    rightMax[buildings.length-1] = 0;
    for (let i = buildings.length - 2; i >= 0; i--){
        if (rightMax[i+1] < buildings[i+1].height) {
            rightMax[i] = buildings[i+1].height;
        } else {
            rightMax[i] = rightMax[i+1];
        }
    }
    return rightMax;
}

function getWaterCount(leftMax, rightMax, buildings) {
    let count = 0;
    for (let i = 1; i < buildings.length - 1; i++) {
        if (leftMax[i] >= buildings[i].height && rightMax[i] >= buildings[i].height){
            count += ( Math.min(leftMax[i], rightMax[i]) - buildings[i].height ) * buildings[i].width;
        }
    }
    return count;
}

let leftMax = getLeftMax(buildings);
console.log(leftMax);
let rightMax = getRightMax(buildings);
console.log(rightMax);

console.log(getWaterCount(leftMax, rightMax, buildings));
