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


//longest consecutive 1's
var findMaxConsecutiveOnes = function(nums) {
  let ans = 0
    , sum = 0;

  nums.push(0);

  for (let item of nums) {
    if (item)
      sum += 1;
    else {
      ans = Math.max(ans, sum);
      sum = 0;
    }
  }

  return ans;
};

//missing number
var missingNumber = function(nums) {
  var hash = [];
  nums.forEach(function(item) {
    hash[item] = true;
  });

  for (var i = 0; ; i++)
    if (!hash[i])
      return i;
};

//intergetSortList
var insertionSortList = function(head) {
  var ans = [];
  while (head) {
    ans.push(new ListNode(head.val));
    head = head.next;
  }

  ans.sort(function(a, b) {
    return a.val - b.val;
  });

  if (!ans.length) return null;
  for (var i = 0, len = ans.length; i < len - 1; i++)
    ans[i].next = ans[i + 1];

  return ans[0];
};

//first missing possitive
var firstMissingPositive = function(nums) {
  var hash = [];
  for(var i = 0, len = nums.length; i < len; i++)
    if (nums[i] <= 0) continue;
    else hash[nums[i]] = true;

  for(var i = 1; ; i++)
    if (!hash[i])
      return i;
};

//longestPalindrome
var longestPalindrome = function(s) {
  let hash = {};

  for (let item of s)
    hash[item] = ~~hash[item] + 1;

  let exsitsOld = false;
  let ans = 0;

  for (let key in hash) {
    let cnt = hash[key];
    ans += cnt & 1 ? cnt - 1 : cnt;
    (cnt & 1) && (exsitsOld = true);
  }

  return ans + exsitsOld;
};

//Magical String
var magicalString = function(n) {
  let arr = [1, 2, 2];
  let index = 2;

  while (arr.length < n) {
    let item = arr[arr.length - 1] === 2 ? 1 : 2;
    for (let i = 0; i < arr[index]; i++)
      arr[arr.length] = item;
    index++;
  }

  let ans = 0;
  for (let i = 0; i < n; i++)
    (arr[i] === 1) && ans++;

  return ans;
};

/*
Simple Recurrence Problem.
//To get the ways you are climbing to Step 3, you can either climb from
Step 2, or Step 1. So if you know the answer that you climb to Step 2 and 1, you can also know the answer to Step 3.
*/
var climbStairs = function(n) {
  var a = [];
  a[0] = 1, a[1] = 1;
  for(var i = 2; i <= n; i++)
    a[i] = a[i - 1] + a[i - 2];
  return a[n];
};


//Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.
var countNumbersWithUniqueDigits = function(n) {
  if (!n)
    return 1;

  var ans = 0;

  for (var i = 1; i <= n; i++) {
    if (i === 1)
      ans += 10;
    else if (i <= 10) {
      ans += A(10, i);
      ans -= A(9, i - 1);
    } else {
      break;
    }
  }

  return ans;
};


function A(a, b) {
  var ans = 1;

  for (var i = a; i >= a - b + 1; i--)
    ans *= i;

  return ans;
}


//valid number
var isNumber = function(s) {
  if (s.trim() === "")
    return false;
  return !isNaN(Number(s));
};

//Power of 2
var isPowerOfTwo = function(n) {
  var tmp = ~~(Math.log(n) / Math.log(2));
  return n === (1 << tmp);
};
//Power of 3
var isPowerOfThree = function(n) {
  if (!n) return false;
  var a = Math.log(n) / Math.log(3);
  return Math.pow(3, Math.floor(a)) === n || Math.pow(3, Math.ceil(a)) === n;
}
//Power of 4
//Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
var isPowerOfFour = function(num) {
  if (!num)
    return false;

  var a = Math.log(num) / Math.log(4);
  return Math.pow(4, Math.floor(a)) === num || Math.pow(4, Math.ceil(a)) === num;
};
