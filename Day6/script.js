// Date: 02/06/21
// now using rgb function
function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function getRandomPosition() {
    var x = Math.floor(Math.random() * window.innerWidth - 100);
    var y = Math.floor(Math.random() * window.innerHeight - 10);
    return [x, y];
}

function getRandomText() {
    let text = ["Keep Cliking", "Yeah! Keep Going", "You are doing great", "Cmon! Yeah", "You are a pro"];
    let index = Math.floor(Math.random() * text.length);
    return text[index];
}
//now applying this function on a button
let button = document.querySelector('button');

button.addEventListener('click', function() {
    let color = getRandomColor();
    let position = getRandomPosition();
    console.log(color);
    console.log(position);
    let box = document.getElementById('btn');

    
    //changing the color of the box
    box.style.backgroundColor = color;


    //changing the position of the box
    box.style.position = 'absolute';
    box.style.left = position[0] + 'px';
    box.style.top = position[1] + 'px';

    //changing the text of the box
    let text = getRandomText();
    box.innerText = text;
});