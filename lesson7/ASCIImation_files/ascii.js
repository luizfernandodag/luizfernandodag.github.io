

//after all elements are loaded
jQuery(document).ready(function($){

    $("#stop").attr("disabled",true);
    var onAnimation = false;
    var animationPeriod = 250;//250ms
    var currentAnimation = "Blank";

    $("#text-area").val(ANIMATIONS[$("animation").val]);

// standard on load code goes here with $ prefix
//    var textArea = $("#text-area").val ("bbbb");
    $("#animation").change( function (e)
    {
        var currentAnimation = $(this).val();
        console.log(currentAnimation);
        if(!onAnimation) {
            $("#text-area").val(ANIMATIONS[currentAnimation]);
        }
        console.log(ANIMATIONS[currentAnimation]);

    });
    $("#fontsize").change(function(e)
    {
        // var currentSize = $('#text-area').css('font-size');
        var size = parseFontSize($("#fontsize").val());
        console.log(size);
        // var currentSize = parseFloat(currentSize)*1.2;
        $('#text-area').css('font-size', size);


    });


    function parseFontSize(size) {
        if(size !== 'undefined') {
            if(size=== "Tiny") {
                return "7pt";

            }
            else if(size=== "Small") {
                return "10pt";
            }
            else if(size=== "Medium") {
                return "12pt";
            }
            else if(size=== "Large") {
                return "16pt";
            }
            else if(size=== "Extra Large") {
                return "24pt";
            }
            else if(size=== "XXL") {
                return "32pt";
            }

        }
    }
    $("#turbo").change(parseCheckBox);


    function disableElements()
    {
        if(onAnimation) {
            $("#stop").attr("disabled", false);
            $("#start").attr("disabled", true);
            $("#animation").attr("disabled", true);
        }
    }

    function enableElements()
    {
        // console.log($("#stop").attr("disabled",false));
        if(!onAnimation) {
            $("#stop").attr("disabled", true);
            $("#start").attr("disabled", false);
            $("#animation").attr("disabled", false);
        }
    }

    var funky;
    function parseCheckBox()
    {

        var flagTurbo =$("#turbo").prop("checked") ? true : false;
        console.log(flagTurbo);
        if(flagTurbo)
        {
            animationPeriod = 50;
        }
        else
        {
            animationPeriod = 250;
        }
        console.log(animationPeriod);
        if(onAnimation) {
            clearInterval(funky);
            var indexPresentation = currentIndex;
            var animation = $("#animation").val();
            var arrayPresentation = ANIMATIONS[animation].split("=====\n");
            var arraySize = arrayPresentation.length;

            funky = setInterval(function () {
                currentIndex = indexPresentation;
                if (indexPresentation === arraySize) {
                    indexPresentation = 0;
                }
                console.log("index: " + indexPresentation);
                console.log(arrayPresentation[indexPresentation]);

                $("#text-area").val(arrayPresentation[indexPresentation]);
                indexPresentation++;


            }, animationPeriod);
        }

        return flagTurbo;
    }
    var currentIndex = 0;
    $('#start').click(function() {
        onAnimation = true;
        disableElements();
        var animation = $("#animation").val();
        var arrayPresentation = ANIMATIONS[animation].split("=====\n");
        var arraySize = arrayPresentation.length;
        var indexPresentation = 0;
        funky = setInterval(function() {
            currentIndex = indexPresentation;
            if (indexPresentation === arraySize) {
                indexPresentation = 0;
            }
            console.log("index: " + indexPresentation);
            console.log(arrayPresentation[indexPresentation]);

            $("#text-area").val(arrayPresentation[indexPresentation]);
            indexPresentation++;


        }, animationPeriod);
    });

    $('#stop').click(function() {
        onAnimation = false;
        enableElements();
        clearInterval(funky);
    });

    /* 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers
/* 5 Define a function reverse() that computes the reversal of a string.
/* 7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i. */

// note: the $ is setup inside the anonymous function of the ready command

//4
    function sum(array)
    {
        return array.reduce( (previousValue,currentValue ) => {
            return previousValue + (parseFloat(currentValue)||0);

        },0   );
    }

    function multiply(array)
    {
        return array.reduce( (previousValue,currentValue ) => {
            return previousValue*(parseFloat(currentValue)||1);

        },1   );
    }

//5

    function reverse(str)
    {
        return str.split("").reverse().join("");
    }

    //7

    function filterLong(array,len)
    {
        return array.filter(s => s.length > len);
    }








});

// window.onload = function() {
//     const textarea = $("#text-area");
//     // textarea.innerText = ANIMATIONS["Bike"];
//
//
//
//
// }



                  // BIKE.animate("right",200);


