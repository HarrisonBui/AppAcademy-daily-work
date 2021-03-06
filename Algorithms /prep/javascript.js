//Fizzbuzz
for (var i = 1; i <= 100; i++) {
  var f = i % 3 == 0, b = i % 5 == 0;
  console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}


//Valid Palindrome
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

//Longest Palindrome
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

//Shortest Palindrome
function Manacher(s) {
  var str = '*#'
    , dp = []
    , maxn = 0
    , idx = 0;

  for (var i = 0, len = s.length; i < len; i++)
    str += s[i] + '#';

  for (var i = 1, len = str.length; i < len; i++) {
    if (maxn > i) dp[i] = Math.min(dp[2 * idx - i], maxn - i);
    else dp[i] = 1;

    while (str[i - dp[i]] === str[i + dp[i]]) dp[i]++;

    if (dp[i] + i > maxn)
      maxn = dp[i] + i, idx = i;
  }

  var ans = 0
    , pos;

  var pos;
  for (var i = 1; i < len; i++) {
    if (i === dp[i])
      pos = i;
  }

  var tmp = str[pos] === '#' ? '' : str[pos];
  for (var i = pos + 1; i < len; i++) {
    var res = str[i] === '#' ? '' : str[i];
    tmp = res + tmp + res;
  }

  return tmp;
}

var shortestPalindrome = function(s) {
  var str = Manacher(s);
  return str;
};

//Palindrome Linked List
var isPalindrome = function(head) {
  var ans = [];
  while (head) {
    var tmp = head.val;
    ans.push(tmp);
    head = head.next;
  }

  for(var i = 0, len = ans.length; i < len; i++)
    if (ans[i] !== ans[len - 1 - i])
      return false;

  return true;
};

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


//Longest Consecutive 1's
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

//Missing Number
var missingNumber = function(nums) {
  var hash = [];
  nums.forEach(function(item) {
    hash[item] = true;
  });

  for (var i = 0; ; i++)
    if (!hash[i])
      return i;
};

//Sort List
var sortList = function(head) {
  if (head === null)
    return null;

  var tmp = [];
  while (head) {
    var node = new ListNode(head.val);
    tmp.push(node);
    head = head.next;
  }

  tmp.sort(function(a, b) {
    return a.val - b.val;
  });

  for (var i = 0, len = tmp.length; i < len - 1; i++)
    tmp[i].next = tmp[i + 1];

  return tmp[0];
};

//Interger Sort List
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

