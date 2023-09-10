function random() {
    var random = Math.floor(Math.random() * 1000)
    return random
}


function spawnPumpkin() {
    var pumpkin = document.createElement("img");
    pumpkin.src = "IMG/pumpkin.png";

    var coffee = document.createElement("img");
    coffee.src = "IMG/coffee.png";

    pumpkin.className = "image"
    coffee.className = "image"

    pumpkin.style.left = random() + "px";
    coffee.style.left = random() + "px";

    var container = document.querySelector('.container')

    container.appendChild(pumpkin);
    container.appendChild(coffee);

}