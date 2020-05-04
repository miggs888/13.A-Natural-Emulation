var heartBeat;
var pos;
var inc;
var slider;
var x;
var y = 300;

function setup() {
    createCanvas(windowWidth, (windowHeight - 200));
    angleMode(DEGREES);
    slider = createSlider(1, 10, 0);

    pos = 0.0;
    inc = 3.0;
}
function draw () {
    clear();
    background('pink');

    var mySinVal = sin(pos);
    amplified = mySinVal * 30;

    pos = pos + slider.value();
    x = pos + slider.value();

    //earth
    fill('green');
    rect(0, windowHeight - y, windowWidth, y)
    
    // moving UFO
    fill('orange')
    noStroke();
    ellipse(x, y, amplified);
    ellipse(x, (y + 20), 100, 40);

    //tractor beam
    fill('rgba(255,255,0, 0.50)');
    triangle(x, y + 20, windowHeight, windowHeight + y, windowWidth + y, y + x);
    
}