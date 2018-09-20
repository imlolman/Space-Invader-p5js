function Alian(x,y){
    this.x=x
    this.y=y
    this.height = 30
    this.width = Math.random()*40+10
    this.dir = 1
    this.speed = Math.random()
    this.toDelete = false
    
    this.delete = function(toDelete){
        this.toDelete = toDelete
    }

    this.changeDir = function(dir){
        this.y += 50
        this.dir *= dir
    }

    this.show = function(){
        fill(200,20,20)
        rectMode(CENTER)
        noStroke()
        this.x += this.dir*this.speed
        rect(this.x,this.y,this.width,this.height)
    }


}