//First Missing Positive
var firstMissingPositive = function(nums) {
  var hash = [];
  for(var i = 0, len = nums.length; i < len; i++)
    if (nums[i] <= 0) continue;
    else hash[nums[i]] = true;

  for(var i = 1; ; i++)
    if (!hash[i])
      return i;
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

  // Remove the head node
  ans.shift();

  // Rearrange the Node Array
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


//Gray Code
var grayCode = function(n) {
  var ans = [];
  for (var i = 0; i < (1 << n); i++)
    ans[i] = i ^ (i >> 1);
  return ans;
};

//Swap Nodes in Pairs
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

//Reverse Integer
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


//Next Permutation
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

//Search Range
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


//First Missing Positive
var firstMissingPositive = function(nums) {
  for(var i = 0; i < nums.length; i++) {
    move(i);
  }
  for(i = 0; i < nums.length; i++) {
    if(nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums[i - 1] ? nums[i - 1] + 1 : 1;

  function move(i) {
    var tmp;
    if(nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
      tmp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = tmp;
      move(i);
    }
  }
};


//Decimal to Binary
function decimalToBinary(digit) {
  if(digit >= 1) {
    // If digit is not divisible by 2 then recursively return proceeding
    // binary of the digit minus 1, 1 is added for the leftover 1 digit
    if (digit % 2) {
      return decimalToBinary((digit - 1) / 2) + 1;
    } else {
      // Recursively return proceeding binary digits
      return decimalToBinary(digit / 2) + 0;
    }
  } else {
    // Exit condition
    return '';
  }
}

decimalToBinary(3); // 11
decimalToBinary(8); // 1000
decimalToBinary(1000); // 1111101000


//Largest Number
var largestNumber = function(nums) {
  nums.sort(function(a, b) {
    return (b + '' + a) - (a + '' + b);
  });

  var ans = nums.join('');

  for (var i = 0; i < ans.length - 1; i++) {
    if (ans[i] !== '0')
      break;
  }

  return ans.substring(i);
};


//Count Primes
var countPrimes = function(n) {
  var hash = new Array(n)
    , a = Math.sqrt(n);

  for (var i = 2; i <= a; i++) {
    if (!hash[i])
      for (var j = i * i; j < n; j += i)
        hash[j] = true;
  }

  var ans = 0;
  for (var i = 2; i < n; i++)
    if (!hash[i])
      ans ++;

  return ans;


//License Key Formatting
var format = function(chars, length, separator) {
    if (chars.length <= length) {
        return chars.join('');
    }
    return format(chars.slice(0, chars.length - length), length, separator) + separator + chars.slice(-length).join('');
};
var licenseKeyFormatting = function(S, K) {
    var chars = S.split('').filter((char) => {
        return char !== '-';
    });

    return format(chars, K, '-').toUpperCase();

};


//Total Hamming Distance
var totalHammingDistance = function(nums) {
  let one = []
    , len = nums.length;

  nums.forEach(function(item) {
    let index = 0;
    while (item) {
      if (item & 1)
        one[index] = ~~one[index] + 1;

      item >>= 1;
      index++;
    }
  });

  let ans = 0;
  for (let i = 0, oneLen = one.length; i < oneLen; i++) {
    let oneNum = ~~one[i]
      , zeroNum = len - oneNum;

    ans += oneNum * zeroNum;
  }

  return ans;
};


//Island Perimeter
var islandPerimeter = function(grid) {
  if (grid.length === 0)
    return 0;

  let n = grid.length
    , m = grid[0].length
    , ans = 0;

  const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) {
      if (!grid[i][j])
        continue;

      for (let l = 0; l < 4; l++) {
        let neighborCellX = i + dir[l][0];
        let neighborCellY = j + dir[l][1];

        if (neighborCellX < 0 || neighborCellX >= n
            || neighborCellY < 0 || neighborCellY >= m) {
          ans += 1;
          continue;
        }

        ans += !grid[neighborCellX][neighborCellY];
      }
    }

  return ans;
};

//4Sum 2
var fourSumCount = function(A, B, C, D) {
  let p = new Map();
  for (let i = 0, lenA = A.length; i < lenA; i++)
    for (let j = 0, lenB = B.length; j < lenB; j++) {
      let sum = A[i] + B[j];
      let count = ~~p.get(sum);
      p.set(sum, count + 1);
    }

  let ans = 0;
  for (let i = 0, lenC = C.length; i < lenC; i++)
    for (let j = 0, lenD = D.length; j < lenD; j++) {
      let sum = C[i] + D[j];
      ans += ~~p.get(-sum);
    }

  return ans;
};


//Predict The Winner
var PredictTheWinner = function(nums) {
  let len = nums.length
    , isOdd = len & 1
    , dp = [];

  for (let i = 0; i < len; i++)
    dp[i] = [];

  for (let i = 0; i < len; i++) {
    if (isOdd)
      dp[i][i] = nums[i];
    else {
      if (i + 1 < len)
        dp[i][i + 1] = Math.max(nums[i], nums[i + 1]);
    }
  }

  let base = isOdd ? 2 : 3;

  for (let i = base; i < len; i += 2) {
    for (let j = 0; j < len; j++) {
      if (j + i >= len)
        break;
      let left = nums[j] + Math.min(dp[j + 1][j + i - 1], dp[j + 2][j + i]);
      let right = nums[j + i] + Math.min(dp[j][j + i - 2], dp[j + 1][j + i - 1]);
      dp[j][j + i] = Math.max(left, right);
    }
  }

  let sum = 0;
  for (let item of nums)
    sum += item;

  return dp[0][len - 1] >= sum - dp[0][len - 1];
};


//Minimum Number of Arrows to burst Balloons
var findMinArrowShots = function(points) {
  points.sort(function(a, b) {return a[0] - b[0];});

  let ans = 0;
  let preInterval = null;

  for (let i = 0, len = points.length; i < len; i++) {
    let item = points[i];

    if (preInterval === null) {
      preInterval = item;
    } else {
      if (item[0] > preInterval[1]) {
        ans++;
        preInterval = item;
      } else {
        preInterval[0] = item[0];
        preInterval[1] = Math.min(preInterval[1], item[1]);
      }
    }
  }

  preInterval !== null && (ans += 1);

  return ans;
};


//Read Binary Watch
var readBinaryWatch = function(num) {
  let hours = [1, 2, 4, 8];
  let minutes = [1, 2, 4, 8, 16, 32];
  let ans = [];

  dfs(num, 0, 0, 0, 0);

  function dfs(left, a, b, hoursTotal, minutesTotal) {
    if (hoursTotal >= 12 || minutesTotal >= 60)
      return;

    if (left === 0) {
      let str = hoursTotal + ":";
      str += minutesTotal < 10 ? '0' + minutesTotal : minutesTotal;
      ans.push(str);
      return;
    }

    for (let i = a; i < 4; i++) {
      dfs(left - 1, i + 1, b, hoursTotal + hours[i], minutesTotal);
    }

    for (let i = b; i < 6; i++) {
      dfs(left - 1, a, i + 1, hoursTotal, minutesTotal + minutes[i]);
    }
  }

  return Array.from(new Set(ans));


//Single Number 3
var singleNumber = function(nums) {
  var ans = []
    , hash = [];

  nums.forEach(function(item) {
    if (!hash[item])
      hash[item] = 1;
    else
      hash[item]++;
  });

  nums.forEach(function(item) {
    if (hash[item] === 1)
      ans.push(item);
  });

  return ans;
};


//Happy Number
function add(n) {
  var ans = 0;
  while(n) {
    ans += (n % 10) * (n % 10);
    n /= 10;
    n = parseInt(n.toString());
  }
  return ans;
}

var isHappy = function(n) {
  hash = [];
  while(n) {
    if (n === 1) return true;
    if (hash[n]) return false;
    hash[n] = true;
    n = add(n);
  }
};


//Search a 2D Matrix
var searchMatrix = function(matrix, target) {
  for (var i = 0; i < matrix.length; i++)
    for (var j = 0; j < matrix[i].length; j++)
      if (matrix[i][j] === target) return true;

  return false;
};

//Rotate Array
var rotate = function(nums, k) {
  k %= nums.length;
  var tmp = [];
  if (k)
    tmp = nums.slice(-k);
  nums.splice(-k, k);

  Array.prototype.unshift.apply(nums, tmp);
};

//Ugly Number
var isUgly = function(num) {
  if (num === 0)
    return false;

  var a = [2, 3, 5];
  for (var i = 0; i < 3; i++) {
    while (num % a[i] === 0)
      num /= a[i];
  }

  return num === 1 ? true : false;
};

//Ugly Number 2
var nthUglyNumber = function(n) {
  var dp = [], a, b, c;
  dp[0] = 1, a = b = c = 0;

  for (var i = 1; i < n; i++) {
    dp[i] = Math.min(dp[a] * 2, dp[b] * 3, dp[c] * 5);
    if (dp[i] === dp[a] * 2) a++;
    if (dp[i] === dp[b] * 3) b++;
    if (dp[i] === dp[c] * 5) c++;
  }

  return dp[n - 1];
};

//Word Pattern
var wordPattern = function(pattern, str) {
  var arr = str.split(' ');

  if (pattern.length !== arr.length)
    return false;

  var a2b = {}
    , b2a = {};

  for (var i = 0, len = pattern.length; i < len; i++) {
    var a = pattern[i]
      , b = arr[i];

    if (!a2b[a]) {
      a2b[a] = b;
    } else {
      if (a2b[a] !== b)
        return false;
    }

    if (!b2a[b]) {
      b2a[b] = a;
    } else {
      if (baa[b] !== a)
        return false;
    }
  }

  return true;
};


//Bulb Switcher
var bulbSwitch = function(n) {
  var ans = -1 + Math.sqrt(1 + n);
  return Math.ceil(ans);
};


//Interger break
var integerBreak = function(n) {
  if (n === 2)
    return 1;

  if (n === 3)
    return 2;

  var dp = [];

  dp[0] = 1;
  dp[1] = 1;

  for (var i = 2; i <= n; i++)
    dp[i] = -1;

  for (var i = 2; i <= n; i++)
    for (var j = 0; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[j] * (i - j));
    }

  return dp[n];
};


//Valid Perfect Square
var isPerfectSquare = function(num) {
  var a = 0
    , b = num;

  while (a <= b) {
    var mid = (a + b) >> 1
      , ans = mid * mid;

    if (ans > num)
      b = mid - 1;
    else if (ans < num)
      a = mid + 1;
    else
      return true;
  }

  return false;
};


//Sort Characters By Frequency
var frequencySort = function(s) {
  let hash = {};
  for (let item of s)
    hash[item] = ~~hash[item] + 1;

  let arr = [];
  Object.keys(hash).forEach(function(item) {
    arr.push({item: item, count: hash[item]});
  });

  arr.sort(function(a, b) {
    return b.count - a.count;
  });

  let ans = '';
  arr.forEach(function(item) {
    while (item.count--)
      ans += item.item;
  });

  return ans;
};


//Isomorphic Strings
var isIsomorphic = function(s, t) {
  if (s.length !== t.length)
    return false;

  var len = s.length
    , hash = {}
    , _hash = {};

  for (var i = 0; i < len; i++) {
    var a = s[i]
      , b = t[i];

    if (!hash[a] && !_hash[b])
      hash[a] = b, _hash[b] = a;
    else if (hash[a] !== b || _hash[b] !== a)
      return false;
  }

  return true;
};


//Matchsticks To Square
var makesquare = function(nums) {
  function dfs(index, sum, count) {
    if (isOk)
      return;

    if (count === 3) {
      isOk = true;
      return;
    }

    if (sum === target)
      dfs(0, 0, count + 1);

    for (let i = index; i < len; i++) {
      if (hash[i]) continue;
      if (sum + nums[i] > target) continue;
      hash[i] = true;
      dfs(i + 1, sum + nums[i], count);
      hash[i] = false;
    }
  }

  if (nums.length === 0)
    return false;

  let total = 0
    , len = nums.length;

  for (let i = 0; i < len; i++)
    total += nums[i];

  if (total % 4)
    return false;

  let target = total / 4;
  let isOk = false;
  let hash = {};

  dfs(0, 0, 0);

  return isOk;
};


//Next Greater Element
var nextGreaterElement = function(findNums, nums) {
  let ans = [];
  let len = nums.length;

  findNums.forEach((item) => {
    let pos = nums.indexOf(item);
    let hasNextGreaterElement = false;

    for (let i = pos + 1; i < len; i++) {
      if (nums[i] > item) {
        ans.push(nums[i]);
        hasNextGreaterElement = true;
        break;
      }
    }

    if (!hasNextGreaterElement)
      ans.push(-1);
  });

  return ans;
};

//Next Greater Element 2
var nextGreaterElements = function(nums) {
  let len = nums.length;
  nums = nums.concat(nums.slice(0, len - 1));

  let ans = [];
  let stack = [];

  nums.forEach((item, index) => {
    if (index === 0) {
      stack.push({
        num: item,
        index: index
      });
    } else {
      while (true) {
        if (!stack.length) break;
        if (item > stack[stack.length - 1].num) {
          let lastItem = stack.pop();
          ans[lastItem.index] = item;
        } else {
          break;
        }
      }

      stack.push({
        num: item,
        index: index
      });
    }
  });

  ans = ans.slice(0, len);
  for (let i = 0; i < len; i++)
    if (ans[i] === undefined)
      ans[i] = -1;

  return ans;
};


//Find Right Interval
var findRightInterval = function(intervals) {
  intervals.forEach(function(item, index) {
    item.index = index;
  });

  intervals.sort(function(a, b) {
    return a.start - b.start;
  });

  let len = intervals.length;
  for (let i = 0; i < len; i++) {
    let f = true;
    for (let j = i + 1; j < len; j++) {
      if (intervals[j].start >= intervals[i].end) {
        intervals[i].right = intervals[j].index;
        f = false;
        break;
      }
    }
    f && (intervals[i].right = -1);
  }

  intervals.sort(function(a, b) {
    return a.index - b.index;
  });

  let ans = [];
  intervals.forEach(function(item) {
    ans.push(item.right);
  });

  return ans;
};


//Add Two Numbers
var addTwoNumbers = function(l1, l2) {
  var add = 0
    , ans
    , head;

  while(l1 || l2) {
    var a = l1 ? l1.val : 0
      , b = l2 ? l2.val : 0;
    var sum = a + b + add;
    add = ~~(sum / 10);
    var node = new ListNode(sum % 10);

    if (!ans)
      ans = head = node;
    else {
      head.next = node;
      head = node;
    }
    if (l1)
      l1 = l1.next;
    if (l2)
      l2 = l2.next;
  }

  if (add) {
    var node = new ListNode(add);
    head.next = node;
    head = node;
  }

  return ans;
};


//Add Two Numbers 2
var addTwoNumbers = function(l1, l2) {
  let a = []
    , b = []
    , newL1 = l1
    , newL2 = l2;

  while (newL1) {
    a.push(newL1.val);
    newL1 = newL1.next;
  }
  while (newL2) {
    b.push(newL2.val);
    newL2 = newL2.next;
  }

  a.reverse();
  b.reverse();

  let ans = [];
  let add = 0;

  while (a.length || b.length) {
    let c = a.length ? a.shift() : 0;
    let d = b.length ? b.shift() : 0;
    let sum = c + d + add;

    ans.push(sum % 10);
    add = ~~(sum / 10);
  }

  add && (ans.push(add));
  ans.reverse();

  let ret = [];

  for (let i = 0, len = ans.length; i < len; i++)
    ret[i] = new ListNode(ans[i]);
  for (let i = 0, len = ans.length; i < len - 1; i++)
    ret[i].next = ret[i + 1];

  return ret[0];
};


//Find Bottom Left Tree value
var findBottomLeftValue = function(root) {
  let res = [];

  let dfs = (node, step) => {
    if (res[step] === undefined)
      res[step] = node.val;

    node.left && dfs(node.left, step + 1);
    node.right && dfs(node.right, step + 1);
  };

  dfs(root, 0);
  return res.pop();
};


//Number of Islands
var numIslands = function(grid) {
  var n = grid.length;

  if (n === 0) {
    return 0;
  }

  var m = grid[0].length;
  var count = 0;

  for(var i = 0; i < n; i++) {
    for(var j = 0; j < m; j++) {
      if(grid[i][j] === '1') {
        DFSMarking(grid, i, j);
        count++;
      }
    }
  }
  return count;
}

var DFSMarking = function(grid, i , j) {
  var n = grid.length;
  var m = grid[0].length;

  if(i < 0 || j < 0 || i >= n || j >= m || grid[i][j] !== '1') {
    return;
  }
  grid[i][j] = '0';
  DFSMarking(grid, i + 1, j);
  DFSMarking(grid, i - 1, j);
  DFSMarking(grid, i, j + 1);
  DFSMarking(grid, i, j - 1);
}


//First Bad Version
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var start = 1;
        var end = n;

        while (start < end) {
            var mid = start + (end - start) / 2;
            if(!isBadVersion(mid)) {
                end = mid;
            }else {
                start = mid + 1;
            }
        }

        return start;
    };
};


//Container with Most Water
var maxArea = function(height) {
    var maxarea = 0, l = 0, r = height.length -1;

    while (l < r) {
        maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));

        if(height[l] < height[r]){
            l++;
        }else{
            r--;
        }
    }

    return maxarea;
};


