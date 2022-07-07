
for(i=0; i<document.querySelectorAll(".drum").length; i++){
  
  document.querySelectorAll(".drum")[i].addEventListener("click",playDrum);

  function playDrum(){
    
   switch(this.innerHTML){

       case "o":

       var audio = new Audio('sounds/crash.mp3');
    audio.play();

       break;
       
    case "t":

       var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();

       break;
       
     case "z":

       var audio = new Audio('sounds/snare.mp3');
    audio.play();

       break;

     case "f":

       var audio = new Audio('sounds/tom-1.mp3');
    audio.play();

       break;
       
       case "m":

       var audio = new Audio('sounds/tom-2.mp3');
    audio.play();

       break;

       case "n":

       var audio = new Audio('sounds/tom-3.mp3');
    audio.play();

       break;

       case "p":

       var audio = new Audio('sounds/tom-4.mp3');
    audio.play();

     }
             
    
}

  document.addEventListener("keypress" , playKey); 
                            
  function playKey(event){

    console.log(event);
  }
}
