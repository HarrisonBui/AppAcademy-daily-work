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


//Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
var findNthDigit = function(n) {
  return dfs(1, n);

  function dfs(digits, left) {
    let start = Math.pow(10, digits - 1);
    let last = Math.pow(10, digits) - 1;
    let len = last - start + 1;
    let num = len * digits;

    if (num < left)
      return dfs(digits + 1, left - num);
    else {
      let remainder = left % digits ? left % digits : digits;
      let rightNumber = Math.ceil(left / digits) - 1 + start;

      return +String(rightNumber)[remainder - 1];
    }
  }
};

//Ones and Zeroes
var findMaxForm = function(strs, m, n) {
  function count(str) {
    let num = 0;
    for(let item of str)
      item === '0' && num++;

    return num;
  }


// dp[i][j] represents the maximum number that made up by i 0s and j 1s
  let dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = [];
    for (let j = 0; j <= n; j++)
      dp[i][j] = 0;
  }

  for (let i = 0, len = strs.length; i < len; i++) {
    let item = strs[i];
    let zeroNum = count(item);
    let oneNum = item.length - zeroNum;

    for (let j = m; j >= zeroNum; j--)
      for (let l = n; l >= oneNum; l--)
        dp[j][l] = Math.max(dp[j][l], dp[j - zeroNum][l - oneNum] + 1);
  }

  return dp[m][n];
};


//Reorder List
var reorderList = function(head) {
  if (!head)
    return;

  var node = head;
  var ans = [];

  while (node) {
    ans.push(node);
    node = node.next;
  }

  // remove the head node
  ans.shift();

  // rearrange the node array
  var res = [];
  var f = true;

  while (ans.length) {
    var tmp = f ? ans.pop() : ans.shift();
    res.push(tmp);
    f = !f;
  }

  // make a new list
  for (var i = 0, len = res.length; i < len; i++)
    if (i !== len - 1)
      res[i].next = res[i + 1];
    else
      res[i].next = null;

  head.next = res[0];
};


//Pascal's Triangle Given numRows, generate the first numRows of Pascal's triangle.
var generate = function(numRows) {
  var ans = [];

  for (var i = 0; i < numRows; i++) {
    if (i === 0) {
      ans[i] = [1];
      continue;
    }

    ans[i] = [];
    for (var j = 0; j <= i; j++)
      if (j === 0)
        ans[i][j] = ans[i - 1][j];
      else if (j === i)
        ans[i][j] = ans[i - 1][j - 1];
      else
        ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
  }

  return ans;
};


//Pascal's Triangle 2 Given an index k, return the kth row of the Pascal's triangle.
var getRow = function(rowIndex) {
  var ans = [];

  for (var i = 0; i < rowIndex + 1; i++) {
    if (i === 0) {
      ans[i] = [1];
      continue;
    }

    ans[i] = [];
    for (var j = 0; j <= i; j++)
      if (j === 0)
        ans[i][j] = ans[i - 1][j];
      else if (j === i)
        ans[i][j] = ans[i - 1][j - 1];
      else
        ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
  }

  return ans[rowIndex];
};


//Gray code
var grayCode = function(n) {
  var ans = [];
  for (var i = 0; i < (1 << n); i++)
    ans[i] = i ^ (i >> 1);
  return ans;
};

//swap nodes in pairs
var swapPairs = function(head) {
  if (!head)
    return null;

  var arr = [];

  while (head) {
    var next = head.next;
    head.next = null;
    arr.push(head);
    head = next;
  }

  var len = arr.length;

  for (var i = 0; i < len; i+= 2) {
    var a = arr[i];
    var b = arr[i + 1];

    if (!b)
      continue;

    arr[i] = b;
    arr[i + 1] = a;
  }

  for (var i = 0; i < len - 1; i++)
    arr[i].next = arr[i + 1];

  return arr[0];
};


//Longest Common Prefix
var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';

  var len = strs.reduce(function(pre, item) {
    return Math.min(pre, item.length);
  }, Number.MAX_VALUE);

  var ans = '';
  for (var i = 0; i < len; i++) {
    var a = strs[0][i];
    var f = strs.every(function(item) {
      return item[i] === a;
    });

    if (!f) break;
    ans += a;
  }

  return ans;
};

//reverse integer
var reverse = function(x) {
  var minn = - (1 << 30) * 2;
  var maxn = (1 << 30) * 2 - 1;
  var ans;
  var arr = x.toString().split('');
  if (x < 0)
    arr.shift();  // remove '-'
  ans = Number(arr.reverse().join(''));
  if (x < 0)
    ans *= -1;
  console.log(minn, maxn)
  if (ans < minn || ans > maxn)
    return 0;
  else
    return ans;
};


//next Permutation
var nextPermutation = function(nums) {
  var len = nums.length;

  var flag = false;

  var pos, changePos;

  for (var i = len - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      flag = true;
      pos = i;
      break;
    }
  }

  if (!flag) {
    nums.sort(function(a, b) {
      return a - b;
    });
  } else {
    for (var i = len - 1; ; i--)
      if (nums[i] > nums[pos]) {
        var tmp = nums[i];
        nums[i] = nums[pos];
        nums[pos] = tmp;
        break;
      }

    var tmp = nums.slice(pos + 1).sort(function(a, b) {
      return a - b;
    });

    nums.length = pos + 1;

    Array.prototype.push.apply(nums, tmp);
  }

};

//search range
var searchRange = function(nums, target) {
  var idx = [];
  nums.forEach(function(item, index, array) {
    if (item === target)
      idx.push(index);
  });

  if (!idx.length)
    return [-1, -1];
  return [idx[0], idx[idx.length - 1]];
};
