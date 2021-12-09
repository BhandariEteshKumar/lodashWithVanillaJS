const unique = function (arr) {
  return [...new Set(arr)];
};

const intersection = function (arr1, arr2) {
  arr1 = [...new Set(arr1)];
  return arr1.filter((element) => arr2.indexOf(element) !== -1);
};

const without = function (arr1, arr2) {
  return arr1.filter((num) => arr2.indexOf(num) === -1);
};

const groupBy = (arr1, fun) => {
  return arr1.reduce(function (obj, item) {
    let val;
    if (fun === "length") val = item.length;
    else val = fun(item);
    if (!obj.hasOwnProperty(val)) {
      obj[val] = [];
    }
    obj[val].push(item);
    return obj;
  }, {});
};
let arr1 = [1, 3, 3, 2, 1];
let arr2 = [4, 6, 32, 6, 1, 3];
let nums = [6.1, 4.2, 6.3];
let words = ["one", "two", "three"];
console.log(unique(arr1), intersection(arr1, arr2), without(arr1, arr2));
console.log(groupBy(nums, Math.floor), groupBy(words, "length"));
