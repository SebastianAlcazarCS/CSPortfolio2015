var colorSequenceOn = ["green yellow blue 	#FF9980","green yellow blue #FF9980","green yellow blue #FF9980", "#66FF66 yellow blue red", "#66FF66 yellow blue red", "#66FF66 yellow blue red", "green yellow #33CCFF red", "green yellow #33CCFF red", "green yellow #33CCFF red"];
var colorSequenceOff = "green yellow blue red";
var colorSequence = ["red","green","blue"];
var roundNum = 1;
var playIndex = 0;
var nextClickIndex = 0;

//var redSpot = document.getElementById("red");




var startbutton= document.getElementById("start");
startbutton.addEventListener("click", playSequence);


function playSequence(){
  
     // light up the proper div based on the current playIndex
 
    // How to change div color: 
  
    //turn on code
    
   document.getElementById(colorSequence[playIndex]).style.borderColor = colorSequenceOn[playIndex];
    
    //delay
    setTimeout(function(){  
        
    // stop the div from lighting up
        document.getElementById(colorSequence[playIndex]).style.borderColor = colorSequenceOff;
        
    // increase playIndex by 1
      playIndex ++;
          
              
    // Call set Timeout on playSequence 
       
    
    // Unless playSequence is at end
      
   if (playIndex<colorSequence.length){
              setTimeout(playSequence,3000);
              }
    
    }, 1000);
  

 
 
}

function playerTurn(){
  
  
}




function pushNew(){
var rand = Math.ceil(Math.random() * 4); 
    switch(rand){
        case 1:
            colorSequenceOn.push("lightgreen yellow blue red");
            colorSequence.push("green");
            break;
        case 2:
            colorSequenceOn.push("green lightyellow blue red");
            colorSequence.push("yellow");
            break;
        case 3:
            colorSequenceOn.push("green yellow lightblue red");
            colorSequence.push("blue");
            break;
        case 4:
            colorSequenceOn.push("green yellow blue #FF9980");
            colorSequence.push("red");
            break;
    }
               
}