// var a = ["Muhammad Rashid",
//     "Muhammad Kashif",
//     "Waqas",
//     "Shahid ",
//     "Muhammad Saqib",
//     "Muhammad Shahzeb",
//     "Muhammad zeb",
//     "Muhammad Shzeb",
//     "Muhammad Shah",
// ];

// var students = ["Muhammad Rashid", "Muhammad Kashif","Waqas","Shahid ","Muhammad Saqib", "Muhammad Shahzeb","Muhammad zeb","Muhammad Shzeb","Muhammad Shah"]

// var a = "Waqas";
// var i = students.indexOf(a);
// console.log(i)


// var a = "KARACHI";

// //KARACHI
// //karachi

// var b = "KARACHI"
// b = b.toLowerCase();
// b =b.toUpperCase();

// if (a == b){
//     console.log("City Matched", b)
// }


// var a = "KARACHI";

// var firstLetter = a.slice(0, 1);
// firstLetter = firstLetter.toUpperCase();
// var otherletters = a.slice(1);
// otherletters = otherletters.toLowerCase();

// var b = firstLetter + otherletters;
// console.log(b);

// var c = 0;
// var a = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum doloribus modi maiores ex deleniti repudiandae dignissimos non expedita, perspiciatis inventore earum quidem sapiente quia porro nam eligendi suscipit nemo nihil?"

// // word find = consectetur
// // replace By = ABCDE

// for (var i = 0; i < a.length; i++){
//     // finding text
//     var word = a.slice(i, i + 11);
//     c+=1
//     console.log(word);
//     if (word == "consectetur"){
//         console.log("Word Found");
//         break;
//     }
// }
// console.log(c)



// var c = 0;
// var a = "Lorem ipsum dolor sit amet perspiciatis consectetur adipisicing elit. Eum doloribus modi maiores ex deleniti consectetur repudiandae dignionitassimos n,  inventore earum quidem sapiente quia porro nam eligendi suscipit nemo n expedihil?"

// // word find = consectetur
// // replace By = ABCDE

// for (var i = 0; i < a.length; i++){
//     // finding text
//     var word = a.slice(i, i + 11);
//     c+=1
//     console.log(word);
//     if (word == "consectetur"){
//         console.log("Word Found");
//         // word replace
//         var starting = a.slice(0, i);
//         var ending = a.slice(i + 11);
//         var b = starting + "ABCDE" + ending;
//         console.log(b)
        
//         break;
//     }
// }
// console.log(c)

// practice /////////////////////////////////////////////////////////////////////////

// var Lorem = "Lorem ipsum dolor sit amet perspiciatis consectetur adipisicing elit. Eum doloribus modi maiores ex deleniti repudiandae dignionitassimos n,  inventore earum quidem sapiente quia porro nam eligendijhuaty suscipit nemo n expedihil?"

// for (var i = 0; i < Lorem.length; i++){
//     var word = Lorem.slice(i, i + 14);
//     console.log(word);
//     if (word == 'eligendijhuaty'){
//         console.log("Word Found")
//         // replace word

//         var starting = Lorem.slice(0, i);
//         var ending = Lorem.slice(i + 14);
//         var b = starting + "ABCDE" + ending;
//         console.log(b)
        
//         break
//     }

// }

// Second Method Without Loop//////////////////////////////////////////////////


// var i = a.indexOf("consectetur");
// console.log(i);
// var starting = a.slice(0, i);
// var ending = a.slice(i + 11);
// var b = starting + "ABCDE" + ending;
// console.log(b)



// var  b = a.replace("consectetur", "ABCDE")
// console.log(b);

// var  b = a.replace(/consectetur/g, "ABCDE") //is me jo g hai global h mtlb jitni bar bhi aye ga usy replace kr dy ga
// console.log(b);

// var a  = "*";
// var b = a.repeat(8)

// console.log(b);

// var a = "ABCD EFGH";
// var b = a.split(" ");

// console.log(b);

// var a = "ABCD EFGH";
// var b = a.split(" ");
// var c = b.join("T");
// console.log(b);
// console.log(c);


// Rounding//////////////////////////////////////////////////////////////////////////////

// var a = 1.5;
// var b = Math.round(a)
// console.log(b);

// var a = Math.ceil(1.9);
// console.log(a);

// // floor backword ke liye
// var a = Math.floor(1.9);
// console.log(a);


// Random Number/////////////////////////////////////////////////////////////////////////

// var a = Math.random();
// // random ki Range // 0.111111111111111111 se 0.99999999999999999
// var diceValue = Math.ceil(a * 6);
// console.log(diceValue);


// var b = Math.random();
// var Tass = Math.ceil(b);
// console.log(Tass);


// if (" ") {
//     console.log("True");
// }   
// else{
//     console.log("False");
//     }



// var a = "10.63";

// var b = +a;
// var b = Number(a);
// var b = parseInt(a);

// console.log(b);

// var a = "10123456.43";
// var b = a.toString(a);
// console.log(b);


// var a = 10.12343;
// // var b = a.toLocalString(a);
// var b = a.toFixed(2);

// var c = a * 313;
// var d = a * 313;

// console.log(b, c , d);



// current Datetime

// var a = new Date();

// a.setDate(1);
// a.setMonth(0);
// // a.setDay(0);
// a.setFullYear(2000);
// a.setHours(12);
// a.setMinutes(36);
// a.setMilliseconds(1200);

// console.log(a);



var a = new Date();

// a.setDate(1); // Pehle din ko set karein
a.setMonth(2); // January ko set karein
a.setFullYear(2024); // Saal ko set karein
a.setHours(12); // Ghanton ko set karein
a.setMinutes(36); // Minutes ko set karein
a.setMilliseconds(1200); // Milliseconds ko set karein

// Ab 5 din aage ki tareekh set karein
a.setDate(new Date().getDate() + 5);

console.log(a);

