document.querySelector("button").addEventListener("click",function(){ 
var player1 = Math.floor(Math.random()*6)+1;
var player1dice = "./images/dice"+player1+".png";
document.querySelectorAll("img")[0].setAttribute("src",player1dice);
var player2=Math.floor(Math.random()*6)+1;
var player2dice = "./images/dice"+player2+".png";
document.querySelectorAll("img")[1].setAttribute("src",player2dice);
if(player1 > player2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if(player1 < player2){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML="Match Tie";
}
});