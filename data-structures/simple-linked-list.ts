let root = null;

function add(node) {
    if (root === null) {
        root = node;
    } else {
        let cursor = root;
        while (cursor.next !== null) {
            cursor = cursor.next;
        }
        cursor.next = node;
    }
}

function search(key) {
    if (isEmptyList()) return;

    let cursor = root;
    while (cursor.next !== null) {
        if (cursor.key === key) {
            return cursor;
        }
        else {
            cursor = cursor.next;
        }
    }

    return null;
}

function printKeys(root) {
    if (isEmptyList()) return;
    let cursor = root;
    console.log(cursor.key);
    while ( cursor.next ) {
        cursor = cursor.next;
        console.log(cursor.key);
    }
}

function printReversedKeys(){
    if (isEmptyList()) return;

    let stack = [];
    let cursor = root;
    stack.push(cursor.key);
    while ( cursor.next ) {
        cursor = cursor.next;
        stack.push(cursor.key);
    }

    printStack(stack);
}

function printStack(stack) {
    while (stack.length !== 0) {
        console.log(stack.pop());
    }
};

function isEmptyList(){
    if (root === null) {
        console.log('The linked list is empty');
        return true;
    }
    return false;
}

// Iterative: O(n) time & O(1) space
function reverse() {
    if (isEmptyList()) return;

        let node = root,
            previous,
            tmp;

        while (node) {
            // save next
            tmp = node.next;

            // reverse pointer
            node.next = previous;

            // step forward
            previous = node;
            node = tmp;
        }
        return previous;
}

// Recursive: O(n) time & O(n) space
function reverseRecursive(head) {
    if (!head || !head.next) {
        return head;
    }
    let tmp = reverseRecursive(head.next);
    head.next.next = head;
    head.next = undefined;
    return tmp;
}

// test data
add({ key: 'A', next: null });
add({ key: 'B', next: null });
add({ key: 'C', next: null });
add({ key: 'D', next: null });
add({ key: 'E', next: null });

// console.log(search('X'));
// console.log(search('D'));
printKeys(root);
// reverse();//expected: E -> D -> C -> B -> A
printKeys(reverse());
// printReversedKeys();
