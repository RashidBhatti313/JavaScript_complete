// var student1 = {
//     rollNO: "45632",
//     name: "M Rashid Bhatti",
//     fatherName: "M Arshad Ali",
//     cnicNo: "02012-4587795-9",
//     contact: "0301020509462",
// };

// student1.rollNO = "78946";

// delete student1.contact;

// var a = "inst" in student1;

// student1.age = 18;

// console.log(a);
// console.log(student1);


// var objects = {
//     name: "Rashid Bhatti",
//     age: 18,
//     isActive: true,
//     hobbies: ["abc", "jkds", "ueiw"],
//     address: {
//         house: "yi-3892",
//         city: "Karachi",
//         country: "Pakistan",
//     },
//     calculation: function (a, b) {
//         return a + b;
//     },
// };

// var a = objects.calculation(400, 500);

// console.log(a);
// console.log(objects);




var students = [
    {
        rollNO: "AB-001",
        result: 70,
    },
    {
        rollNO: "AB-002",
        result: 80,
    },
    {
        rollNO: "AB-003",
        result: 90,
    },
    {
        rollNO: "AB-004",
        result: 100,
    },
    {
        rollNO: "AB-005",
        result: 110,
    },
    {
        rollNO: "AB-006",
        result: 120,
    },
    {
        rollNO: "AB-007",
        result: 130,
    },
    {
        rollNO: "AB-008",
        result: 140,
    },
    {
        rollNO: "AB-009",
        result: 150,
    },
    {
        rollNO: "AB-010",
        result: 160,
    },
]

var inp = document.getElementById("inp");

function searchResult(){
    for (var i = 0; i < students.length; i++){
        var std = students[i];
        if (std.rollNO == inp.value) {
            console.log(std);
        }
    }
}