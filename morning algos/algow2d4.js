// Could we determine if a certain value was present? Write a function called isPresent2d(arr2d, value) that returns true if the value is present and false otherwise


var arr2d = [[2, 5, 8], [3, 6, 1][5, 7, 7]];

function isPresent2d(arr2d, value) {
    for (var i = 0; i < arr2d.length; i++) {
        for (var x; x < arr2d[i].length; j++) {
            if (arr2d[i][j] == value) {
                return true;
            }
        }
    }
    return false;
}

var value = 3;
isPresent2d();


    // Given a 2 dimensional array (an array containing arrays), return a new array containing just the values from inside the sub-arrays. Don't assume the array will always be the same size, or that the sub-arrays are all the same length (the array might be jagged). Don't use built-in methods like Array.prototype.flat() but feel free to use .push(value) and/or .pop() where needed.

    // complete the following function


    var arr2d = [[2, 5, 8], [3, 6, 1][5, 7, 7]];
    var newArray = [];
    for (var i = 0; i <arr2d.length; i++) {
        for (var j = 0; j < arr2d[i].length; j++)
        newArray.push(arr2d[i][j]);
    }
    console.log(newArray);