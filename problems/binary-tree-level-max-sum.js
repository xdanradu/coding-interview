/*
Input :               4
                    /   \
                   2    -5
                   / \    /\
                -1   3 -2  6
Output: 6
Explanation :
Sum of all nodes of 0'th level is 4
Sum of all nodes of 1'th level is -3
Sum of all nodes of 0'th level is 6
Hence maximum sum is 6

Input :          1
               /   \
             2      3
           /  \      \
          4    5      8
                    /   \
                   6     7
Output :  17
*/

let g = { value : 7, left: null, right: null };
let f = { value : 6, left: null, right: null  };
let h = { value : 8, left: f, right: g };
let e = { value : 5, left: null, right: null  };
let d = { value : 4, left: null, right: null  };
let c = { value : 3, left: null, right: h  };
let b = { value : 2, left: e, right: d  };
let a = { value : 1, left: b, right: c  };

function bfs(node){
    let seenNodes = [];
    let nextNodes = [node];

    while ( nextNodes.length > 0 ) {
        let current = nextNodes.shift();//queue
        console.log(current.value);

        //fn
        if(current.left && isNew(current.left, seenNodes)) {
                nextNodes.push(current.left);
                seenNodes.push(current.left);
        }
        //fn
        if(current.right && isNew(current.right, seenNodes)) {
            nextNodes.push(current.right);
            seenNodes.push(current.right);
        }

    }
    return null;
}

function isNew(node, nodes){
    let result = true;
    for ( let i=0; i < nodes.length; i++ ) {
        if( node.value === nodes[i].value ){
            result = false;
        }
    }
    return result;
}

bfs(a);
