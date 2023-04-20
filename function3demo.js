// //Methods (have “.lowercase” name ) -----------------------------------------

// //Array Methods:
// .splice()
// .push()

// //String Methods:
// .toUpperCase()
// .join()
// .split()

// //Function
// hasUniqueChars()

// // Higher-Order Functions ----------------------------------------------------

//This is an outer function (higher order function)
function outer(cbf){
    cbf()
}

//This is the inner function (callback function) - function declaration
function inner(){
    console.log("This is the callback (inner) function.")
}
outer(inner)


//This is the inner function (callback function) - in-line (anonymous)
outer(function(){
    console.log("This is the callback (inner) function.")
})

//This is the inner function (callback function) - in-line ARROW (anonymous)
outer(() => {
    console.log("This is the callback (inner) function.")
})

// // Built-in Higher-Order Array Methods (ones that take callbacks)----------------------------------------------------
// .filter, .map, .forEach, and .reduce (don't worry about how they work; just learn how to use them)

// .filter, .map, .forEach take up to 3 param: element (required), index, and array

// let nums = [1,2,3,4,5] // (1-5 are the elements, index is the osition of each (0-4), and nums is array

// 1. ----- .forEach()

console.log("----------")
console.log("for-loop")
console.log("----------")
let nums = [1,2,3,4,5]
for(let i=0; i<nums.length; i++){
    console.log(nums[i], " is at index: ", i, " array: ", nums)
}// printing elements/indexes with for-loop

console.log("----------")
console.log("forEach")
console.log("----------")
nums.forEach((element, index, array) => {
    console.log(element, " is at index: ", index, " array: ", array)
})// printing elements/indexes with forEach

let sum = 0
nums.forEach(function(element){
    sum += element
    console.log(sum)
})
console.log(sum) // Sum the 'nums' array

let colors = ["red", "green", "white", "green", 'purple', 'red']
let colorsCount = {}

colors.forEach((element) => {
    if(colorsCount[element]){
        colorsCount[element]++
    } else {
        colorsCount[element] = 1
    }
})

console.log("colorsCount", colorsCount)

// 2. ----- .map()

// 3. ----- .filter()

// 4. ----- .reduce()

