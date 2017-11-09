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
  var newArr = arr
  newArr.push('foo')
  console.log(newArr)
  return newArr;

}