//First Duplicate
var firstDuplicate = function(arr) {
  for (i of arr) {
    let posi = Math.abs(i) - 1
    if (a[posi] < 0) return posi + 1
    a[posi] = a[posi] * -1
  }

  return -1
}

 //better solution
function firstDuplicate(a) {
  var x = {};

  for(let i=0; i<a.length;i++)
      if(x.hasOwnProperty(a[i]))
          return a[i];
      else
          x[a[i]]="exist";

  return -1;
}


//First Not Repeating Character
function firstNotRepeatingCharacter(string) {
  var arr = string.split("");

  for(var i = 0; i < arr.length; i++) {
    if(arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }

  return "_";
}


//Rotate Image
function rotateImage(a) {
    // Transpose
    for(var i = 0;i<a.length;i++){
        for(var j = 0;j<i;j++){
            // Switch a[i][j] and a[j][i]
            // With XOR swap
            a[i][j] ^= a[j][i]
            a[j][i] ^= a[i][j]
            a[i][j] ^= a[j][i]
         }
    }
    // Reverse columns
    for(var i in a){
        a[i] = a[i].reverse()
    }

    return a
}


//Relative Ranks
var findRelativeRanks = function(nums) {
  let res = [];

  nums.forEach((item, index) => {
    res.push({
      index: index,
      score: item,
      rank: null
    });
  });

  res.sort((a, b) => (b.score - a.score));

  for (let i = 0, len = res.length; i < len; i++) {
    if (i === 0)
      res[i].rank = "Gold Medal";
    else if (i === 1)
      res[i].rank = "Silver Medal";
    else if (i === 2)
      res[i].rank = "Bronze Medal";
    else
      res[i].rank = (i + 1) + '';
  }

  res.sort((a, b) => (a.index - b.index));

  let ans = [];

  res.forEach((item) => {
    ans.push(item.rank);
  });

  return ans;
};

//Move Zeroes to the End
function moveZeroes(nums) {
  for (let i = nums.length; i--;) {
    if (!nums[i]) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
};


//Find Subsequences
var findSubsequences = function(nums) {
  let len = nums.length
    , ans = []
    , res = [];

  let s = new Set();

  let dfs = (index) => {
    if (res.length > 1) {
      let str = res.toString();
      if (!s.has(str)) {
        ans.push(res.concat());
        s.add(str);
      }
    }

    for (let i = index; i < len; i++) {
      let item = nums[i];

      if (res.length === 0 || item >= res[res.length - 1]) {
        res.push(item);
        dfs(i + 1);
        res.pop();
      }
    }
  };

  dfs(0);

  return ans;
};


//Covert To Title
function convertToTitle(num) {
  let result = "";

  while (num) {
    let code = String.fromCharCode((num - 1) % 26 + "A".charCodeAt());
    num = Math.floor((num - 1)/26);
    result = result + code;
  }

  return result;
}


//Longest Win Streak Given a Character
function longestStreak(str, chr) {
  let longest = 0;
  let current = 0;
  let arr = str.split("");

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === chr) {
      current += 1;

      if(current > longest) {
        longest = current;
      }
    }else {
      current = 0;
    }
  }

  return longest;
}


