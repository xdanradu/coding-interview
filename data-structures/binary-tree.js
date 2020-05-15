/*
         a
       /   \
      b     c
     / \   / \
    d  e  f   g
*/
let g = { value : 'g', left: null, right: null };
let f = { value : 'f', left: null, right: null  };
let e = { value : 'e', left: null, right: null  };
let d = { value : 'd', left: null, right: null  };
let c = { value : 'c', left: f, right: g  };
let b = { value : 'b', left: d, right: e  };
let a = { value : 'a', left: b, right: c  };

/* Recursive DFS methods */

/*
* Access the data part of the current node.
* Traverse the left subtree by recursively calling the pre-order function.
* Traverse the right subtree by recursively calling the pre-order function.
* */
function nlr(node){
    if ( !node ) {
        return;
    }
    console.log(node.value);
    nlr(node.left);
    nlr(node.right);
}

/*
* Traverse the left subtree by recursively calling the in-order function.
* Access the data part of the current node.
* Traverse the right subtree by recursively calling the in-order function.
* */
function lnr(node){
    if ( !node ) {
        return;
    }
    lnr(node.left);
    console.log(node.value);
    lnr(node.right);
}

/*
Traverse the right subtree by recursively calling the reverse in-order function.
Access the data part of the current node.
Traverse the left subtree by recursively calling the reverse in-order function.
* */
function rnl(node) {
    if ( !node ) {
        return;
    }
    rnl(node.right);
    console.log(node.value);
    rnl(node.left);
}

/*
* Traverse the left subtree by recursively calling the post-order function.
* Traverse the right subtree by recursively calling the post-order function.
* Access the data part of the current node.
* */
function lrn(node) {
    if ( !node ) {
        return;
    }
    rnl(node.left);
    rnl(node.right);
    console.log(node.value);
}

console.log('node left right');
nlr(a);
console.log('left node right');
lnr(a);
console.log('right node left');
rnl(a);
console.log('left right node');
lrn(a);


