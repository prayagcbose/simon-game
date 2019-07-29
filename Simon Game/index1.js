// decrarations only in this section
var randNum= 0;
var colors= ["green","red","yellow","blue"];
var clolorNow="";
var id="null";
var id1="";
var game="start";
var patternArray= [];
var pattern="";
var i=0;

// function calls only in this section
$(document).on("keypress",function(){
	pattern=getPattern();
	patternArray.push(pattern);
	displayPattern(pattern);
	listenToUser();
	waitForInput();		
});


// functions only in this section
function getPattern(){
	randNum=Math.floor(Math.random()*4);
	colorNow=colors[randNum];
	return colorNow;
}

function displayPattern(id){
	$("#"+id).addClass("pressed");
	var sound= new Audio("sounds/"+id+".mp3");
	sound.play();
	setInterval(function(){
		$("#"+id).removeClass("pressed");
	},100);	
}

function listenToUser(){
	$(".btn").on("click",function(){
		id= $(this).attr("id");
		displayPattern(id);
	})
}

function gameOver(){
	$("body").addClass("game-over");
	var sound1= new Audio("sounds/wrong.mp3");
	sound1.play();
	setInterval(function(){
		$("body").removeClass("game-over");
	},1000);
}

function waitForInput(){
	setInterval(function(){

	})
}
