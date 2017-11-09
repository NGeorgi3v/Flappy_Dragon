function Pipe(options){
    var canvas = document.getElementById("pipe_canvas"),
        ctx = canvas.getContext("2d"),
        pipe_body = document.getElementById("pipe_body"),
        pipe_pattern = ctx.createPattern(pipe_body,'repeat'),
        pipe_top = document.getElementById("pipe_top");
    this.x = 200;
    this.y = 0;
    this.width = pipe_body.width/1.5;
    this.topHeight = getRandomNumber(0, canvas.height/2);
    canvas.setAttribute("width", options.width);
    canvas.setAttribute("height", options.height);

    this.draw = function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.topHeight = getRandomNumber(0, canvas.height/2);
        ctx.fillStyle = pipe_pattern;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.rect(this.x, this.y, this.width, this.topHeight);
        ctx.fill();
        ctx.closePath();
       ctx.drawImage(pipe_top, this.x, this.topHeight-(pipe_top.height-10), this.width, pipe_top.height);
    }



}

function getRandomNumber(min, max) { return Math.random() * (max - min) + min;}