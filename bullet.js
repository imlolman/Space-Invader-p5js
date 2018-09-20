function Bullet(x){
    this.x=x
    this.y=height-50
    this.r=5
    this.toDelete = false
    this.speed = 12
    
    this.delete = function(toDelete){
        this.toDelete = toDelete
    }

    this.show = function(){
        fill(100,0,250)
        this.y -= this.speed
        ellipse(this.x,this.y,this.r*2,this.r*2)
    }


}