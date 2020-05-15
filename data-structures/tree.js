let a = { value : 'a', children: [] };
let b = { value : 'b', children: [] };
let c = { value : 'c', children: [] };
let d = { value : 'd', children: [c] };
let root = { value : 'e', children: [a, b, d] };

function inOrderRecursive(node){

    if ( node === undefined ) {
        return;
    }

    console.log(node.value);

    for ( let i=0; i<node.children.length; i++) {
        inOrderRecursive(node.children[i]);
    }
}

function preOrderRecursive(node){

    if ( node === undefined ) {
        return;
    }

    for ( let i=0; i<node.children.length; i++) {
        preOrderRecursive(node.children[i]);
    }

    console.log(node.value);
}

inOrderRecursive(root);
preOrderRecursive(root);


