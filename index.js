document.addEventListener("keypress",function(){
  var press=event.key;
  roll(press);
  buttonAnimation(press);
});
document.querySelector("button").addEventListener("click",function(){
  var click=this.innerHTML;
  roll(click);
  buttonAnimation(click);
});
function roll(key){
  switch(key){
    case "Roll":
    var a=Math.random();
    var randomNumber1=Math.floor((a*6)+1);
    var result="images/dice" + randomNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src",result);

    var b=Math.random();
    var randomNumber2=Math.floor((b*6)+1);
    var result="images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src",result);

    if(randomNumber1>randomNumber2){
      document.querySelector("h1").innerHTML="Player1 wins🥇"
    }
    else if(randomNumber1<randomNumber2){
      document.querySelector("h1").innerHTML="Player2 wins🥈"
    }
    else{
      document.querySelector("h1").innerHTML="Draws!🎲"
    }
      break;
      case "Enter":
      var a=Math.random();
      var randomNumber1=Math.floor((a*6)+1);
      var result="images/dice" + randomNumber1 + ".png";
      document.querySelectorAll("img")[0].setAttribute("src",result);

      var b=Math.random();
      var randomNumber2=Math.floor((b*6)+1);
      var result="images/dice" + randomNumber2 + ".png";
      document.querySelectorAll("img")[1].setAttribute("src",result);

      if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="Player1 wins🥇"
      }
      else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML="Player2 wins🥈"
      }
      else{
        document.querySelector("h1").innerHTML="Draws!🎲"
      }
        break;
  }

}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
