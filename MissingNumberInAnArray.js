//How to Find Missing Number on Integer Array of 1 to 100

var missingNumber = function (arr, totalCount) {
  var expectedSum = totalCount * ((totalCount + 1)/2);
  var actualSum = 0;
  for (var i = 0; i < arr.length; i++){
    actualSum += arr[i];
  }

  return (expectedSum - actualSum);
}

var arr1to100 = function () {
  var newArr = [];
  for (var i = 1; i<=100; i++){
    if (i === 59){
      //do nothing
    }
    else
    newArr.push(i);
  }
  return newArr;
};


console.log(missingNumber(arr1to100(), 100));

