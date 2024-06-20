/////////////////////////////////////// Chapter 35 - 37 (Functions)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 1. Code the first line of a function displayAlert.



// 2. Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand.


// 3. Code a function that calls 2 other functions.


// 4. Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function.


// 5. Code the first line of a function named concat that has 3 parameters, the first three letters of the alphabet. Call that takes a variable, a string, and a number as arguments.


// 6. Code a function that has 2 parameters. Concatenate them and assign the result to a variable that hasn't been declared beforehand.


// ADD Task
////////create a function taking 2 parameters, first parameter for price and second parameter for discount percentage. calculate discount percentage and return the final amount after discount.\\\\\\\\\\\

// function calculateDiscount(price, percentage){
//     var amount = price;
//     var percentage = discount;
//     var total = amount - percentage;
//     console.log(total);
// }
// calculateDiscount(500, 10)



//calculate the sum of all numbers of this array
var amounts = [1, 232, 43, 341, 5, 343, 432, 341, 53, 56, 32, 800];

var sum = 0;

for (var i = 0; i < amounts.length; i++) {
    sum += amounts[i];
}

console.log("The sum of all numbers in the array is: " + sum);

