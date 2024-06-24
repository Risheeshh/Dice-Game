var i;
var j;
document.querySelector("button").addEventListener("click", handleClick);

function handleClick(){
    i = Math.floor(Math.random()*6+1);
    j = Math.floor(Math.random()*6+1);
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+i+".png");
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+j+".png");

    if(i>j){
        document.querySelector("h1").textContent = "Player 1 wins";
        document.querySelector("h1").classList.remove("draw");
    }

    else if(j>i){
        document.querySelector("h1").textContent = "Player 2 wins";
        document.querySelector("h1").classList.remove("draw");

    }

    else{
        document.querySelector("h1").classList.add("draw");
        document.querySelector("h1").textContent = "Lets try Again shall we";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    // Get the icon element
    var icon = document.querySelector("i");

    // Ensure the icon exists
    if (icon) {
        // Add event listener for mouseover
        icon.addEventListener("mouseover", iconMouseOver);
        
        // Add event listener for mouseout
        icon.addEventListener("mouseout", iconMouseOut);
    }
});

function iconMouseOver() {
    document.querySelector("i").classList.add("fa-bounce");
}

function iconMouseOut() {
    document.querySelector("i").classList.remove("fa-bounce");
}
