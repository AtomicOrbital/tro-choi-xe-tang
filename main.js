function moveUp(){
    let top = document.getElementById("tank").style["top"]
    top = parseInt(top);
    top = top - 19;
    document.getElementById("tank").style["top"] = top + "px"
}
function moveLeft(){
    let left = document.getElementById("tank").style["left"]
    left = parseInt(left);
    left = left - 19;
    document.getElementById("tank").style["left"] = left + "px"
}
function moveRight(){
    let left = document.getElementById("tank").style["left"]
    left = parseInt(left);
    left = left + 19;
    document.getElementById("tank").style["left"] = left + "px"
}

function moveDown(){
    let top = document.getElementById("tank").style["top"]
    top = parseInt(top);
    top = top + 19;
    document.getElementById("tank").style["top"] = top + "px"
}
