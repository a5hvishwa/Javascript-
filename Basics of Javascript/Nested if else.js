let winningNumber = 19;
let userGuess = +prompt("Guess a Number");

if(userGuess===winningNumber){
    console.log("You guess Right !");
}else{
    if(userGuess<winningNumber){
        console.log("Too Low !!");
    }else{
        console.log("Too Low !1");
    }
}