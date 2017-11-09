var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(arr, n){
  var newArr = [];
  newArr = [n, ...arr]
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr,n){
  arr.unshift(n);
  return arr;
}
function addElementToEndOfArray(arr,n){
  arr.push("foo");
  return arr;
}
