// function abc(){
//     console.log("Test Function Calling");
// }

// console.log("ABC");

// abc();


// function abc(){
//     console.log("Test Function Calling");
// }

// console.log("ABC");

// abc();
// abc();
// abc();

// function abs(){
//     console.log("Practice Again");
// }
// console.log("ABS");

// abs();

// function printMyMessage(message){
//     console.log("My Message: " + message);
// }
// printMyMessage("ABS");
// printMyMessage("Rashid Bhatti");


// function printMyMessageAgain(message){
//     console.log("My Message: " + message);
// }

// printMyMessageAgain("Kiya yrr!");
// printMyMessageAgain("Bs phir")



// function calculateDiscount(amount, dis){
//     var price  = amount;
//     var discount = dis;
//     var total = price - discount;
//     console.log(total);
// }

// calculateDiscount(400, 100);
// calculateDiscount(500, 200);


//////////////////////////////////////// class 13 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// local variable   // (Examlpe   var a = "abc";)
// global variable
// return


// global variable

var a = "abc";

if(true){
  if(true){
  console.log(a)
  }
}


function abc(){
    var a = "abc";
  }
  console.log(a);
  abc();
  
if(true){
  var a = "ABC";
}
console.log(a);   // ye bahr bhi kaam kry ga


var total;
function calcDiscount(price, discount){
   total = price - discount;
}
calcDiscount(1000, 100);
calcDiscount(500, 50);
console.log(total);



function abc() {
  var a = "junaid ali"
  return a;
  // return "sjdias"; // dosra return nhi chaly ga 
}
var val = abc();
abc();
console.log(val);