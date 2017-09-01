var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 // Returns the first element of an array.
_.first = function(array) {
  return array[0];
  // Place your solution here
};

 // Returns the first n number of elements in an array.
_.take = function(array, n) {
  if(n === undefined){
    n = 1;
  }
  return array.slice(0, n);
	// Place your solution here
};

// Returns the last element of an array.
_.last = function(array) {
  return array.pop();
	// Place your solution here
};

// Returns the last n number of elements in an array.
_.takeRight = function(array, n) {
  if(n === undefined){
    n = -1;
  }
  return array.slice(-n);
	// Place your solution here
};

// Returns a new array with all falsey values removed.
// falsy values: false, null, 0, "", undefined, and NaN.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(array) {
  return array.filter(function(el){
   return (!!el);
  });
	// Place your solution here
};

// Returns a new array of elements in the first argument, but
// excludes any element found in the second argument.
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function(arrayOne, arrayTwo) {
  var newArr = arrayOne.filter(function(el){
      return arrayTwo.indexOf(el) === -1;
    });

    return newArr;
	// Place your solution here
};

// Returns element with minimum
// value in an array.
_.min = function(array) {
	// Place your solution here
  var sorted = array.sort(function(a, b){
    return a - b;
  });
  return sorted[0];
};

// Returns element with maximum
// value in an array.
_.max = function(array) {
  var sorted = array.sort(function(a, b){
    return b - a;
  });
  return sorted[0];
	// Place your solution here
};

// Returns either index of matched element or
// -1.
_.indexOf = function(array, el) {
  return array.indexOf(el);
	// Place your solution here
};

/*************** BONUS ***************/
// Retuns a new array with elements in shuffled order.
_.shuffle = function(array) {
  var length = array.length;
  var newArr= array.slice();
  for(var i = 0; i < newArr.length; i++){
    //if(newArr.length < array.length){
        var index = Math.floor(Math.random() * length);
        var temp = newArr[index];
        newArr[index] = newArr[i];
        newArr[i] = temp;
     // }
    }
//console.log(index);
return newArr;
	// Place your solution here
};

/**************************************
************* COLLECTIONS *************
**************************************/
// Returns the length of a collection.
_.size = function(collection) {
  if(typeof collection === "string" || Array.isArray(collection)){
    return collection.length;
  }
  return Object.keys(collection).length;
	// Place your solution here
};

// Iterates on each element of a collection and
// then returns the original collection.
_.forEach = function(collection, callback) {
	// Place your solution here
  var itirated = [];
  if(typeof collection === "string" || Array.isArray(collection)){
    for(var i = 0; i < collection.length; i++){
     itirated.push(callback(collection[i], i, collection));
    }
  } else {
    for(var key in collection){
      itirated.push(callback(collection[key]));
    }
  }
  return collection;
};

// Iterates on each element of a collection and
// then returns a new array.
_.map = function(collection, callback) {
  var mapped = [];
    if(typeof collection === "string"){
      for(var i =0; i < collection.length; i++){
       mapped.push(callback(collection[i], i, collection));
      }
    }else if(Array.isArray(collection)){
      for(var j = 0; j < collection.length; j++){
      mapped.push(collection[j] * collection[j]);
      }
   }else{
     for(var key in collection){
     mapped.push(collection[key] * collection[key]);
     }
   }
  return mapped;
	// Place your solution here
};

// Returns a new collection with filtered elements.
_.filter = function(collection, callback) {
  var filtered = [];
    if(typeof collection === "string"){
      for(var i =0; i < collection.length; i++){
          if(collection[i] === "z"){
            filtered.push(collection[i]);
        }
      }
    }else if(Array.isArray(collection)){
      for(var j = 0; j < collection.length; j++){
        if(collection[j] % 2 === 0){
        filtered.push(collection[j]);
        }
      }
   }else{
     for(var key in collection){
       if(collection[key] % 2){
        filtered.push(collection[key]);
      }
     }
   }
  return filtered;
	// Place your solution here
};

// Returns a new collection with unfiltered elements.
_.reject = function(collection, callback) {
  var rejected= [];
    if(typeof collection === "string"){
      for(var i =0; i < collection.length; i++){
          if(collection[i] !== "z"){
            rejected.push(collection[i]);
        }
      }
    }else if(Array.isArray(collection)){
      for(var j = 0; j < collection.length; j++){
        if(collection[j] % 2){
        rejected.push(collection[j]);
        }
      }
   }else{
     for(var key in collection){
       if(collection[key] % 2 === 0){
        rejected.push(collection[key]);
      }
     }
   }
  return rejected;
	// Place your solution here
};

/*************** BONUS ***************/
 // Returns n number of elements in a collection.
_.sample = function(collection, n) {
  var newObj = {};
 if(typeof collection === "string"){
   return collection.substr((Math.floor(Math.random()*n)), n);
   } else if(Array.isArray(collection)){
   return collection.splice((Math.floor(Math.random()*n)),n);
   }else{
     var collectionArr = Object.keys(collection);
     var index = Math.floor(Math.random()*n);
     return collectionArr.splice((Math.floor(Math.random()*n)),n);
   }

	// Place your solution here
};

module.exports = _;