//Coin Change
var coinChange = function(coins, amount) {
  var ans = [];
  ans[0] = 0;

  for (var i = 0, len = coins.length; i < len; i++) {
    var item = coins[i];
    for (var j = 0; j + item <= amount; j++) {
      if (ans[j] === undefined)
        continue;
      if (ans[j + item] === undefined)
        ans[j + item] = ans[j] + 1;
      else
        ans[j + item] = Math.min(ans[j + item], ans[j] + 1);
    }

  }

  return ans[amount] === undefined ? -1 : ans[amount];
};


//Majority Element
var majorityElement = function(nums) {
  var hash = [];
  for(var i = 0, len = nums.length; i < len; i++) {
    if (!hash[nums[i]]) hash[nums[i]] = 1;
    else hash[nums[i]]++;

    if (hash[nums[i]] > len / 2)
      return nums[i];
  }
};


//Grouping Dishes -codefights
function groupingDishes(dishes) {
  let ingredients = {},
      groups = [],
      dish, i, ingredient;

  for (dish of dishes) {
    for (i = 1; ingredient = dish[i]; i++) {
      if (ingredients[ingredient]) {
        ingredients[ingredient].push(dish[0]);
      }else {
        ingredients [ingredient] = [dish[0]];
      }
    }
  }

  for (i in ingredients) {
    if (ingredients[i].length > 1) {
      groups.push([i, ...ingredients[i].sort()]);
    }
  }

  return groups.sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0]);
}

