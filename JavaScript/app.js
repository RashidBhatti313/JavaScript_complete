// alert("ABC")

// var a = "ABC"
// console.log(a)

// var b = 20
// console.log(b)
// b = 30
// console.log(b)

// var a = 10
// var b = a + 30

// console.log(b)

// var a = 10
// var b = 40 - a

// console.log(b)

// var a = 90 - 30
// console.log(a)

// var a = 10 * 5 + 30
// console.log(a)

// var a = 10 * (5 + 30)
// console.log(a)

// var a = 20
// var b = 30

// var c = a + b
// console.log(c)

// var a = 20
// var b = 30

// var c = a - b
// console.log(c)

// var a = 20
// var b = 30

// var c = a * b
// console.log(c)

// var a = 20
// var b = 30

// var c = a / b
// console.log(c)

// var a = "30"
// var b =  20

// var c = a - b
// console.log(c)

// var a = "30"
// var b =  20

// var c = a + b
// console.log(c)   // concatination because type change. 


// var a = "Rashid"
// var b = "Bhatti"

// var c = a+" "+b
// console.log(c)


//                          // Class two \\

// var a = 10
// var b = ++a

// console.log(b) 

// var a = 10
// var b = a++

// console.log(b)
// console.log(a)

// var name = " Muhammad Rashid Bhatti"

// var a = prompt("Enter first name")
// var b = prompt("Enter last name") 
// console.log(a, b)

// var a = +prompt("Enter Marks")
// var b = +prompt("Enter Marks")
// var c = +prompt("Enter Marks")
// var d = +prompt("Enter Marks")
// var e = +prompt("Enter Marks")
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// var total = (a + b + c + d + e)
// console.log(total)

// var asd  = ''  //legal
// var 123  = ''  //ilegal
// var ad12 = ''  //legal
// var 12ab = ''  //ilegal
// var var  = ''  //ilegal
// var ab@s = ''  //ilegal
// var ab_  = ''  //legal



//                              //if else statement\\

// var a = 20

// var b = 20

// if (a == b){
//     console.log("A is equal to B you can do Action.")
// }
// else{
//     console.log("A is not equal to B.")
// }


// var marks = 70
// if (marks > 70){
//     console.log("Mithai")
// }
// else{
//     console.log("Dholai")
// }


// var marks = 60
// if (marks >= 70){
//     console.log("Mithai")
// }
// else if(marks >= 50){
//     console.log("Amma ne baxha lia.")
// }
// else{
//     console.log("Dono se dhulai.")
// }


// class three

// var a = "10"

// if (a === 10){
//     console.log("A is Equal.")
// }

// var age = 18
// var StudentCard = true
// var dept = "science"

// if (StudentCard == true){
//     if (dept == "science"){
//         console.log("Allow")
//     }
//     else{
//         console.log("Not Allow")
//     }
// }
// else{
//     console.log("Not Allow")
// }

// var StudentCard = true
// var dept = "science"

// if (StudentCard == true && dept == "science"){
//     console.log("Allow")
// }
// else{
//     console.log("Not Allow")
// }


// if (StudentCard == true || dept == "science"){
//     console.log("Allow")
// }
// else{
//     console.log("Not Allow")
// }


// var students = ["Rashid", "Shahid", "junaid"]
// console.log(students[1])
// students[2] = "Ali"
// console.log(students[2])
// console.log(students)
// console.log(students[2])

// var students = ["Rashid", "Shahid", "Kashif","junaid"]

// End pe kam krty h\\
// students.push('Waqas')            //End me Add Karta hai
// students.pop()                    //End se Remove  Karta hai


// starts me kam krty h\\
// students.unshift("Kashif")        //Start se Add Karta hai.
// students.shift()                  //Start se Remove Karta hai.

// var b = students.slice(1, 3)      // Elements Nikal ke liye 
// var b = students.slice(1)
// console.log(b)

// students.splice(1,3)              // Removed karna OR Cut Paste Karna
// students.splice(1,1 ,"Waqas", "Haris")
// students.splice(1,0 ,"Waqas", "Haris")

// console.log(students)


//                           //practice\\

var students = ["Rashid", "Shahid", "Kashif","junaid"]
// students.push("Waqas")
// students.pop()

// students.unshift("Waqas")
// students.shift()

// var b = students.slice(1,3)
// console.log(b)
// students.splice(1,1 ,"Waqas", "Haris")
// var i = students.indexOf("Shahid")
// var i = students.lastIndexOf("Kashif")
// console.log(i)

// var a = students.length
// console.log(a)

// console.log(students)


// print last Element 
// var last = students.length
// var std = students[last -1]
// console.log(std)

var last = students.slice(-1)
console.log(last)
