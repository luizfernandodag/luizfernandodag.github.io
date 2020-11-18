//document ready
$(function()
{   var start = false;
    var end = false;
    var level = 'easy';
    var x;
    var y;
    $(".boundary.example ").hide();
    $(".boundary.example").attr("disabled", true);
    //get board events
    //restart cliking on the S square
    $('#maze').mouseleave(cheating);
    function cheating()
    {
        if(start === true)
        {
            endOfGame("YOU ARE CHEATING :(. SHAME ON YOU!", 'red');

            $(".boundary:not(.boundary.example)").css({"background-color": "red"});
            // location.reload();

            $(".boundary.example ").show();
            $(".boundary.example").attr("disabled", false);
            start = false;
            end = true;



        }

    }

    function endOfGame(msg,msgColor)
    {

        var h2div = $('h2#status');
        h2div.text(msg);
        h2div.css({"color":msgColor});

    }


    $("#start").click(restart);
    function restart()
    {
        if(end == true) {

            location.reload();
        }
    }
    $("body").keypress(gameMovements);

    function gameMovements(event)
    {
        var k = event.key;
        //ArrowUp=38
        //ArrowDown=40
        //ArrowRight=39
        //ArrowLeft=37

        //verify if the game started
        start =  (k === 's');


    };
    $('input[type=radio][name=level]').on('change', function() {
        switch ($(this).val()) {
            case 'easy':
                level = 'easy';
                console.log(level);
                break;
            case 'hard':
                level = 'hard';
                console.log(level);
                break;
        }
    });


    $("#start").mousemove(game);

    function game(event)
    {
        var offsetLeft = $(this).offset().left;
        var offsetTop  = $(this).offset().top;
        console.log(offsetLeft);
        console.log(offsetTop);

        if(start) {

            var Dx = event.screenX - x;
            var Dy = event.screenY - y;
            console.log(Dx);
            console.log(Dy);
            x = event.screenX;
            y = event.screenY;

            if(level == 'hard') {
                //get horizontal movement
                var left = parseInt($(this).css("left"));
                var newLeft = parseInt($(this).css("left")) + Dx + "px";
                var boxWidth = parseInt($(this).css("width"));

                //get vertical movement
                var top = parseInt($(this).css("top"));
                var newTop = parseInt($(this).css("top")) + Dy + "px";
                var boxHeight = parseInt($(this).css("height"));
                //set left and top
                $(this).css({"left": newLeft, "top": newTop});

                if(boundariesCollision(left,top, boxWidth,boxHeight ))
                {
                    $(".boundary:not(.boundary.example)").css({"background-color": "red"});
                    // location.reload();
                    endOfGame("You lost :(.\n Try again!", 'red');


                    $(".boundary.example ").show();
                    $(".boundary.example").attr("disabled", false);
                    start = false;
                    end = true;

                    // end = true;
                }
                else if (collisionEnd(left,top, boxWidth,boxHeight ))
                {
                    $(".boundary:not(.boundary.example)").css({"background-color": "red"});
                    // location.reload();
                    endOfGame("Congratulations :) ! \nYou won the level hard level!\nYou are ready to become a jedi!",'green');

                    $(".boundary.example ").show();
                    $(".boundary.example").attr("disabled", false);
                    start = false;
                    end = true;

                }



            }

        }
        // this.css({left});

    }

    function collisionEnd(left,top, boxWidth,boxHeight )
    {
        var endBox = $('#end');
        let endX = parseInt(endBox.position().left);
        let endY = parseInt(endBox.position().top);
        let endHeight = parseInt(endBox.css("height"));
        let endWidth = parseInt(endBox.css("width"));
        // CHECK HORIZONTAL COLISSION
        let horizontalCollision = ((endX < left && left < endX + endWidth) || (endX < left + boxWidth && left + boxWidth < endX + endWidth));
        // CHECK   VERTICAL COLISSION

        let verticalCollision = ((endY < top && top < endY + endHeight) || (endY < top + boxHeight && top + boxHeight < endY + endHeight));

        if (horizontalCollision && verticalCollision){
            return true;
        }
        return false;
    }

    function boundariesCollision(left,top,boxWidth,boxHeight)
    {
        console.log("AQUI1");
        var boundariesList = $(".boundary");
        for(let i = 0; i< boundariesList.length; i++) {

            let boundaryElement = $(boundariesList[i]);
            //BOUNDARY ELEMENT POSITION PARAMETERS
            let boundaryX = parseInt(boundaryElement.position().left);
            let boundaryY = parseInt(boundaryElement.position().top);
            let boundaryHeight = parseInt(boundaryElement.css("height"));
            let boundaryWidth = parseInt(boundaryElement.css("width"));
            // CHECK HORIZONTAL COLISSION
            let horizontalCollision = ((boundaryX < left && left < boundaryX + boundaryWidth) || (boundaryX < left + boxWidth && left + boxWidth < boundaryX + boundaryWidth));
            // CHECK   VERTICAL COLISSION

            let verticalCollision = ((boundaryY < top && top < boundaryY + boundaryHeight) || (boundaryY < top + boxHeight && top + boxHeight < boundaryY + boundaryHeight));

            if (horizontalCollision && verticalCollision){
                return true;
            }
        }
        return false;
    }


    $(".boundary").mouseenter(changeBoundaries);
     function changeBoundaries()
     {
         console.log(start);
         if(level === 'easy' && start === true) {
             $(".boundary:not(.boundary.example)").css({"background-color": "red"});
             // location.reload();
             endOfGame("Sorry :(.\nYou lost. Try again.",'red');

             $(".boundary.example ").show();
             $(".boundary.example").attr("disabled", false);
             start = false;
             end = true;


         }

     }

    $(".boundary.example button").click(restartButtonFunction)
    function  restartButtonFunction()
    {
        location.reload();
    }

    $("#end").mouseenter(winFunctionEasy);
    function winFunctionEasy()
    {
        if(start == true) {

            endOfGame("Congratulations :) ! \nYou won the easy level. Try now the hard levels!",'green');

            $(".boundary.example ").show();
            $(".boundary.example").attr("disabled", false);
            start = false;
            end = true;





        }
    }















});
