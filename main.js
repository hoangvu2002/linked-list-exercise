function LinkedList() {
  const list = {
    head: null,
  };

  const append = function(value) {
    // eslint-disable-next-line no-use-before-define
    const node = Node(value);
    let tmp = list.head;
    if (tmp===null) {
      list.head = node;
    } else {
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
      };
      tmp.nextNode = node;
    };
  }

  const prepend = function(value) {
    const node = Node(value);
    node.nextNode = list.head;
    list.head = node;
  }

  const size = function() {
    let count = 0;
    let tmp = list.head;
    while (tmp!==null) {
      count++;
      tmp = tmp.nextNode;
    }
    return count;
  }

  const head = function() {
    const firstNode = list.head;
    const copyFirstNode = Object.assign({}, firstNode);
    copyFirstNode.nextNode = null;
    return copyFirstNode;
  }

  const tail = function() {
    if (list.head === null) {
      // eslint-disable-next-line no-useless-return
      return;
    }
    let tmp = list.head;
    console.log('debug');
    console.log(tmp);
    console.log(tmp.nextNode!==null);
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    };
    lastNode = tmp;
    return lastNode;
  }

  return {
    append, list, prepend, size, head, tail,
  }
}

function Node(value=null) {
  // eslint-disable-next-line no-unused-vars
  let nextNode;
  return {
    value,
    nextNode: null,
  };

}

const linkedList = LinkedList();
linkedList.append('fuck');
console.log(linkedList.list);
linkedList.append('you');
console.log(linkedList.list);
linkedList.append('mfs');
console.log(linkedList.list);
linkedList.append('???');
console.log(linkedList.list);
linkedList.prepend('the');
console.log(linkedList.list);
linkedList.prepend('what');
console.log(linkedList.list);
console.log(linkedList.size());
console.log(linkedList.head());
console.log(linkedList.tail());