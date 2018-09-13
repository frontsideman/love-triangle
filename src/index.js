/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  preferences.unshift(0);
  var curArr = preferences;
  var count = 0;
  var lovers = [];
  var i, index1, index2, index3, val1, val2, val3;

  for (i = 1; i < curArr.length; i++) {
    index1 = i;
    val1 = curArr[index1];
    index2 = val1;
    val2 = curArr[index2];
    index3 = val2;
    val3 = curArr[index3];
    
    if (index1 === val3 && val1 !== i) {
      lovers.push([val1, val2, val3]);
      count++;
    }
  }

  count = count/3 
  return count;
};