// let dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
//           ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
//           ["Quesadilla", "Chicken", "Cheese", "Sauce"],
//           ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]]
//
// console.log(groupingDishes(dishes));


//H-Index
var hIndex = function(citations) {
  var len = citations.length;
  for (var i = len; ; i--) {
    var cnt = 0
      , cnt_equal = 0;
    citations.forEach(function(item) {
      if (item > i) cnt++;
      if (item === i) cnt_equal++;
    });

    if (cnt > i) continue;
    if (cnt + cnt_equal < i) continue;
    return i;
  }
};

//Patching array
var minPatches = function(nums, n) {
  var sum = 0;
  var index = 0;
  var ans = 0;

  while (sum < n) {
    if (nums[index] === undefined) {
      sum = sum * 2 + 1;
      ans++;
    } else {
      if (sum + 1 < nums[index]) {
        ans++;
        sum = sum * 2 + 1;
      } else {
        sum += nums[index++];
      }
    }
  }

  return ans;
};

//Find Peak Element
var findPeakElement = function(nums) {
  var len = nums.length;
  nums[-1] = nums[len] = -Number.MAX_VALUE;
  for(var i = 0; i < len; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1])
      return i;
  }
};


//Pair Sum using a Hash
let hashMapTwoSum = (array, sum) => {
  let hashMap = {},
      results = []

  for(let i = 0; i < array.length; i++) {
    if(hashMap[array[i]]) {
      results.push([hashMap[array[i]], array[i]])
    }else {
      hashMap[sum - array[i]] = array[i]
    }
  }

  return results
}

