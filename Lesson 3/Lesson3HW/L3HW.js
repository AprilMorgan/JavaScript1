function addname() {
    let name = birthdayform.first.value + " " + birthdayform.last.value;
    let ul = document.getElementById("attendance");
    let li = document.createElement("LI");
    li.appendChild(document.createTextNode(name));
    ul.appendChild(li);
}