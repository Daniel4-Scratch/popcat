var popcatOpen = "src/open.png"
var popcatClose = "src/close.png"


let pops = 0;
if (localStorage.getItem("clicks") === null | localStorage.getItem("clicks") === NaN | localStorage.getItem("clicks") === undefined | localStorage.getItem("clicks") === "NaN") {
    localStorage.setItem('clicks', pops);
  } else {
    const storedClicks = localStorage.getItem('clicks');
   pops = storedClicks;
  }


//play sound
function playPop() {
    setTimeout(() => { popcat.src = popcatClose; }, 100);
    var audio = new Audio('src/sound/pop1.mp3');
    audio.play();
}
//popcatgopop function
function popcatgopop() {
    pops = parseInt(pops);
    pops += 1;
    localStorage.setItem('clicks', pops);
    document.getElementById("count").innerHTML = pops;
    const popcat = document.getElementById("popcat");
    popcat.src = popcatOpen;
    playPop(); 

}



function resetPops() {
    localStorage.setItem('clicks', 0);
    location.reload();
}


function setPops(input) {
    var input = prompt("Set the pop count to:", input);
    pops = input;
    localStorage.setItem('clicks', pops);
    document.getElementById("count").innerHTML = pops;
}

//listens for space presses and clicks

document.addEventListener('keydown', function (event) {//listens for space presses
    if (event.keyCode == 32) {//space key
        popcatgopop();
    }
});

document.onclick = function (event) {
    popcatgopop();

}

window.onload = function () {
    document.body.onselectstart = function () {
        return false;
    }
}