/////////////////////////////////////////// Question 01\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// var arr = [12, 34, 543, 43, 56, 23, 2, 4, 56, 5,6 ,7 ,9]
// if val < 50,  so multiplied by 2
// if val > 50,  so multiplied by 3
// calculate the total Multiplied amount

var arr = [12, 34, 543, 43, 56, 23, 2, 4, 56, 5, 6, 7, 9];
var totalMultipliedAmount = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 50) {
        totalMultipliedAmount += arr[i] * 2;
    } else {
        totalMultipliedAmount += arr[i] * 3;
    }
}

console.log("Total Multiplied Amount:", totalMultipliedAmount);


/////////////////////////////////////////// Question 02\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var arr1 = ["HSKA", "AHD", "QWR", "QWHJD", "KHM", "KHR"];
var arrWithA = [];

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].includes("A")) {
        arrWithA.push(arr1[i]);
    }
}

console.log("Array with strings including 'A':", arrWithA);

/////////////////////////////////////////// Question 03\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function countLetters(word) {
    // Initialize an object to store the count of each letter
    var letterCount = {};

    // Convert the word to lowercase to handle case sensitivity
    word = word.toLowerCase();

    // Iterate over each character in the word
    for (let i = 0; i < word.length; i++) {
        // Get the current character
        var letter = word[i];

        // Check if the character is a letter
        if (/^[a-z]$/.test(letter)) {
            // If the letter is already in the letterCount object, increment its count
            // Otherwise, initialize its count to 1
            letterCount[letter] = (letterCount[letter] || 0) + 1;
        }
    }

    // Return the letterCount object
    return letterCount;
}

var word = "Bhatti";
console.log("Letter count of '" + word + "':", countLetters(word));


/////////////////////////////////////////// Question 04\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Write a function which teils letter counts of (words)


function isPalindrome(word) {
    word = word.toLowerCase();
    var reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

console.log(isPalindrome("mom"));    
console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello"));

/////////////////////////////////////////// Question 05\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// create a function that take 2 perantes, in first perameter take date and in secound perameter take number of days.

function addDaysToDate(date, days) {
    var newDate = new Date(date);

    newDate.setDate(newDate.getDate() + days);

    return newDate;
}

var currentDate = new Date();
var futureDate = addDaysToDate(currentDate, 7); 
console.log("Current date:", currentDate);
console.log("Future date (after adding 7 days):", futureDate);

/////////////////////////////////////////// Question 06\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// the take is showing the date after the counting of second perameter according the date of first peramter.

function addDaysToDate(date, days) {
    var newDate = new Date(date);

    newDate.setDate(newDate.getDate() + days);

    return newDate;
}

var currentDate = new Date("2024-03-16"); 
var futureDate = addDaysToDate(currentDate, 7); 
console.log("Current date:", currentDate.toDateString());
console.log("Future date (after adding 7 days):", futureDate.toDateString());

