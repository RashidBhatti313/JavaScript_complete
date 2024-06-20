var parent = document.getElementById('parent');
var inp = document.getElementById('inp');

// Set Attributes in js
// function abc(){
//     console.log("ABC Works");
// }

// inp.setAttribute("class", "abc");
// inp.setAttribute("id", "abc");
// inp.setAttribute("onfocus", "abc()");

function delList(btn){
    console.log(btn.parentNode);
    btn.parentNode.remove();
}
function editList(btn){
    console.log(btn.parentNode.childNodes[0]);
    btn.parentNode.childNodes[0].nodeValue = prompt();
}
function deleteAll(){
    parent.innerHTML = "";
}

function addElement() {
    var pera = document.createElement("P");
    var text = document.createTextNode(inp.value);
    pera.appendChild(text);

    var editBtn = document.createElement("BUTTON");
    var editText = document.createTextNode("Edit");
    editBtn.setAttribute("onclick", "editList(this)");
    editBtn.appendChild(editText);

    var deleteBtn = document.createElement("BUTTON");
    var deleteText = document.createTextNode("Delete");
    deleteBtn.setAttribute("onclick", "delList(this)");
    deleteBtn.appendChild(deleteText);

    pera.appendChild(editBtn);
    pera.appendChild(deleteBtn);

    parent.appendChild(pera);
    console.log(pera);
    inp.value = "";
}









