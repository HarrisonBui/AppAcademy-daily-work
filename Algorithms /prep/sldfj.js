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
