function numberOfPairs(a, k){
  let pairs = 0;

  let unique = [];
  for(let x = 0; x < a.length; x++){
    if(unique.indexOf(a[x]) === -1){
      unique.push(a[x]);
    }
  }

  for(let i = 0; i < unique.length; i++){
    for(let j = i+1; j < unique.length; j++){
      if(unique[i] + unique[j] === k){
        pairs++;
      }
    }
  }

  return pairs;
}

console.log(numberOfPairs([7,6,6,3,9,3,5,1], 12));


function braces(values) {

    let numVals = values[0];
    let stack = [];
    let array = [];
  	let bool = true;

    let left = ['(', '[', '{'];
    let right = [')', ']', '}'];
    let match = {
        ')':'(',
        ']':'[',
        '}':'{',
    };

    for (let i = 1; i <= numVals; i++) {
        for(let j = 0; j < values[i].length; j++) {
           if(left.indexOf(values[i][j]) > -1) {
            stack.push(values[i][j]);
            }

            if(right.indexOf(values[i][j]) > -1) {
                let stackStr = stack.pop();
                if(match[values[i][j]] != stackStr) {
                    array.push("NO");
                  	bool = false;
                  	break;
                }
            }
          }
      if(bool){
     	 array.push("YES");
      }
      bool = true;
    }

    return array;
}


function maxDifference(a){
  let max = a[1] - a[0];

  for(let i = 0; i < a.length; i++){
    let temp;
    for(let j = i+1; j < a.length; j++){

      temp = a[j] - a[i];
      if(temp > max){
        max = temp;
      }
    }
  }

  return max;
}

console.log(maxDifference([7,2,3,10,2,4,8,1]));



function numberOfPairs(a, k){
  let pairs = 0;

  let unique = [];
  for(let x = 0; x < a.length; x++){
    if(unique.indexOf(a[x]) === -1){
      unique.push(a[x]);
    }
  }

  for(let i = 0; i < unique.length; i++){
    for(let j = i+1; j < unique.length; j++){
      if(unique[i] + unique[j] === k){
        pairs++;
      }
    }
  }

  return pairs;
}
om
