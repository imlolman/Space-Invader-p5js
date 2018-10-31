var gun;
var bullets = []
var alians = []
var cages = []
var score = 0

function setup(){
    createCanvas(700,550)
    gun = new Guns();
    makeAlians()
    for(var i=0;i<alians.length;i++){
        alians[i].changeDir(-1)
    }
    makeAlians()
    for(var i=0;i<10;i++){
        var cage = new Cage(i)
        cages.push(cage)
    }
}

function draw(){
    var shiftDown = false;
    background(51)
    if(keyIsDown(RIGHT_ARROW)){
        gun.move(1)
    }else if(keyIsDown(LEFT_ARROW)){
        gun.move(-1)
    }
    gun.show()

     /*if(keyIsDown(32)){
        var bullet = new Bullet(gun.x)
        bullets.push(bullet)
    }*/ 
    
    for(var i=0;i<cages.length;i++){
        for(var j=0;j<bullets.length;j++){
            if(bullets[j].x > cages[i].n*width/40*4 && bullets[j].x < (4*cages[i].n+1)*width/40 && bullets[j].y <= height-90){
                cages[i].setRed(true)
                bullets[j].delete(true)
                break
            }
        }
        cages[i].show()
        
    }

    for(var i=0;i<alians.length;i++){
        alians[i].show()
        if(alians[i].x+alians[i].width/2 >= width || alians[i].x-alians[i].width/2 <= 0){
            shiftDown = true;
        }
        for(var j=0;j<bullets.length;j++){
            if(bullets[j].x > alians[i].x-alians[i].width/2 && bullets[j].x < alians[i].x+alians[i].width/2 && bullets[j].y > alians[i].y-alians[i].height/2 && bullets[j].y < alians[i].y+alians[i].height/2){
                bullets[j].delete(true)
                alians[i].delete(true)
                score++;
                break
            }
        }
    }

    for( var j=0;j<bullets.length;j++){
        if(bullets[j].toDelete){
            console.log(j + "  " + bullets[j].toDelete)
            bullets.splice(j,1)
            break
        }
    }

    for( var i=0;i<alians.length;i++){
        if(alians[i].toDelete){
            alians.splice(i,1)
            break
        }
    }

    if(shiftDown){
        for(var i=0;i<alians.length;i++){
            alians[i].changeDir(-1)
        }
        makeAlians()
    }

    for(var i=0;i<bullets.length;i++){
        bullets[i].show()
    }

    for(var i=0;i<alians.length;i++){
        if(alians[i].y>height-100){
            gameOver()
            break
        }
    }

    setScore(score)
}

function setScore(s){
    fill(255,255,255)
    textAlign(LEFT)
    textSize(20)
    textFont('Georgia');
    textStyle(BOLD);
    text("Score: "+s,10,30);
    textAlign(RIGHT)
    text("Max Score: 1256",width-10,30);

}

function gameOver(){
    fill(0,0,0,150)
    rect(width/2,height/2,width,height)
    fill(255,255,255)
    textAlign(CENTER)
    textSize(80)
    textFont('Georgia');
    textStyle(BOLD);
    text("Game Over 💩",width/2,height/2);
    noLoop()
}






function makeAlians(){
    for(var i=1;i<=7;i++){
        var alian = new Alian(i*70,80);
        alians.push(alian)
    }
}

function keyPressed(){  
    if(key == " "){ 
        var bullet = new Bullet(gun.x)
        bullets.push(bullet)
    }
}
