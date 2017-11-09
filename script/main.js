window.addEventListener("load", function(){ 

    var WIDTH  = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    HEIGHT     = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
    frameCount = 0,
    animate    = false,
    pause      = false,
    dimensions = {width: WIDTH, height: HEIGHT};
    background = new Background(dimensions),
    dragon     = new Dragon(dimensions),
    pipe       = new Pipe(dimensions),
    bullets    = [],
    curBullet  = null,
    prevBullet = null;
    



    background.draw();
    dragon.draw();
    //pipe.draw();
    function gameLoop(){
        applyGravity(dragon.body, 0.6);
        dragon.update({frameCount: frameCount});
        dragon.draw();
        background.update();
        background.draw();

        for(var i = bullets.length-1; i >= 0; i--){
            bullets[i].update();
            bullets[i].draw();
            if(bullets[i].body.coordinates.x > dimensions.width){
                bullets.splice(i, 1);
            }
        }

        frameCount++;
        
        if(animate){
            requestAnimationFrame(gameLoop);
        }

    }
    
    function applyGravity(physicalBody, gravity){
        if(physicalBody.coordinates.y >= (HEIGHT - physicalBody.height*2)){
            physicalBody.coordinates.y = (HEIGHT - physicalBody.height*2);
            return;
        }
        physicalBody.speed.y += gravity;
    }

    window.addEventListener("keydown", function(e){
        checkKey(e.keyCode);
    });

    function checkKey(key){
        switch(key){
            case 38: // UP Arrow
                if(animate){ dragon.jump(); }
                break;
            case 80: // P - Pause
                animate = false;
                pause = true;
                break;
            case 32:
                if(animate){
                    bullets.push(new Bullet(dimensions));
                    if(bullets.length > 1){
                         prevBullet= bullets[bullets.length-1];
                         curBullet = bullets[bullets.length-2];
                        if(prevBullet.passed(curBullet)){
                            console.log("in");
                            dragon.shoot(bullets[bullets.length-1].body); 
                        }
                    }else{
                        console.log("bug??");
                        dragon.shoot(bullets[bullets.length-1].body); 
                    }
                }
                break;
            case 13: // Enter - Starting game and disabling pause
                if(!animate){
                    animate = true;
                    gameLoop();
                }
                animate = true;
                pause = false;
                break;
            default:
                break;    
        }
    }
});