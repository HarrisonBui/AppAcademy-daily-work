function sum1(){
  let args = Array.from(arguments);
  let total = 0;
  args.forEach( (el) => (total += el));
  return total;
}

// console.log(sum2(1,2,3,4));

function sum2(...args){
  let total = 0;
  args.forEach( (el) => (total += el));
  return total;
}

// console.log(sum2(1,2,3,4));


// myBind with arguments
Function.prototype.myBind = function(){
  let bindArgs = Array.from(arguments);
  let context = bindArgs.shift();

  return (...callArgs) => {
    return this.apply(context, bindArgs.concat(callArgs));
  };
};


// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }
//
// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
//
// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
//
// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// markov.says.myBind(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
// // Breakfast says meow to me!
// true



function curriedSum(numArgs){
  let numbers = [];

  function _curriedSum (num){
    numbers.push(num);

    if (numbers.length === numArgs){
      let sum = 0;
      numbers.forEach((n) => (sum += n));
      return sum;
    }
    else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

// const sum = curriedSum(4);

// console.log(sum(1));
// console.log(sum(2));
// console.log(sum(3));
// console.log(sum(4));

 // console.log(sum(5)(30)(20)(1)); // => 56


Function.prototype.curry = function(numArgs){
  let totalArgs = [];
  let that = this;
  function _curry(arg){
    totalArgs.push(arg);

    if (totalArgs.length === numArgs) {
      // return that.apply(null, totalArgs);
      return that(...totalArgs);
    } else {
      return _curry;
    }
  }

  return _curry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThree(4, 20, 6)); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30
console.log(f1);
// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
