//DFS: Depth First Search in a Graph
function dfsSearch(rootNode, key){
  var seenNodes = [];
  var nextNodes = [rootNode];

  while(nextNodes.length != 0) {
    var currentNode = nextNodes.pop();//stack
    console.log(currentNode.key);
    if (currentNode.key === key){
      return currentNode;
    }
    for (var i=0;i<currentNode.connectedNodes.length;i++) {
      if(isNew(currentNode.connectedNodes[i], seenNodes)) {
        nextNodes.push(currentNode.connectedNodes[i]);
        seenNodes.push(currentNode.connectedNodes[i]);
      }
    }
  }
  return null;
}

function isNew(node, nodes){
  var result = true;
    for (var i=0;i<nodes.length;i++){
      if(node.key === nodes[i].key){
        result = false;
      }
    }
    return result;
}

var e = {key: 'Rimeti', connectedNodes: []}
var d = {key: 'Alba-Iulia', connectedNodes: []}
var c = {key: 'Turda', connectedNodes: [d,e]}
var b = {key: 'Apahida', connectedNodes: []}
var a = {key: 'Cluj', connectedNodes: [b, c]}

console.log(dfsSearch(a, 'Alba-Iulia'));
