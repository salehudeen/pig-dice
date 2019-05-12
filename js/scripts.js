$(document).ready(function() {
  $(".rules1").click(function() {
    $("#rules").toggle();
  });
});
function rolldice(){
  var die1=document.getElementById('die1')
  var die2=document.getElementById('die2')
  var status=document.getElementById('status')
  var d1 = Math.floor(Math.random()*6)+1;
  var d2 = Math.floor(Math.random()*6)+1;
  die1.innerHTML =d1;
  die2.innerHTML =d2;
  status.innerHTML = "you rolled"+d1;
  if(d1===1){
    status.innerHTML+="you got a one";
  }
}
