function Dragon(options) {
    var canvas = document.getElementById("dragon_canvas"),
        ctx = canvas.getContext("2d"),
        flyingSpritesheet = document.getElementById("dragon_flying"),
        shootingSpritesheet = document.getElementById("dragon_shoot");

    this.x = 50;
    this.y = 0;
    this.upForce = 10;
    this.airResistance = 0.9;
    canvas.setAttribute("width", options.width);
    canvas.setAttribute("height", options.height);

    this.flyingSprite = createSprite({
        context: ctx,
        spritesheet: flyingSpritesheet,
        width: flyingSpritesheet.width / 7,
        height: flyingSpritesheet.height,
        numberOfFrames: 7,
        ticksPerFrame: 5
    });
    this.shootingSprite = createSprite({
        context: ctx,
        spritesheet: shootingSpritesheet,
        width: shootingSpritesheet.width / 7,
        height: shootingSpritesheet.height,
        numberOfFrames: 7,
        ticksPerFrame: 4
    });
    this.currentSprite = this.flyingSprite;
    this.body = createPhysicalBody({
        coordinates: {
            x: this.x,
            y: this.y
        },
        speed: {
            x: 0,
            y: 0
        },
        height: this.currentSprite.height,
        width: this.currentSprite.width
    });  
    this.body.coordinates.y = canvas.height / 3;
    this.lastCoordinates = this.body.coordinates;
    
    this.draw = function() {
        if(this.currentSprite == this.shootingSprite){
            if(this.shootingSprite.frameIndex == this.shootingSprite.numberOfFrames-1){
                this.currentSprite = this.flyingSprite;
                this.shootingSprite.frameIndex = 0;
            }
        }
        this.currentSprite.render({
            x: 0,
            y: 0,
            width: canvas.width,
            height: canvas.height
        }, {
            x: this.lastCoordinates.x,
            y: this.lastCoordinates.y,
            w: this.body.width * 2,
            h: this.body.height * 2
        });
    }

    this.jump = function(){
        this.body.speed.y = -(this.upForce*(this.airResistance ));
    }

    this.shoot = function(bulletBody){
        this.currentSprite = this.shootingSprite;
        bulletBody.coordinates.x = this.lastCoordinates.x+this.body.width;
        bulletBody.coordinates.y = this.lastCoordinates.y+this.body.height/2;
    }

    this.update = function(options) {
        this.lastCoordinates = this.body.move();
        this.currentSprite.update(options.frameCount);
    }

}