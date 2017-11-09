function Bullet(options){
    var canvas = document.getElementById("bullet_canvas"),
        ctx = canvas.getContext("2d"),
        image = document.getElementById("dragon_blast");
    this.x = 0;
    this.y = 0;
    canvas.setAttribute("width", options.width);
    canvas.setAttribute("height", options.height);
    this.body = createPhysicalBody({
        coordinates: {
            x: this.x,
            y: this.y
        },
        speed: {
            x: 2,
            y: 0
        },
        height: image.height,
        width: image.width
    });
    this.lastCoordinates = this.body.coordinates;
    this.draw = function(){
        ctx.clearRect(this.lastCoordinates.x-10,
            this.lastCoordinates.y,
            this.body.width * 2,
            this.body.height * 2)
        ctx.drawImage(
            image,
            this.lastCoordinates.x,
            this.lastCoordinates.y
        );
    }

    this.update = function(){
        this.lastCoordinates = this.body.move();
    }

    this.passed = function(cur_bullet){
        if(cur_bullet.lastCoordinates.x >= this.lastCoordinates.x+this.body.width)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}