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
    // create if-statement to check if elements property (red, green, etc.) exists
    if(colorsCount[element]){

        colorsCount[element]++
    } else {
        colorsCount[element] = 1
    }
})
console.log("colorsCount", colorsCount)

// 2. ----- .map()
// does not mofidy original array, returns copy of array
const numArray = [0, 1, 2, 3, 4]

// without arrow function
const mappedArr = numArray.map(function(num){
    return num += 2
})

// // with arrow function
// const mappedArr = numArray.map(num => num += 2)
console.log(mappedArr) // [2, 3, 4, 5, 6]


let nums2 = [ 1,2,3,4]

// we're going to multiply each number by 2 using .map
let nums2x2 = nums2.map((element) => {
    return element*2
})
console.log("nums2: ", nums2)
console.log("nums2x2: ", nums2x2)

//CBF of nums2-1.map instead of in-line CBF
function cbf(num){
    return num - 1
}

let nums2Minus1 = nums2.map(cbf)

console.log("nums2-1: ", nums2Minus1)

// 3. ----- .filter()
let numsArr = [2,45,3,123,56,4,8,9,33]
// filter numsArr to get odd numbers with for-loop
let forLoopOddNums = []
for(let i=0; i < numsArr.length; i++){
    numsArr[i] % 2 === 1 ? forLoopOddNums.push(numsArr[i]) : null
}
console.log("forLoopOddNums: ", forLoopOddNums)

// filter numsArr to get odd numbers with .filter
let filterOddnums = numsArr.filter((num) => {
    return num % 2 === 1
})
console.log ("filterOddNums: ", filterOddnums)

// array of objects
const cars = [
    {name: 'honda civic', price: 30000},
    {name: 'toyota corolla', price: 35000},
    {name: 'kia rio', price: 25000},
    {name: 'tesla x', price: 60000},
    {name: 'honda pilot', price: 45000},
    {name: 'chevy bolt', price: 40000},
    {name: 'ford focus', price: 20000},
    {name: 'honda odyssey', price: 30000},
]

// filtering cars that have price >= 30000 using .filter()
let filteredCars = cars.filter((car) => {
    return cars.price >= 30000
})
console.log("filteredCars: ", filteredCars)

// filtering only honda cars using .filter()
let hondaCars = cars.filter((car) => {
    return car.name.includes('honda')
})
console.log("hondaCars: ", hondaCars)

// 4. ----- .reduce() = single cbf and returns a single value
// up to 4 argumants: acculmulator (req), curr val (req), index, array
// .reduce is often used to create a total sum, but can be used for other (more advanced) purposes
let numsArray = [3,1,2,5]
// get the sum of the numsArray with .reduce
let reduceSum = numsArray.reduce((accumulator, currentValue) => {
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`)// to see process
    return accumulator + currentValue
})
console.log("reduceSum: ", reduceSum)

// 5. ----- chaining
// get the sum of hondaCars from the 'cars' Array
let hondaSumPrice = cars.filter((car) => car.name.includes('honda')).reduce((acc, curr) => acc + curr.price, 0)
console.log("hondaSumPrice: ", hondaSumPrice)