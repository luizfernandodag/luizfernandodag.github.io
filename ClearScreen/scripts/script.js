


				
$(function()
{

	


	//function circle object creator

function Circle(radius,width,heigth,growthAmount,growRate,circleCounter) {
    //PARAMETERS
    this.radius = radius;
    this.width = width;
    this.heigth = radius;
    this.growthAmount = growthAmount;
    this.growAmountCount = 0;
    this.growRate = growRate;
    //this.finalSize = 0;

    
    this.animation = "";
    this.div = "";
    this.divId="";
    this.css = "";
    // GETTERS
    this.getWidth = function(){
    	return this.width;
    }
    
    this.getHeigth = function(){
    	return this.heigth;
    }
    this.getRadius = function () {
        return this.radius;
    }
    this.getDiv = function()
    {
    	return this.div;
    }
    this.getDivId = function()
    {
    	return this.DivId;
    }
    this.getCSS = function()
    {
    	return this.css;
    }
    this.getGrowRate = function()
    {
    	return this.growRate;
    }
    this.getGrowSize = function()
    {
    	return this.grow;
    }
    //SETTERS
    this.setWidth = function(width){
    	this.width = width;
    }
    this.setHeigth = function(heigth){
    	this.heigth = heigth;
    }
    this.setRadius = function(radius)
    {
    	this.radius = radius;
    }
    this.setDiv = function(div)
    {
    	this.div = div;
    }
    this.setCSS = function(css)
    {
    	this.css = css;
    }
    this.setDivId = function(divId)
    {
    	this.divId = divId;
    }

    //METHODS
    this.grow = function(growAmount)
    {
    	var growA = parseInt(growAmount);
    	
    	console.log(this);
    	 console.log(this.getRadius());
    	 console.log(parseInt((this.getRadius()) + growA ))
    	 this.setRadius(parseInt(this.getRadius()) + growA );
    	 this.setWidth(parseInt(this.getWidth()) + growA);
    	 this.setHeigth(parseInt(this.getHeigth()) + growA);
    }
    this.updateCSSValues = function( )
    {
    	console.log(this);
    	// var elem = selector;
    	// console.log(elem);
    	var w = this.getWidth() + "px";
    	var h = this.getHeigth() + "px";
    	var r = this.getRadius() + "px";
    	var selector = this.getDiv();
    	//getDivId
    	console.log(w);
    	console.log(h);
    	console.log(r);
    	
    	console.log(selector);
    	console.log($(selector));
 //    		width: 50px;
	// height: 50px;
	// border-radius:50px;

    	$(selector).css({"width":w, "height":h,"border-radius":r});
    	

    }
    this.setAnimation = function(period)
    {
    	var self = this;
    	console.log(self);
    	
    	var initialSize = parseInt(this.getWidth());
    	var finalSize   =  parseInt(this.growthAmount) + parseInt(this.getWidth());
    	var time = parseInt(this.growthAmount)/parseInt(this.growRate); 
    	
    	
    		this.animation = setInterval(
    			function ani() {
    				console.log("A");
    				console.log(time);
    				//this.growthAmount = growthAmount;
    				//this.growAmountCount = 0;
    				//this.growRate = growRate;
    				//var growAmount = self.growthAmount;
    				self.grow(self.growRate);
    				self.updateCSSValues();
    				initialSize+=self.growRate;
    				console.log(initialSize);

    				if(initialSize>=finalSize)
    					clearInterval(self.animation);
    				console.log("B");

    			}


    			, 250);

    		console.log("C");
    }
    this.createNewCSS = function()
    {	//get random background color
    	var colors = ["red", "blue", "yellow", "black", "green"];
    	var color = colors[Math.floor(Math.random() * colors.length)];
    	//get width,height and radius
    	var w = this.getWidth() +"px";
    	
    	var h = this.getHeigth() +"px";
    	var r = this.getRadius()+"px";
    	console.log("w"+w);
    	console.log("h"+h);
    	console.log("r"+r);

    	//get random top and left 
    	var pageWindth = $('body').width();
    	var pageHeight = $('body').height();
    	var top = Math.floor(Math.random()*pageHeight-this.getHeigth()) ;
    	var left = Math.floor(Math.random()*pageWindth - this.getWidth());
    	console.log(top);
    	console.log(left);

    	var mycss = {"background-color":color,
    	"width":w, "height":h,"border-radius":r,"position":"absolute",
    	"border":"2px solid black","left":left,"top":top  };
    	console.log(mycss);

    	return mycss; 




    }
    this.createNewDiv = function()
    {
    			
  

    	var idDiv = "div"+circleCounter;

    	this.divId = idDiv; 
    	var divtag = $("<div>",{id:idDiv});
    	$(divtag).css(this.createNewCSS());
    	console.log(divtag);
    	console.log(circleCounter);
    	this.setDiv('#div'+circleCounter);
    	console.log(this.getDiv());
    	$('body').append($(divtag));

    	$(this.getDiv()).on('click',removeCircle);
    	// $(divtag).appendTo('#circles');
    	//$(divtag).insertAfter('#buttonss');
    	//$(divtag).insertBefore('#div1');
    	// $('body').prepend($(divtag));
    	circleCounter++;
    	return divtag;
    }


}



function removeCircle()
{
	 $(this).remove();
    	   clearInterval($(this).animation);
    	   if($('#div1.initialDiv'))
    	   {
    	   	$('#div1.initialDiv').remove();
    	   }
}
//circle factory
function circleFactory()
{
	//created circles list
	var circlesArray = [];
	var numCircles = 0;
	//Circle(radius,width,growthAmount,growRate,circleCounter)
	this.createCircle = function(radius,width,height,growthAmount,growRate)
	{
		var circle;

		circle = new Circle(radius,width,height,growthAmount,growRate,numCircles);

		circlesArray.push(circle);
		numCircles++;

		return circle;

	}

	this.printArray = function()
	{
		s = "";
		for(let i = 0; i < numCircles; i++)
		{
			s += "Circle " + i + ":" + "radius "+ circlesArray[i].getRadius()+"\n"; 	

		}

		return s;
	}

	this.getNCircle = function(n)
	{
		return circlesArray[n];
	}
}



	
	// GLOBAL VARIABLES
	var circlefactory = new circleFactory();
	var animation1;
	var animation2;
	var newInputCounter=0;
	var newButtonCounter=0;
    var buttonStatus = false;
    var circleStatus = true;

    $(document).ready(growCircle);

    function growCircle()
    {	if(!buttonStatus)
    	$('div.buttons').hide();

    	if(circleStatus === true){

    		var circlein = $('.initialCircle');
           console.log("Circle 1");
    		animation1 = setInterval(
    			function grow() {
    				var current_widht = parseInt($(circlein).css('width'));
    				var current_radius = parseInt($(circlein).css('border-radius'));
    				var new_width = current_widht + 10 + "px";
    				var new_heigth = new_width;
    				var new_radius = current_widht + 10 + "px";;
    				console.log(current_widht);
    				console.log(current_radius);
    		        circlein.css({'width':new_width});
    			    circlein.css({'height':new_heigth});
    				circlein.css({'border-radius':new_radius});
    			}


    			, 250);
    

    	}
    };


    //$('#div1').on('click'),removeCircle);
    //circle div
    $('#div1').on('click', removeCircleUpdateWindow);

    function removeCircleUpdateWindow(event)
    {
    	//remove circle
    	  $('#div1').remove();
    	  $('')
    	  clearInterval(animation1);


    	// Put 3 text inputs on the screen with labels:
    	// width, growth amount, grow rate.
    	// Also add a button labeled ‘Start’.
    	// When the button is clicked the circle 
    	// should appear, 
    	// this time with the specified width, growth size and interval for growing.
   
    	//SHOW DIV
    	buttonStatus = true;
    	$('div.buttons').show();


    	//CREATE ELEMENTS TAGS
    	//id = #in0
    	var inputWidth = $(createNewInputField('width'));
    	//id = #in1
    	var inputGrowthAmount = $(createNewInputField('growth Amount'));
    	//id = #in2
    	var inputGrowthRate = $(createNewInputField('growth rate '));
    	var NumberOfCicles = $(createNewInputField(' number of cicles '));
    	//id = #Start0
    	var Button = $(createButton('Start'));
   		// APPEND ELEMENTS
    	 $('#buttonss').append(inputWidth);
    	 $('#buttonss').append(inputGrowthAmount);
    	 $('#buttonss').append(inputGrowthRate);
    	 $('#buttonss').append(NumberOfCicles);
    	 $('#buttonss').append("<br>");
    	 
    	 $('#buttonss').append(Button);

    }
    document.body.addEventListener( 'click', function ( event ) {
 			 if( event.srcElement.id == 'Start0' ) {
    				createCircles();
  		};
		} );

    function createCircles(){
    	console.log("AAAA");
    	var width = parseInt($('#in0').val());
    	var growthA = parseInt($('#in1').val());
    	var growthR = parseInt($('#in2').val());
    	var numCicles = parseInt($('#in3').val());
    	console.log(width);
    	console.log(growthA);
    	console.log(growthR);
    	console.log(numCicles);
    
    	for(let i = 0;i< numCicles ;i++)
		{
		circlefactory.createCircle(width,width,width,growthA,growthR);
		var c = circlefactory.getNCircle(i);
		c.createNewDiv();
		console.log(c.getDiv());
		$('body#circles').append(c.getDiv());
		c.setAnimation(growthR);
		}
    	//function(radius,width,growthAmount,circleCounter)




    }

    function createNewInputField(labelName)
    {	
    	var labelAux;
    	//case label name is "word1 word2...wordN"
    	if(labelName.includes(" "))
    	    labelAux = labelName.replace(" ","");//word1word2wordN
    	else
    		labelAux = labelName;

    	var inputTag = "<label for=\'"+labelName +"\''>"+labelName+"</label><br>";
    	inputTag += "<input id = \'in" + newInputCounter + "\'' type='text' name=\'in" + newInputCounter+"\'><br>";
    	newInputCounter++;
    	// console.log(inputTag)
    	return inputTag;
    }
    function createButton(buttonLabel)
    {  var buttonLabelAux;

    	if(buttonLabel.includes(" "))
    	    buttonLabelAux = buttonLabelAux.replace(" ","");//word1word2wordN
    	else
    		buttonLabelAux = buttonLabel;

    	var buttonTag = "<button id=\'"  + buttonLabelAux+newButtonCounter+"\'>"+buttonLabel+"</button>";
    	// console.log(buttonTag);
    	newButtonCounter++;

    	return buttonTag;
    }





// const circle = require('./circle.js').default();
// 	console.log("A");





	












}
)