//JumpinJack
def jumpingJack(steps, forbidden_step)
  max_steps = (steps * (steps + 1)) / 2

  stepVerifier(forbidden_step) ? max_steps : (max_steps - 1)
end

def stepVerifier(forbidden_step)
  n = (-1 + Math.sqrt(1 + 8 * forbidden_step)) / 2.0
  n % 1 == 0
end

//Intersection between two linked list
var getIntersectionNode = function(headA, headB) {
    let nodeA = headA;
    let nodeB = headB;

    while (nodeA !== nodeB) {
        nodeA = (nodeA === null) ? headB : nodeA.next;
        nodeB = (nodeB === null) ? headA : nodeB.next;
    }

    return nodeA;
};

//Average of levels in a binary tree
var averageOfLevels = function(root) {
  root.level = 0
  let q = [root]
  let ans = []
  let [sum, num, curLevel] = [0, 0, 0]

  while (q.length) {
    let item = q.shift()
    if (item.level === curLevel) {
      sum += item.val
      num += 1
    } else {
      ans.push(sum / num)
      curLevel += 1
      sum = item.val
      num = 1
    }

    if (item.left) {
      item.left.level = item.level + 1
      q.push(item.left)
    }
    if (item.right) {
      item.right.level = item.level + 1
      q.push(item.right)
    }
  }

  ans.push(sum / num)
  return ans
};

