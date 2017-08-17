Implement a basic calculator to evaluate a simple expression string.
The expression string may contain open ( and closing parentheses ),
the plus + or minus sign -, non-negative integers and empty spaces .
You may assume that the given expression is always valid.
/**
* @param {string} s
* @return {number}
*/
var calculate = function(s) {
 var ans = 0;
 var num = 0;  // single number
 var sign = 1;
 var numStack = [];
 var symStack = [];

 for (var i = 0, len = s.length; i < len; i++) {
   var item = s[i];

   if ('0123456789'.indexOf(item) !== -1) {
     num = num * 10 + (+item);
   } else {
     ans += sign * num;
     num = 0;
     if (item === '+')
       sign = 1;
     else if (item === '-')
       sign = -1;
     else if (item === '(') {
       numStack.push(ans);
       symStack.push(sign);
       ans = 0;
       sign = 1;
     } else if (item === ')') {
       ans = symStack.pop() * ans + numStack.pop();
     }
   }
 }

 ans += sign * num;
 return ans;
};



Implement a basic calculator to evaluate a simple expression string.
The expression string contains only non-negative integers, +, -, *, /
operators and empty spaces . The integer division should truncate toward zero.
You may assume that the given expression is always valid.
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.replace(/\s/g, '');
  var num = 0;
  var numStack = [];
  var sym = '+';  // 前一个符号，默认可为 '+'

  for (var i = 0, len = s.length; i < len; i++) {
    var item = s[i];

    if (~'+-*/'.indexOf(item) || i === len - 1) {
      (i === len - 1) && (num = num * 10 + (+item));

      if (sym === '-')
        numStack.push(-num);
      else if (sym === '+')
        numStack.push(+num);
      else if (sym === '*')
        numStack.push(numStack.pop() * num);
      else
        numStack.push(~~(numStack.pop() / num));

      num = 0;
      sym = item;
    } else {
      num = num * 10 + (+item);
    }
  }

  var ans = 0;
  numStack.forEach(function(item) {
    ans += item;
  });

  return ans;
};
