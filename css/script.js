$(document).ready(function() {
  $(".rules1").click(function() {
    $("#rules").toggle();
  });
});
var someno=math.floor(math.random()*6); +1;
var dice1 = "images/dice"+someno+".webp";

// $(document).ready(function() {
//   $(".img1").click(function() {
    document.querySelector(".img1").setAttribute("src",dice1);
//   });
// });
function rolldice(){
  var die1 = document.getElementById('die1');
  var status = document.getElementById('status');
  var total = document.getElementById('diceTotal');
  var d1 = Math.floor (Math.random()*6)+1;
  var diceTotal= d1+status;
  die1.innerHTML= d1
  status.innerHTML=d1;
  total.innerHTML=diceTotal;
  if(d1===1){
    status.innerHTML += "you rolled a one!";
  }
}
function rolldice2(){
  var die2 = document.getElementById('die2');
  var status = document.getElementById('status2');
  var d2 = Math.floor (Math.random()*6)+1;
  var diceTotal= d2 +d2;
  die2.innerHTML= d2
  status.innerHTML="images/dice"+d2+".webp";
  if(d2===1){
    status.innerHTML += "you rolled a one!";
  }
}
