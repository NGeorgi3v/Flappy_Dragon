//Function for rendering and updating sprites
function createSprite(options){
    //Rendering function
    function render(clearCoordinates, drawCoordinates){
        //Clearing canvas from previous sprite
        this.ctx.clearRect(
            clearCoordinates.x,
            clearCoordinates.y,
            clearCoordinates.width,
            clearCoordinates.height
        );
        //Drawing next sprite on canvas
        this.ctx.drawImage(
            this.spritesheet,
            this.frameIndex * this.width,
            0,
            this.width,
            this.height,
            drawCoordinates.x,
            drawCoordinates.y,
            drawCoordinates.w,
            drawCoordinates.h
        );

    }

    function update(frameCount){

        //Moving to next sprite
        if(frameCount % this.ticksPerFrame === 0){
            this.frameIndex++;
        }

        //Returning if current sprite is the last one
        if(this.frameIndex === this.numberOfFrames){
            this.frameIndex = 0;
        }

    }

    //Creating sprite object
    var sprite = {
        ctx: options.context, // Context of object
        spritesheet: options.spritesheet, // Spritesheet of object
        width: options.width, // Width of a single sprite
        height: options.height, // Height of a single sprite
        numberOfFrames: options.numberOfFrames, // Number of sprites in spritesheet
        frameIndex: 0, // Index of current sprite
        ticksPerFrame: options.ticksPerFrame,
        render: render, // Rendering object
        update: update // Updating object
    }
    
    return sprite;
}