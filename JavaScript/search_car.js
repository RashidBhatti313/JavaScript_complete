var obj = {
    id: 1,
    name: "ABC",
    age: 18    
};

var keys = Object.keys(obj);
console.log(keys);

var values = Object.values(obj);
console.log(values);

var entries = Object.entries(obj);
console.log(entries);

var a = ["A", "C", "B", [1, 2, 3, ["a", "b", "c"]]];
var b = a.flat(Infinity);
console.log(b);


var a = {};