//Exponent
function exponent(base, power) {
    let num = 1;
    for(let i = 0; i < Math.abs(power); i++){
        num = num * base;
    }

    if(power < 0){
        num = 1 / num;
    }

    return num;
}

//Letter combination
function letterCombinations(str) {
   const map = new Map([
  ['2', 'abc'],
  ['3', 'def'],
  ['4', 'ghi'],
  ['5', 'jkl'],
  ['6', 'mno'],
  ['7', 'pqrs'],
  ['8', 'tuv'],
  ['9', 'wxyz']
]);

  if (str === '') return [];

  let res = []

  const bfs = (temp, left) => {
    if (left.length === 0) {
      res.push(temp)
      return
    }

    let options = map.get(left[0])

    for (let i = 0; i < options.length; i++) {
      let item = options[i]
      bfs(temp + item, left.slice(1, left.length))
    }
  }

  bfs('', [...str])

  return res;
}

//Create Pascal Triangle
function createPascalTriangle (numRows) {
  var pascalTriangle = [];

  for (var i = 0; i < numRows; i++) {
    pascalTriangle[i] = new Array(i+1);

    for (var j = 0; j < i+1; j++) {
      if (j === 0 || j === i) {
        pascalTriangle[i][j] = 1;
      } else {
        pascalTriangle[i][j] = pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j];
      }
    }
  }

  return pascalTriangle;
}

