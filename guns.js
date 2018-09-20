function Guns(){
    this.x=width/2
    this.y=height-25
    this.gunHeight = 50
    this.gunWidth = 20
    this.gunMoveSpeed = 6

    this.move = function(dir){
        if(this.x+(dir*this.gunMoveSpeed) > width - this.gunMoveSpeed){
            this.x = width - this.gunMoveSpeed
        }else if(this.x+(dir*this.gunMoveSpeed) < this.gunMoveSpeed){
            this.x = this.gunMoveSpeed
        }else{
            this.x += dir*this.gunMoveSpeed
        }
        
    }


    this.show = function(){
        fill(255,255,255)
        rectMode(CENTER);
        rect(this.x,this.y,this.gunWidth,this.gunHeight)
    }


}