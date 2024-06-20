var a = ["Muhammad Rashid",
    "Muhammad Kashif",
    "Waqas",
    "Shahid ",
    "Muhammad Saqib",
    "Muhammad Shahzeb",
]


for (var i = 0; i < 10; i++) {
    console.log("Loop" + i)
}

var b = "Muhammad Shahzeb=>" 

for (var i = 0; i < a.length; i++) {
    console.log(a[i])

    if (a[i] === b){
        console.log("Word Found", a[i])
    }
    else{
        console.log("Word Not Found")
    }
}

var a = ["Muhammad Rashid",
    "Muhammad Kashif",
    "Waqas",
    "Shahid ",
    "Muhammad Saqib",
    "Muhammad Shahzeb",
    "Muhammad zeb",
    "Muhammad Shzeb",
    "Muhammad Shah",
]

var b = "Muhammaad Shahzeb"

var found = false
for (var i = 0; i < a.length; i++) {
    //    console.log(a[i])

    if (a[i] === b){
        found = true

    }
}
if (found == true){
    console.log("Found")
}
else{
    console.log("Not Found")
}
