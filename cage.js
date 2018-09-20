function Cage(n){
    this.n=n
    this.redcount = 60
    this.red=false

    this.setRed = function(red){
        this.red = red
        this.redcount = 60
    }

    this.show = function(){
        if(this.red && this.redcount > 0){
            stroke(255,0,0)
            this.redcount--;
        }else{
            stroke(255)
            if(this.redcount == 0){
                this.red = false;
            }

        }
        line(4*this.n*width/40,height-100,(4*this.n+1)*width/40,height-100)    
    }


}