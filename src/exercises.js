function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }
  if (a.length < 1 || b.length < 1) {
      return false;
    }

    if (a[0] === b[0] || (a.pop() === b.pop())) {
      return true;

    } else {
      return false;

    }
}

function endsMeet(values, n) {
  let empty = [];
  let array = [];
  if (!values || values.length < n || n < 0) {
    return array;
  }
  for (i = 0; i < n; i++) {
    array.push(values[i]);
  }
  for (z = values.length - n; z < values.length; z++) {
    array.push(values[z])
  }
  if (n === 0) {
    return empty;
  }
  return array
}

function difference(numbers) {
  let diff = 0;
 let la = 0;
 let sm = 0;
 let count = 0;
 if (!numbers || numbers.length <= 0) {
   diff = undefined
   return diff;
 }
 if (numbers.some(isNaN)) {
   return undefined;
   count = 1
 }
 if (count != 1) {
   let y = Number.MIN_SAFE_INTEGER
   for (z = 0; z < numbers.length; z++) {
     if (numbers[z] > y) {
       y = numbers[z];
       la = numbers[z];
     }
   }
   if (count != 1) {
     let v = Number.MAX_SAFE_INTEGER
     for (x = 0; x < numbers.length; x++) {
       if (numbers[x] < v) {
         v = numbers[x];
         sm = numbers[x];
       }
     }
     diff = la - sm;
     return diff;
   }
 }
}

function max(number) {
  if (!number || number.length < 3 || number.length % 2 == 0) {
    return undefined;
  }
  if (number.some(isNaN)) {
    return undefined;
  }
  let fi = number[0]
  let la = number[number.length-1]
  let mi = number[((number.length/2)-1) + 0.5]
  if ((fi > la) && (fi > mi)) {
    return fi;
  }
  else if ((mi > la) && (mi > fi)) {
    return mi;
  }
  else if ((la > fi) && (la > mi)) {
    return la;
  }
  else {
    return fi;
  }
}



function middle(values) {
  let array = []
  if (!values || values.length < 3 || values.length % 2 == 0) {
    return [];
  }
  let index = (values.length/2)-1 + 0.5
  let two_mi = values[index]
  let one_mi = values[index - 1]
  let three_mi = values[index + 1]
  array.push(one_mi);
  array.push(two_mi);
  array.push(three_mi);
  return array
  }

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
