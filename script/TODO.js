//Start Game button and function function

/**
 * startBtn = document.getElementById("new_game_button"),
    function initGame(){
        startBtn.style.top = HEIGHT/2.5 + "px";
        startBtn.style.left = WIDTH/2.5 + "px";
    }
    initGame();
 */

//Moving Background

/**
 * this.drawX2 = image.width;// Draw X for 2nd bg
 * this.speed = -5; // Moving speed
 * ctx.drawImage(
            image,
            this.drawX2,
            this.drawY,
            this.drawW,
            this.drawH
        );
    this.update = function(){

        //Moving bgs
        this.drawX += this.speed;
        this.drawX2 += this.speed;

        //Replacing bgs
        if(this.drawX <= -image.width){
            this.drawX = image.width;
        }

        if(this.drawX2 <= -image.width){
            this.drawX2 = image.width;
        }

    }
 */