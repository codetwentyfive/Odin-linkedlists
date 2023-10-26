import Node from "./Node.js";

class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.nextNode) {
          current = current.nextNode;
        }
        current.nextNode = newNode;
      }
    }
  
    prepend(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        newNode.nextNode = this.head;
        this.head = newNode;
      }
    }
  
    size() {
      let count = 0;
      let current = this.head;
      while (current) {
        count++;
        current = current.nextNode;
      }
      return count
    }
  
    getHead() {
      return this.head;
    }
  
    getTail() {
      if (!this.head) {
        return null;
      }
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      return current
    }
  
    at(index) {
      if (index < 0 || index >= this.size()) {
        return null;
      }
      let count = 0;
      let current = this.head;
      while (count < index) {
        current = current.nextNode;
        count++;
      }
      return current
    }
  
    pop() {
      //find last node
      if (!this.head) {
        return null;
      } else if (!this.head.nextNode) {
        const poppedNode = this.head;
        this.head = null;
        return poppedNode;
      } else {
        let current = this.head;
        while (current.nextNode.nextNode) {
          current = current.nextNode
        }
        const poppedNode = current.nextNode;
        current.nextNode = null;
        return poppedNode;
      }
    }
  
    contains(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.nextNode;
      }
      return false
    }
  
    find(value) {
      let index = 0;
      let current = this.head;
  
      while (current) {
        if (current.value === value) {
          return index;
        }
        current=current.nextNode;
        index++;
      }
      return null; 
    }
  
    toString(){
      let results='';
      let current =this.head;
  
      while (current){
        results+=`(${current.value})`
        current=current.nextNode;
      }
      return results+'null'
    }
  }

  // Usage
const myList = new LinkedList();

myList.prepend("Node 3");
myList.prepend("Node 2");
myList.prepend("Node 1");

myList.append("Node 4");
myList.append("Node 5");

console.log("Linked List as a string:", myList.toString());