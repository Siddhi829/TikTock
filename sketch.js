var hr, mn, sc;


function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  translate(200,200)
    rotate(-90)

    hr = hour();
    mn = minute();
    sc = second();

    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)
    // make the seconds hand
    push();
    rotate(scAngle); 
    stroke(255,247,174);
    strokeWeight(7);
    line(0,0,100,0);
    pop();
    // make the min hand
    push();
    rotate(mnAngle);
    stroke(120,255,241)
    strokeWeight(7);
    line(0,0,70,0);
    pop();
    // make the hour hand
    push();
    rotate(hrAngle);
    stroke(254,182,219)
    strokeWeight(7);
    line(0,0,50,0);
    pop();

    stroke(255,0,255);
    point(0,0)

    //making the arcs
    strokeWeight(10);
    noFill();
    //Sc
    stroke(255,247,174);
    arc(0,0,300,300,0,scAngle);
    //Mn
    stroke(120,255,241);
    arc(0,0,280,280,0,mnAngle);
    //Hr
    stroke(254,182,219);
    arc(0,0,260,260,0,hrAngle);

  drawSprites();
}