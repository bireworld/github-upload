var xPositions = [0,40];
var yPositions = [0,300];


for(var i=0; i<400; i++){
    xPositions.push(random(0, 400));
    yPositions.push(random(0, 400));}

draw = function() {
background(random(255)-150, 50, 59);//baground plus mimicking lightening
    //imageMode(CENTER);
    fill(random(200), 200, 200);
     noStroke();
     ellipse(40,2,88,75);
     ellipse(90,25,75,75);
     ellipse(140,2,75,75);
     ellipse(190,2,75,75);
     ellipse(240,2,75,75);
     ellipse(290,2,75,75);
     ellipse(340,2,127,114);
     fill(174, 180, 214);
triangle(299, 150, 418, 224, 156, 223);

//fill(255, 255, 255);
noFill();
for(var wallY=207;wallY<369;wallY+=14){
    for(var wallX=153;wallX<359;wallX+=33){
image(getImage("cute/WallBlock"),wallX,wallY,50,50);
}
}

//rect(60, 150, 280, 207);

fill(214, 210, 203);

ellipse(28,79,50,50);
fill((random(255)-150, 50, 59));
ellipse(38,65,50,50);
fill(214, 210, 203);
rect(152, 270, 66, 64);
fill(74, 58, 30);
rect(303, 324, 66, 80);
image(getImage("cute/CharacterPrincessGirl"),160,248,50,75);
fill(255,255,255);
for(var j=180;j<337;j+=50){
    for (var i=85;i<318;i+=50){
        if(i%2===1){
            fill(i,(i+j)/2,j);
            //rect(i,j,30,45);
            
        }
}}
     
    for (var j = 0; j < xPositions.length; j++) {
        
        image(getImage("avatars/aqualine-seed"), xPositions[j], yPositions[j]+38, 10, 15);
        image(getImage("cute/Rock"), xPositions[j]+10, yPositions[j]+38, 5, 5);
        
        yPositions[j] += 5;
        if(yPositions[j]>400){
            yPositions[j]=0;

        }
        
    }
};
mouseClicked = function() {
    var m = millis();
    playSound(getSound("retro/boom2"));
    
};

