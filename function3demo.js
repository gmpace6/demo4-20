// //Methods (have “.lowercase” name )

// //Array Methods:
// .splice()
// .push()

// //String Methods:
// .toUpperCase()
// .join()
// .split()

// //Function
// hasUniqueChars()

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

