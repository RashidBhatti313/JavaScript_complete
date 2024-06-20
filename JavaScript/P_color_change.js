var parent = document.getElementById("parent");
var arr = parent.childNodes;

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i].nodeType == 1) {
        console.log(arr[i].nodeName);
        arr[i].style.color = "red";
    }
}