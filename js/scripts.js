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
function rolldice2() {
  var die2 = document.getElementById('die2')
  var status = document.getElementById('status2')
  var diceTotal2 =document.getElementById('dicetotal2')
  var d2 = Math.floor(Math.random() * 6) + 1;
  die2.innerHTML = d2;
  status.innerHTML = "you rolled" + d2;
  if (d2 === 1) {
    status.innerHTML += "you got a one";
    $(".p2roll").hide();
    $(".p1roll").show();
    alert("next player please you rolled a ONE!")
  }
    diceTotal2.innerHTML = d2+=d2;
}
$(document).ready(function() {
  $(".p2hold").click(function() {
    $(".p1roll").show();
    $(".p2roll").hide();
  });
});
$(document).ready(function() {
  $(".p1hold").click(function() {
    $(".p1roll").hide();
    $(".p2roll").show();
  });
});
$(document).ready(function() {
  $(".play").click(function() {
    $(".p1roll").toggle();
    $(".p2roll").toggle();
  });
});
$(document).ready(function() {
  $(".rules1").click(function() {
    $("#rules").toggle();
  });
});
