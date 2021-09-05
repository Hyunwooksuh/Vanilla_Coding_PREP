/* globals window, _ */

/*
 *
 * ⛔️이미 작성이 완료된 함수의 내용은 수정/삭제하지 마세요.
 * ⛔️이미 작성이 완료된 함수의 내용은 반드시 이해하셔야 합니다.
 *
 */
(function () {
  ("use strict");

  window._ = {};

  /*
   *
   * 🥇첫 번째 퀘스트 indentity입니다.
   *
   * 이 외에도 아래에 총 20개 가량의 함수 내용이 비어져 있습니다.
   * 빈 함수 내용들을 차근차근 채워나가세요.
   *
   */
  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  _.identity = function (val) {
    return val;
  };

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values;
   *
   *
   * IMPORTANT NOTE!
   * ===========
   *
   * The .first function is implemented for you, to help guide you toward success
   * in your work on the following functions. Whenever you see a portion of the
   * assignment pre-completed, be sure to read and understand it fully before
   * you proceed. Skipping this step will lead to considerably more difficulty
   * implementing the sections you are responsible for.
   */

  // [DO NOT MODIFY]
  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function (array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function (array, n) {
    const lastIndex = array.length - 1;
    if (n === undefined) return array[lastIndex];
    if (n > array.length) return array.slice();
    if (n === 0) return [];
    return array.slice(-n);
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  _.each = function (collection, iterator) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (!(collection[i].key === NaN)) {
          iterator(collection[i], i, collection);
        }
      }
    } else {
      for (key in collection) {
        if (collection.hasOwnProperty(key)) {
          iterator(collection[key], key, collection);
        }
      }
    }

  };

  // [DO NOT MODIFY]
  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function (array, target) {
    // TIP: Here's an example of a function that needs to iterate, which we've
    // implemented for you. Instead of using a standard `for` loop, though,
    // it uses the iteration helper `each`, which you will need to write.
    var result = -1;

    _.each(array, function (item, index) {
      if (item === target && result === -1) {
        result = index;
        return;
      }
    });

    return result;
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function (collection, test) {
    const result = [];
    _.each(collection, function(element){
      if (test(element)) result.push(element);
    })
    return result;
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function (collection, test) {
    const result = [];
    for (const element of collection) {
      if (!(test(element))) result.push(element);
    }
    return result;
  };

  // Return the results of applying an iterator to each element.
  _.map = function (collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
    const result = [];
    for (const element of collection) {
      result.push(iterator(element));
    }
    return result;
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  //
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the iterator. In other words, in
  // the case where a starting value is not passed, the iterator is not invoked
  // until the second element, with the first element as its second argument.
  //
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  _.reduce = function (collection, iterator, accumulator) {
    const copyCollection = [...collection];
    let tally;

    if (accumulator === undefined) tally = copyCollection.shift();
    else tally = accumulator;

    for (let i = 0; i<copyCollection.length; i++) {
      tally = iterator(tally, copyCollection[i]);
    }
    return tally;
  };

  // [DO NOT MODIFY]
  // Determine if the array or object contains a given value (using `===`).
  _.contains = function (collection, target) {
    // TIP: Many iteration problems can be most easily expressed in
    // terms of reduce(). Here's a freebie to demonstrate!
    if (Array.isArray(collection)) {
      return _.reduce(
        collection,
        function (wasFound, item) {
          if (wasFound) {
            return true;
          }
          return item === target;
        },
        false
      );
    } else {
      for (let key in collection) {
        if (collection[key] === target) {
          return true;
        }
      }
      return false;
    }
  };

  // Determine whether all of the elements match a truth test.
  _.every = function (collection, iterator = _.identity) {
    // TIP: Try re-using reduce() here.
    if (collection.length === 0) return true;

    return _.reduce(
      collection, function (isTrue, item) {
        const result = iterator(item);
        if (!result) isTrue = false;
        return isTrue;
      }, true);

  };
  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function (collection, iterator) {
    if (collection.length === 0) return false;
    if (iterator === undefined) {
      for (let element of collection) {
        if (element === true) return true;
      }
      return false;
    }
    if (iterator === _.identity) {
      for (let element of collection) {
        if (Boolean(element)) return true;
      }
      return false;
    } else {
      for (let element of collection) {
        if (iterator(element)) return true;
      }
      return false;
    }
  };
  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  _.extend = function (obj) {
    for (let i = 0; i < arguments.length; i++) {
      for (let key in arguments[i]) {
        obj[key] = arguments[i][key];
      }
    }
    return obj;
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function (obj) {
    for (let i = 0; i < arguments.length; i++) {
      for (let key in arguments[i]) {
        if (obj[key] !== undefined) continue;
        obj[key] = arguments[i][key];
      }
    }
    return obj;
  };

  /**
   * ADVANCED COLLECTION OPERATIONS
   * ==============================
   */

  /**
   * FUNCTIONS
   * =========
   *
   * Now we're getting into function decorators, which take in any function
   * and return out a new version of the function that works somewhat differently
   */

  // [DO NOT MODIFY]
  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function (func) {
    // TIP: These variables are stored in a "closure scope" (worth researching),
    // so that they'll remain available to the newly-generated function every
    // time it's called.
    var alreadyCalled = false;
    var result;

    // TIP: We'll return a new function that delegates to the old one, but only
    // if it hasn't been called before.
    return function () {
      if (!alreadyCalled) {
        // TIP: .apply(this, arguments) is the standard way to pass on all of the
        // infromation from one function call to another.
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
      // The new function always returns the originally computed result.
      return result;
    };
  };

  // Memorize an expensive function's results by storing them. You may assume
  // that the function only takes primitives as arguments.
  // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
  // same thing as once, but based on many sets of unique arguments.
  //
  // _.memoize should return a function that, when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function (func) {
    const cache = {};
    return function () {
      const key = JSON.stringify(arguments);
      if (cache[key] === undefined) {
        cache[key] = func.apply(this, arguments);
        return cache[key];
      } else {
        return cache[key];
      }
    }
  };

  // Calls the method named by functionOrKey on each value in the list.
  // Note: You will need to learn a bit about .apply to complete this.
  _.invoke = function (collection, functionOrKey) {
    const result = [];
    if (typeof functionOrKey === 'string') {
      for (let i = 0; i < collection.length; i++) {
        result.push(collection[i][functionOrKey]());
      }
      return result;
    } else {
      for (let i = 0; i < collection.length; i++) {
        let target = functionOrKey.apply(collection[i]);
        result.push(target);
      }
      return result;
    }
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  //
  // Hint: Use Array.isArray to check if something is an array
  _.flatten = function (nestedArray) {
    //const nestedArray = [1, [2], [3, [[[4]]]]];
    let arr = [];
    for (let i = 0; i < nestedArray.length; i++) {
      const result = Array.isArray(nestedArray[i]);
      if (result === false) {
        arr.push(nestedArray[i]);
      } else {
        arr = arr.concat(_.flatten(nestedArray[i]));
      }
    }
    return arr;
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.  See the lodash doc for extra details
  // on this function.
  //
  // Note: This is difficult! It may take a while to implement.
  _.throttle = function (func, wait) {
    let isTrue = false;
    return function () {
      if (!isTrue) {
        func();
        isTrue = true;
        setTimeout(function () {
          isTrue = false;
        }, wait);
      }
    }
  };
})();