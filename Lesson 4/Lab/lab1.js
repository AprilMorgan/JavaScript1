function submitData() {
    let min = Number(guessForm.min.value);
    let max = Number(guessForm.max.value);
    
    if (min == "" || max == "") {
      let value = "Both fields must be filled in.";
      let color = "red";
      updateDOM(value, color);
      return false;
    } 

    if(min >= max) {
      let value = "The min value cannot be greater than the max value";
      let color ="red";
      updateDOM(value, color);
      return false; 
      
    }
numberGuessGame(min,max);
return false;
}

function updateDOM(value, color) {
        document.getElementById("output").innerHTML = value;
        document.getElementById("output").style.color = color;
}

function numberGuessGame(min, max) {
    let num = Math.ceil(randomNumber(min, max));
    console.log(num);
    let message = "I'm thinking of a number between " + min + " and " + max + ". Take a guess."
    let guess;
    do {
        guess = parseInt(prompt(message));
        if (guess < num) {
            message = "That guess is too low"
            guess = parseInt(prompt(message));
        }    
        if (guess > num) {
            message = "That guess is too high";
            guess = parseInt(prompt(message));
        }

        if (isNaN(guess)) {
            break;
        }
            
    } while (guess !==num);
        message = "Congratulations! You win."
        
        updateDOM(message, "green");
}

function randomNumber (min, max) {
    return Math.random() * (max - min) + min;
    
}

