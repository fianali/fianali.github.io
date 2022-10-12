// let body = document.querySelector("div");
// body.addEventListener("click", giveAlert);


// function giveAlert() {
//     alert("this is an alert");
// }

let hover = document.getElementById("hover");

hover.addEventListener("mouseover", mouseOver);
hover.addEventListener("mouseout", mouseOut);

function mouseOver() {
    hover.style.color = "red";
}

function mouseOut() {
    hover.style.color = "black";
}


function changeImage() {
    let image = document.getElementById("penguinClick")
    if (image.src.match('img/penguin.png')) {
        image.src = "img/penguin2.png"
    }
    else {
        image.src = "img/penguin.png"
    }
}