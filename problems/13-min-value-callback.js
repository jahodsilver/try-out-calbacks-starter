/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(array, optionalCb) {
    let smallest = null;

    if (optionalCb === undefined) {
        for (let index=0; index < array.length; index++) {
            currentElement = array[index];

            if (currentElement < smallest || smallest === null)  { // checks if currentElement is less than smallest or if smallest is, at least, defined....after the first iteration, the second part of the OR-ing will always evaluate to false
                smallest = currentElement;
            }
        }

        return smallest;

    } else {

        for (let index=0; index < array.length; index++) {
            currentElementValue = optionalCb(array[index]);

            if (currentElementValue < smallest || smallest === null) {
                smallest = currentElementValue;
            }
        }

        return smallest;
    }
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
