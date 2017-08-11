//fizzbuzz
for (var i = 1; i <= 100; i++) {
  var f = i % 3 == 0, b = i % 5 == 0;
  console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}


//valid palindrome
function isPalindrome(str) {
  var i = 0,
      j = str.length - 1,
      str = str.toLowerCase();

  if (str.length == 0){
    return true;
  }

  while (i < j) {

    if(/[^a-zA-Z0-9]/.test(str[i])) {
      i++;
      continue;
    }

    if(/[^a-zA-Z0-9]/.test(str[j])) {
      j--;
      continue;
    }

    if(str[i] != str[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}


// O(log(n))
function findCommonAncestor(root, nodeA, nodeB) {
  var currentNode = root;
  while true {
    if (currentNode == nodeA || currentNode == nodeB) {
      // one is the descendent of the other.
      return currentNode;
    }

    var bothOnRight = ((currentNode.value < nodeA.value) &&
      (currentNode.value < nodeB.value));
    var bothOnLeft = ((currentNode.value > nodeA.value) &&
      (currentNode.value > nodeB.value));
    var onSameSide = bothOnRight || bothOnLeft;

    if (!onSameSide) {
      return currentNode;
    }

    currentNode = bothOnRight ? currentNode.right : currentNode.left;
  }
}


/*
Kangaroo
There are two kangaroos on an x-axis ready to jump in the positive
direction (i.e, toward positive infinity). The first kangaroo starts at
location x1 and moves at a rate of v1 meters per jump. The second kangaroo
starts at location x2 and moves at a rate of v2 meters per jump. Given the
starting locations and movement rates for each kangaroo, can you
determine if they'll ever land at the same location at the same time?
*/

function kangaroo(x1, v1, x2, v2) {
  if ( v1 > v2 && ((x2 - x1) % (v1 - v2)) === 0) { return true; }
  else { return false; }
}
console.log("====Kangaro===");
console.log(kangaroo(0, 3, 4, 2) === true);
console.log(kangaroo(0, 2, 5, 3) === false);



/*
Lily has a chocolate bar consisting of a row of n squares where each
square has an integer written on it. She wants to share it with Ron
for his birthday, which falls on month m and day d. Lily only wants to
give Ron a piece of chocolate if it contains m consecutive squares
whose integers sum to d.
*/

function birthdayChocolate(squares, d, m) {
  let count = 0;
  let sum;

  for (let i = 0; i <= squares.length - m + 1; i++) {
    sum = 0;
    for (let j=0; j < m; j++) {
      sum += squares[i + j];
    }
    if (sum === d) { count += 1; }
  }
  return count;
}

console.log("===Birthday Chocolate===");
console.log(birthdayChocolate([1, 2, 1, 3, 2], 3, 2) === 2);
console.log(birthdayChocolate([1, 1, 1, 1, 1, 1], 3, 2) === 0);


//Duplicate
var containsDuplicate = function(nums) {
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < nums.length; i++) {
        var value = nums[i];
        if (value in valueSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
};


function eliminateDuplicates(arr) {
  var i,
      len=arr.length,
      out=[],
      obj={};

  for (i=0;i<len;i++) {
    obj[arr[i]]=0;
  }
  for (i in obj) {
    out.push(i);
  }
  return out;
}


//delete a node from a linked list
'use strict';

function LinkedList () {
    this.head = null;
}

LinkedList.prototype.deleteNode = function (val) {

    if (this.head.data === val) {
        this.head = this.head.next;
    } else {
        var previousNode = this.head;
        var currentNode = previousNode.next;
        while (currentNode) {
            if (currentNode.data === val) {
                previousNode.next = currentNode.next;
                currentNode = currentNode.next;
                break;
            } else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }
};

// Create an instance of a LinkedList class
var L1 = new LinkedList();

// Create a linked list with six elements
L1.insertNodeAtTail(5);
L1.insertNodeAtTail(6);
L1.insertNodeAtTail(7);
L1.insertNodeAtTail(8);
L1.insertNodeAtTail(9);
L1.insertNodeAtTail(10);
console.log(L1);

// Delete a head and a tail node
L1.deleteNode(5);
L1.deleteNode(10);
console.log(L1);

// Delete  an intermediate node
L1.deleteNode(7);
console.log(L1);
