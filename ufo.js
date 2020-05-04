var heartBeat;
var pos;
var inc;
var slider;
var x;
var y = 300;
let particles = [];


function setup() {
    createCanvas(windowWidth, (windowHeight - 200));
    angleMode(DEGREES);
    slider = createSlider(1, 10, 0);

    //position and increment set up
    pos = 0.0;
    inc = 3.0;

    //particles setup
    
}
function draw () {
    clear();
    background('pink');

    var mySinVal = sin(pos);
    amplified = mySinVal * 30;

    //ufo movement loop
    pos = pos + slider.value();
    x = ((amplified * 8) + y) + slider.value();

    //earth
    fill('green');
    rect(0, 520, windowWidth, 200)
    
    //ufo trails
    let p = new Particle();
    particles.push(p);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()){
            particles.splice(i, 1);
        }
    }

    // moving UFO
    fill('orange')
    noStroke();
    ellipse(x, y, amplified);
    ellipse(x, (y + 20), 100, 40);

    //tractor beam
    fill('rgba(255,255,0, 0.33)');
    triangle(x, y + 20, windowHeight, windowHeight + y, windowWidth + y, y + x);

    
   
}
    //creating new particles
class Particle {
    constructor() {
        this.x = x-50;
        this.y = y+20;
        this.vx = random(-5, -1);
        this.vy = random(-1, 0);
        this.alpha = 255;
    }
    finished() {
        return this.alpha < 0;
    }
    update(){
        this.x += this.vx;
        this.y += this.vy
        this.alpha -= 5;
    }
    show() {
        noStroke;
        fill(255, this.alpha);
        ellipse(this.x, this.y, 16);
    }

}