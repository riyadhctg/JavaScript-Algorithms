//Sort an array of integer with Insetion Sort algorithm

var sortedArray = function (arr) {
  for (var i = 1; i<arr.length; i++) {
    for (var j = 1; j<arr.length; j++){
      if (arr[i] < arr[j-1]) {
        var temp = arr[j-1];
        arr[j-1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

var arr1 = [2,1,4,-5,6,3];

console.log(sortedArray(arr1));
