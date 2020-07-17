var pontos = 1;
        let canvas = document.getElementById('snake');
        let ctx = canvas.getContext('2d');
        let box = 32;
        let snake = [];
        snake[0]={
            x: 8 * box,
            y: 8 * box
        }
        let dir;
        let food = {
            x:Math.floor(Math.random() * 15 + 1) * box,
            y:Math.floor(Math.random() * 15 + 1) * box
        }
        function paint(){
            ctx.fillStyle = 'black';
            ctx.fillRect(0,0, 16*box, 16*box);
        }
        function paintSnake(){
            for (i = 0; i < snake.length; i++){
                ctx.fillStyle = 'white';
                ctx.fillRect(snake[i].x, snake[i].y, box, box);
            }
        }

        function paintFood(){
            ctx.fillStyle = "blue";
            ctx.fillRect(food.x, food.y, box, box);
        }

        document.addEventListener("keydown", controle)

        function controle(event){
            if(event.keyCode == 37 && dir !="R") dir = "L";
            if(event.keyCode == 38 && dir !="D") dir = "U";
            if(event.keyCode == 39 && dir !="L") dir = "R";
            if(event.keyCode == 40 && dir !="U") dir = "D";
        }

        function paaint(){
            if(snake[0].x > 15*box && dir=="R")  snake[0].x = 0;
            if(snake[0].x < 0 && dir=="L")  snake[0].x = 15*box;
            if(snake[0].y > 15*box && dir=="D")  snake[0].y = 0;
            if(snake[0].y < 0 && dir=="U")  snake[0].y = 15*box;

           for (i = 1; i < snake.length; i++){
               if (snake[0].x == snake[i].x && snake[0].y == snake[i].y){
                   clearInterval(fps);
                   alert('Perdeu');
                   location.reload();
               }
           } 

            paint();
            paintSnake();
            paintFood();
            let snakeX = snake[0].x;
            let snakeY = snake[0].y;

            if (dir == "R") snakeX += box;
            if (dir == "L") snakeX -= box;
            if (dir == "U") snakeY -= box;
            if (dir == "D") snakeY += box;

            if(snakeX != food.x || snakeY != food.y){
                snake.pop();
                
            }else{
                food.x = Math.floor(Math.random() * 15 + 1) * box;
                food.y = Math.floor(Math.random() * 15 + 1) * box;
                document.getElementById('pontos').innerHTML = pontos;
                pontos++;
            }
            
            let newHead = {
                x: snakeX,
                y: snakeY
            }
            snake.unshift(newHead);
        }    
        function facil(){
            fps = setInterval(paaint, 250);    
        }
        function medio(){
            fps = setInterval(paaint, 120);  
        }
        function dificil(){
            fps = setInterval(paaint, 60);  
        }
        function everson(){
            fps = setInterval(paaint, 20);
            window.alert('A dificuldade Everson Zoio pode apresentar erros, só jogue se vc for hardecorer memo irmãozin')
        }
        function recomecar(){
            location.reload();
        }
        let fps;
       