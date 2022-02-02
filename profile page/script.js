// change user name

function changeName() {
    document.getElementById("user").innerHTML = "Mark Hamill";
}

// remove user request

// function hide(element) {
//     element.remove();
// }

function deleteList() {
    var user = document.getElementById("userList");
    if (user.style.display === "none") {
        user.style.display = "block";
    } else {
        user.style.display = "none";
    }
}

function deleteList2() {
    var user = document.getElementById("userList2");
    if (user.style.display === "none") {
        user.style.display = "block";
    } else {
        user.style.display = "none";
    }
}