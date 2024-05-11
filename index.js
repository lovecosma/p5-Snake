let x;

function setup() {
    createCanvas(400, 400);
    x = 50
}

function draw() {
    background(220);
    x = x + 1;
    ellipse(x+1,50,80,80);
    if(x === 100){
        x = 50
    }
}