// P01 Find the last element of a list.
function p01(arr) {
  return arr[arr.length - 1];
}

console.log(p01([1, 2, 3, 4]));

// P02 Find the last but one element of a list.
function p02(array) {
  return array.at(-2);
}

console.log(p02([1, 2, 3, 4, 5, 6]));

// P03 Find the K'th element of a list.
function p03(a, array) {
  return array.at(a);
}

console.log(p03(3, [1,2,3,4,5,6]));

// P04 Find the number of elements of a list.
function p04(array) {
  return array.length;
}

console.log(p04([1,2,3,4,5]));

// P05 Reverse a list.
function p05(array) {
  return array.reverse();
}

console.log(p05([1,2,3,4]));

// P06 Find out whether a list is a palindrome.
function p06(string) {
  const reverse = string.toLowerCase()
                        .split("")
                        .reverse()
                        .join("");
  return string === reverse;
}

console.log(p06("Klaudia"));

// P07 Flatten a nested list structure.
function p07(array) {
  return array.flat(Infinity);
}

console.log(p07([1,[2],[3,[4],5],6]));

// P08 Eliminate consecutive duplicates of list elements.
function p08(array) {
  var result = [];

  for (i=0; i<array.length; i++) {
   if(array[i] !== array[i+1]) {
     result.push(array[i]);
   } 
  }
  return result;
}

console.log(p08([1,2,2,2,3,3,4,5,5]));

// P09 Pack consecutive duplicates of list elements into sublists.
function p09(array) {
  var result = [];
  
  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(result.at(-1))) {
      result.push([array[i]])
    } else if (result.at(-1).at(-1) === array[i]) {
      result[result.length - 1].push(array[i]);
    } else {
      result.push([array[i]]);
    }
  }

  return result;
}

console.log(p09([1,1,2,2,2,3,3,3,4,4,5]));

// P10 Run-length encoding of a list.
function p10(array) {
  var grouped = p09(array);
  var result = [];
  
  for (var i = 0; i < grouped.length; i++) {
    result.push([grouped[i].length, grouped[i].at(-1)]);
  }
  return result;
}

console.log(p10([1,1,2,2,2,3,3,3,4,4,5]));

// P11 Modified run-length encoding.
function p11(array) {
  var counted = p10(array);
  var result = [];
  
  for (var i = 0; i < counted.length; i++) {
    if ( counted[i].at(0) === 1 ) {
      result.push(counted[i].at(-1));
    } else {
      result.push(counted[i]);
    }
  }
  return result;
}

console.log(p11([1,1,2,2,2,3,3,3,4,4,5]));

// P12 Decode a run-length encoded list.
function p12(array) {
  var result = [];
  
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      var x = array[i].at(0)
      for (var j = 0; j < x; j++) {
        result.push(array[i].at(-1));
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(p12([[2,1],[3,2],[3,3],[2,4],5]));

// P13 Run-length encoding of a list (direct solution).
function p13(array) {
  var grouped = [];
  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(grouped.at(-1))) {
      grouped.push([array[i]]);
    } else if (grouped.at(-1).at(-1) === array[i]) {
      grouped.at(-1).push(array[i]);
    } else {
      grouped.push([array[i]]);
    }
  }
  var result = [];
  for (var i = 0; i < grouped.length; i++) {
    if (grouped[i].length !== 1) {
      result.push([grouped[i].length, grouped[i].at(-1)]);
    } else {
      result.push(grouped[i].at(-1));
    }
  }
  return result;
}

console.log(p13([1,1,2,2,2,3,3,3,4,4,5]));

// P14 Duplicate the elements of a list.
function p14(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(array[i], array[i]);
  }
  return result;
}

console.log(p14([1,2,3]));

// P15 Duplicate the elements of a list a given number of times.
function p15(array, n) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < n; j++) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(p15([1,2,3], 4));

// P16 Drop every N'th element from a list.
function p16(array, n) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if ( (i+1) % n !== 0 ) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(p16([1,1,2,2,2,3,3,3,4,4,5], 3));

// P17 Split a list into two parts; the length of the first part is given.
function p17(array, n) {
  var first_part = [];
  for (var i = 0; i < n; i++) {
    first_part.push(array[i]);
  }
  var second_part = [];
  for (var i = n; i < array.length; i++) {
    second_part.push(array[i]);
  }
  var result = [];
  result.push(first_part, second_part);
  return result;
}

console.log(p17([1,1,2,2,2,3,3,3,4,4,5], 3));

// P18 Extract a slice from a list.
function p18(array, n, m) {
  var result = [];
  for (var i = n; i < m; i++) {
    result.push(array[i]);
  }
  return result;
}

console.log(p18([1,1,2,2,2,3,3,3,4,4,5], 3, 5));

// P19 Rotate a list N places to the left.
function p19(array, n) {
  var result = [];
  if (n > 0) {
    for (var i = n; i < array.length; i++ ) {
      result.push(array[i]);
    }
    for (var i = 0; i < n-1; i++) {
      result.push(array[i]);
    }
  } else {
    for (var i = n; i < -1; i++) {
      result.push(array[i]);
    }
    for (var i = 0; i < (array.length + n - 1); i++) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(p19([1, 2, 3, 4, 5, 6, 7, 8], 4));

// P20 Remove the K'th element from a list.
function p20(array, n) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if ( i != (n-1)) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(p20([1, 2, 3, 4, 5, 6, 7, 8], 4));

// P21 Insert an element at a given position into a list.
function p21(array, n, m) {
 var first_part = [];
 for (var i = 0; i < n; i++) {
   first_part.push(array[i]);
 }
 var second_part = [];
 for (var i = n; i < array.length; i++) {
   second_part.push(array[i]);
 }
 first_part.push(m);
 var result = []
 first_part.push(second_part)
 return first_part.flat();
}

console.log(p21([1, 2, 3, 4, 5, 6, 7, 8], 4, 9));

// P22 Create a list containing all integers within a given range.
function p22(n, m) {
  var result = [];
  for (var i = n; i <= m; i++) {
    result.push(i);
  }
  return result;
}

console.log(p22(14, 21));