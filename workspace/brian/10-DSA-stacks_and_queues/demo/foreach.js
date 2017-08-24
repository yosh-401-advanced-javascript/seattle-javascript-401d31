function customForEach(arr, action) {    
  for (var i = 0; i < arr.length; i++) {
    action(arr[i], i, arr);
  }
};

function doubler(num) {
  console.log(num * 2);
};

var nums = [1, 2, 3, 4, 5];

customForEach(nums, doubler);
