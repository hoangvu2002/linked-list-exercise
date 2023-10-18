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
      count += 1;
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
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    };
    const lastNode = Object.assign({}, tmp);
    return lastNode;
  }

  const at = function(index) {
    let counter = 0;
    let tmp = list.head;
    while (counter<index) {
      tmp = tmp.nextNode;
      counter += 1;
    };
    const copyAtNode = Object.assign({}, tmp);
    copyAtNode.nextNode = null;
    return copyAtNode;
  }

  const pop = function() {
    lastIndex = this.size() - 1;
    let counter = 0;
    let tmp = list.head;
    while (counter<lastIndex - 1) {
      tmp = tmp.nextNode;
      counter += 1;
    };
    tmp.nextNode = null;
  }

  const contains = function(val) {
    if (list.head === null) {
      return false;
    }
    let tmp = list.head;
    while (tmp.nextNode !== null) {
      if (tmp.value === val) {
        return true;
      };
      tmp = tmp.nextNode;
    };
    if (tmp.value === val) {
      return true;
    }
    return false;
  }

  const find = function(val) {
    let index = 0;
    let tmp = list.head;
    if (tmp===null) {
      return null;
    }
    while (tmp.nextNode!==null) {
      if (tmp.value===val) {
        return index;
      };
      tmp = tmp.nextNode;
      index += 1;
    };
    if (tmp.value===val) {
      return index;
    };
    return null;
  }

  const toString = function() {
    let str = ``;
    let tmp = list.head;
    if (tmp===null) {
      return 'null';
    }
    while (tmp.nextNode !== null) {
      str += `( ${tmp.value} ) -> `;
      tmp = tmp.nextNode;
    }

    str += `( ${tmp.value} ) -> null`;
    return str;
  }

  const insertAt = function(val, index) {
    if (list.head===null) {
      list.head = Node(val);
    }

    if (index >= this.size()) {
      this.append(val);
      return;
    }
    let tmp = list.head;
    let prev = null;
    let counter = 0;
    while (counter<index) {
      prev = tmp;
      tmp = tmp.nextNode;
      counter += 1;
    };
    const node = Node(val);
    prev.nextNode = node;
    node.nextNode = tmp;
    }

  return {
    append, list, prepend, size, head, tail, at, pop, contains, find, toString, insertAt
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
console.log(linkedList.at(3));
linkedList.pop();
console.log(linkedList.size());
linkedList.append("vu");
console.log(linkedList.contains('what'));
console.log(linkedList.find('fuck'));
console.log(linkedList.toString());
console.log(linkedList.list);
linkedList.insertAt("test", 2);
console.log(linkedList.toString());
console.log(linkedList.size());
linkedList.insertAt("hoang", 8);
console.log(linkedList.toString());