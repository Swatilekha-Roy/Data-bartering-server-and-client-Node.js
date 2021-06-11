window.onload = function () {
  
    var seconds = 0; 
    var tens = 0; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    buttonStart.onclick = function() {
      
       clearInterval(Interval);
       Interval = setInterval(startTimer, 1000);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
  
  
    // Calculate points
  
      if(seconds >= 5)
      {
        medsc = 5*seconds;
        console.log(medsc);
      }
      medsc = 5;
      console.log(medsc);
    
  }
  
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 59) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  }
  