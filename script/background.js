function Background(options){
    
    var canvas = document.getElementById("background"),
        ctx    = canvas.getContext("2d"),
        image  = document.getElementById("background_img");

    this.drawX = 0;
    this.drawY = 0;
    this.speed = 5;
    canvas.setAttribute("width", options.width);
    canvas.setAttribute("height", options.height);
    this.drawW = canvas.width;
    this.drawH = canvas.height
    this.draw = function(){

        ctx.drawImage(
            image,
            this.drawX,
            this.drawY,
            this.drawW,
            this.drawH
        );
        ctx.drawImage(
            image,
            this.drawW - Math.abs(this.drawX),
            this.drawY,
            this.drawW,
            this.drawH
        );
        
    }

    this.update = function(){
        this.drawX -= this.speed;
        if(Math.abs(this.drawX) > this.drawW){
            this.drawX = 0;
        }
    }

}