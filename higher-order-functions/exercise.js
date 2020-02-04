// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
console.log(addS("pizza"));
console.log(addS("bagel"));

// Challenge 3
function map(array, addTwo) {
  let result = [];
  for (let element of array) {
    result.push(addTwo(element));
  }
  return result;
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4
let result = 0;
let arr = [3, 5, 6, 8, 9, 79, 85, 45];

function mutiplyBy10(n) {
  return n * 10;
}
function forEach(array, mutiplyBy10) {
  for (let e of array) {
    result += mutiplyBy10(e);
  }
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  var result = [];
  array.forEach((v, i, arr) => {
    result = result.push(callback(v, i, arr));
  });
}

//Extension 2
function reduce(array, callback, initialValue) {
  var result = initialValue;
  array.forEach(v => {
    result = callback(result, v);
  });
  return result;
}

//Extension 3
function intersectionOf2Array(array1, array2) {
  return array1.reduce((acc, v) => {
    acc = acc.concat(
      array2.filter(v2 => {
        if (v2 == v) {
          return v;
        }
      })
    );
    return acc;
  }, []);
}

function intersection(...arrays) {
  var result = arrays[0];
  return arrays.reduce((acc, v) => {
    result = intersectionOf2Array(result, v);
    acc = result;
    return acc;
  }, []);
}
console.log(
  intersection([
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 20]
  ])
);
// should log: [5, 15]

//Extension 4
function union(arrays) {
  var arraysFlat = arrays.flat();

  return arraysFlat.reduce((acc, v, i) => {
    if (i == arraysFlat.lastIndexOf(v)) {
      acc = acc.concat(v);
    }
    return acc;
  }, []);
}

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, Matches) {
  return array1.reduce((acc, v) => {
    let value = array2.filter(v2 => {
      if (Matches(v) == v2) {
        return v2;
      }
    });
    if (value.length != 0) {
      acc[v] = Matches(v);
    }

    return acc;
  }, {});
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6

function multiMap(arrVals, expandString) {
  return arrVals.reduce((acc, v) => {
    acc[v] = expandString.reduce((acc2, v2) => (acc2 = acc2.concat(v2(v))), []);
    return acc;
  }, {});
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
