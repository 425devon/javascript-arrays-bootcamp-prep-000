var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(arr, n){
  var newArr = [];
  newArr = [n, ...arr]
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr,n){
  arr[0]=n;
  return arr;
}
