function dicegame(){
    var num1=Math.floor(Math.random()*6)+1;
  var randNum1="dice"+num1+".png";
var randImg1="images/"+randNum1;
  document.querySelector(".img1").setAttribute("src",randImg1);

 var num2=Math.floor(Math.random()*6)+1;
var randNum2="dice"+num2+".png";
var randImg2="images/"+randNum2;
  document.querySelector(".img2").setAttribute("src",randImg2);



  
if(num1>num2)
    {
         document.querySelector(".title").innerText="🚩Player 1 Wins!";
}
else if(num1<num2){
    document.querySelector(".title").innerText="Player 2 Wins!🚩";
    
}
else{
    document.querySelector(".title").innerText="Draw!";
}
}
