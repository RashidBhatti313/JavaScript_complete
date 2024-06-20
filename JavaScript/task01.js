// Calculate Percentage

// var a = +prompt("Enter your Math Marks")
// var b = +prompt("Enter your Physics Marks")
// var c = +prompt("Enter your Chemistry Marks")
// var d = +prompt("Enter your English Marks")
// var e = +prompt("Enter your Islamiat Marks")

// // console.log(a+b+c+d+e)

// var sum = (a + b + c + d + e)
// // console.log(sum)

// var total = ((sum / 550) * 100)
// // console.log(total)

// if (total >= 80) {
//     alert("Excellent! You Got ${total}% A+ Grade")
// }
// else if (total >= 70) {
//     alert("Congratulation! You Got ${total}% A Grade")
// }
// else if (total >= 60) {
//     alert("Congratulation! You Got ${total}% B Grade")
// }
// else if (total >= 50) {
//     alert("Congratulation! You Got ${total}% C Grade")
// }
// else {
//     alert("Sorry! You Got ${total}% Failed")
// }


// var a = "Rashid"
// var b = "Bhatti"

// alert(a + b)

// var num = 10;
// var anotherNum = 1;
// var popularNumber = num + anotherNum;
// console.log(popularNumber)

// var question = "Your species?";
// var defaultAnswer = "human";
// var spec = prompt(question, defaultAnswer);
// console.log(spec)


// var x = prompt("Where does the Pope live?");
// if (x === "Vatican") {
//     alert("Correct!");
// }
// if (x !== "Vatican") {
//     alert("Wrong answer");
// }

// var correctAnswer = "Vatican";
// if (x === correctAnswer) {
//     alert("Correct!");
// }
// else {
//     score--;
//     userIQ = "problematic";
//     alert("Incorrect");
// }

////////////////////////////// tasks for loops

// var a = ["a", "b", "c", "d", "e"]
// var b = [1, 2, 3, 4, 5]

// var c = []
// for (var i = 0; i <a.length; i++){
//     for (var j = 0; j < b.length; j++){
//         console.log(a[i], b[j])
//         c.push(a[i] + b[j])
//     }
// }
// console.log(c)


//                          //Practice tasks for loops\\

var a = ["a", "b", "c", "d", "e"]
var b = [1, 2, 3, 4, 5]

var c = []
for (var i = 0; i < a.length; i++){
    for (var j = 0; j < b.length; j++){
        console.log(a[i], b[j])
        c.push(a[i] + b[j])
    }
}
console.log(c)
