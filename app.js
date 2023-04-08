const value1= document.querySelector(".score1");
const value2=document.querySelector(".score2");
const button1=document.querySelector(".buttonn.first");
const button2=document.querySelector(".buttonn.second");
const button3=document.querySelector(".buttonn.third");
const playto = document.querySelector("#select");
let body=document.querySelector("body");
let p1score=0;

let p2score=0;
let winningScore=3;
let gameOver=false;

button1.addEventListener('click',function(){
    if(!gameOver){
        p1score++;
   if (p1score===winningScore){
gameOver=true;
value1.classList.add('winner');
value2.classList.add('loser');
value1
   }
    value1.textContent=p1score;}
})
button2.addEventListener('click',function(){
    if(!gameOver){
        p2score++;
    if (p2score===winningScore){
gameOver=true;
value2.classList.add('winner');
value1.classList.add('loser');
    }
    value2.textContent=p2score;}
})
playto.addEventListener('change',function(){
    winningScore=parseInt(this.value);
    reset();
})
button3.addEventListener('click',reset)

function reset()
{
    gameOver=false;
    value1.textContent=p1score=0;
    value2.textContent=p2score=0;

    value1.classList.remove('winner','loser');
    value2.classList.remove('winner','loser');

}

document.addEventListener("click", colourChange);
function colourChange(){

document.body.style.backgroundColor='rgba('+ Math.round(Math.random() *255) + ',' +Math.round(Math.random() *255) + ','+Math.round(Math.random() *255) + ',' + 0.3;')';
}