//Convert sorted array to binary tree
let sortedArrayToBST = function(nums) {
  return dfs(0, nums.length - 1);

  function dfs(start, end) {
    if (start > end)
      return null;

    var mid = (start + end) >> 1;m .
    var node = new TreeNode(nums[mid]);
    node.left = dfs(start, mid - 1);
    node.right = dfs(mid + 1, end);

    return node;
  }
};

//Binary tree preordered traversal
var preorderTraversal = function(root) {
    var array = [];
    var ans = [];
    var cur = root;

    if(root === null)''
        return [];

    array.push(cur);
    do{
        if(cur !== null)
            ans.push(cur.val);

        if(cur.right !== null)
            array.push(cur.right)

        if(cur.left !== null)
            array.push(cur.left)

        cur = array.pop();
    }while(array.length > 0)

    return ans;
};

//Binary tree level order traversal
let levelOrder = function(root){
    let levelNodes = [root];
    let resultArray = [];
    if(root == null) return resultArray;

    while (levelNodes.length > 0) {
        resultArray.push(levelNodes.map(el => {if(el) return el.val;}));

        let nextLevelNodes = [];
        for(let node of levelNodes){
            if(node && node.left) nextLevelNodes.push(node.left);
            if(node && node.right) nextLevelNodes.push(node.right);
        }

        levelNodes = nextLevelNodes;
    }
    return resultArray;
};

//Find mode in Binary search Tree
var traversal = function(root, func) {
    if (root === null) {
        return null;
    }
    traversal(root.left, func);
    func(root.val);
    traversal(root.right, func);
};

var findMode = function(root) {
    if (root === null) return [];

    var ret;
    var maxCount = Number.MIN_VALUE;
    var prevValue;
    var currentCount;

    traversal(root, function(val) {
        if (prevValue === undefined) {
            prevValue = val;
            currentCount  = 1;
        } else {
            if (prevValue === val) {
                currentCount++;
            } else {
                currentCount = 1;
            }
        }

        if(currentCount > maxCount) {
            ret = [];
            ret.push(val);
            maxCount = currentCount;
        } else if (currentCount === maxCount) {
            ret.push(val);
        }
        prevValue = val;
    });

    return ret;
};
