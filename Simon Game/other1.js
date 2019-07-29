var colors= ["green","red","yellow","blue"];
var checkIndex=0;
var level=1;
var levelVar=0;
var clickedVal;
var patternArray=[];

$(document).keypress(function(){
	$("#level-title").text("level: "+level);
	$(".btn").click(function(){
		clickedVal= $(this).attr("id");
		displayPattern(clickedVal);
		checkPattern();
	})
	generatePattern();	
})

function generatePattern(){
	var randNum=Math.floor(Math.random()*4);
	var randCol=colors[randNum];
	patternArray.push(randCol);
	displayPattern(randCol);

}

function displayPattern(id){
	$("#"+id).addClass("pressed");
	var sound= new Audio("sounds/"+id+".mp3");
	sound.play();
	setTimeout(function(){
		$("#"+id).removeClass("pressed");
	},100);	
}

function checkPattern(){
	if(clickedVal==patternArray[checkIndex]){
		checkIndex++;
		levelVar++;
		if(level==levelVar){
			level++;
			$("#level-title").text("level: "+level);
			levelVar=0;
			console.log("hii");
			checkIndex=0;
			setTimeout(function(){
				generatePattern();
			},1000);
			
		}
	}
	else{
		gameOver();
	}		
}

function gameOver(){
	checkIndex=0;
    level=1;
	levelVar=0;
	patternArray=[];
	$("#level-title").text("game over press ket to restart");
	$("body").addClass("game-over");
	var sound1= new Audio("sounds/wrong.mp3");
	sound1.play();
	setTimeout(function(){
		$("body").removeClass("game-over");
	},1000);
}