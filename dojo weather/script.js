// remove cookie window

function deleteCookie(){
    var user = document.getElementById("acceptCookies");
    if (user.style.display === "none") {
        user.style.display = "block";
    } else {
        user.style.display = "none";
    }
}

// changing temp display
// I am still working on this! Turning assignment in without it working 100% but will keep working on it and will resubmit!

function celToFht(option){
    var temp = document.querySelectorAll("hot")
    
    if (option.value == "celsius"){
        for(var i = 0; i < temp.length; i++){
            temp[i].innerText = Math.round((temp[i].innerText - 32) * (5/9))
        }
    }
    else{
        for(var i = 0; i < temp.length; i++){
            temp[i].innerText = Math.round((temp[i].innerText * (9/5)) * 32);
        }
    }
}
celToFht();




function celToFht2(option){
    var temp2 = document.querySelectorAll("cold")
    
    if (option.value == "celsius"){
        for(var i = 0; i < temp2.length; i++){
            temp2[i].innerText = Math.round((temp2[i].innerText - 32) * (5/9))
        }
    }
    else{
        for(var i = 0; i < temp2.length; i++){
            temp2[i].innerText = Math.round((temp2[i].innerText * (9/5)) * 32);
        }
    }
}
celToFht2();