var numLikes = 3;
var likeElement = document.querySelector("#numLikes");
console.log(likeElement);

function addLikes(){
    numLikes++;
    likeElement.innerText = numLikes;
    console.log(numLikes);
}
