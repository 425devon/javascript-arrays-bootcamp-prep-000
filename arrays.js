var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(arr, n){
  var newArr = [];
  newArr = [n, ...arr]
  return newArr;
}
