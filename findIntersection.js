// Find Intersection
// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain
// 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order,
// the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to
// return a comma-separated string containing the numbers that occur in elements of strArr in sorted order.
// If there is no intersection, return the string false

function findIntersection(strArr) { 
    var arr1 = strArr[0], arr2 = strArr[1];
    var list1 = arr1.split(", "), list2 = arr2.split(", ");
    var newArr = [];
    for (i = 0; i < list1.length; i++){
      if (list2.includes(list1[i])){
        newArr += list1[i] + ",";
      }
    }
    return newArr.slice(0,newArr.length-1);
  }

  console.log(findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
  console.log(findIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]));
  