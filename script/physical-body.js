function createPhysicalBody(options){
    
    function move(){
        // var lastCoordinates = JSON.parse(JSON.stringify(this.coordinates));
        var lastCoordinates = {x: this.coordinates.x, y: this.coordinates.y};

        this.coordinates.x += this.speed.x;
        this.coordinates.y += this.speed.y;

        return lastCoordinates;
    }

    function collidesWith(otherPhysicalBody){
        throw new Error("Not implemented");
    }

    var physicalBody = {
        coordinates: options.coordinates,
        speed: options.speed,
        height: options.height,
        width: options.width,
        move: move,
        collidesWith: collidesWith
    };

    return physicalBody;
}