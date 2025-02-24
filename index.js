//alert("Js is functional");

var buttonColors=["red","blue","green","yellow"];

var gamePattern=[];

var userClickedPattern=[];

$(".btn").click(function(){
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
})



function nextSequence(){
    var randomnumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[randomnumber];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);

   
}

function playSound(name){
    
    var audio=new Audio("sounds/"+ name +".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}