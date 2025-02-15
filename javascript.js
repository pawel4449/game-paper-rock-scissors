
/*
logika gry -PseudoCode


Pc randomly get one thing - rock, paper or scissors .
    GetComputerChoice

What do you choose ? Only one.  
rock?
paper? 
scissors ?  
    UserChoice

it is time for function to 
    compare 

is UserChoice === GetComputerChoice     = it is tie... 0 :0

rock > scissors     1:0
scissors > paper    1:0
paper > rock        1:0

game to infinity ? or to some limit = 10 times ?
*/




// function random by computer one of three values: 0,1 or 2; and transit these value into rock, paper or scissors

// function human choice, you can write 1,2,3 or rock, paper, scissors.




let humanScore = 0;
let computerScore = 0;
        



function GetHumanChoice()   {
    let humanChoice= prompt
    ('What do you choose ? Write  "rock",  or "paper" ,   or "scissors"');           
    
    if (humanChoice.toLocaleLowerCase()===  "rock"  ) {  
        return "rock";}
              else if (humanChoice.toLocaleLowerCase()=== "paper"   ) {
        return "paper";}
     else {
        return "scissors"};
}

      
    


function GetComputerChoice( ) {                        
    let computerChoice= Math.floor(Math.random()*3)+1    ;
    
if (computerChoice===1) {
    return "rock";
} else if (computerChoice===2) {
    return "paper";
} else {
    return "scissors";
}                               
     }     
           
     
     
     
    ;
    
        function playRound(humanChoice,computerChoice) {
            const humanSelection =GetHumanChoice();
            const computerSelection=GetComputerChoice();
            
         
            if ( humanSelection === computerSelection) {
       return `It's a tie. You and Computer choose ${humanSelection}`
   } else if (( humanSelection === "paper" && computerSelection ==="rock")
       || (humanSelection ==="scissors" && computerSelection ==="paper")
       || (humanSelection==="rock" && computerSelection ==="paper")) {
           humanScore++
           return `You win ${humanSelection} beats ${computerSelection}`    
       }
       else {
           computerScore++
           return `${computerSelection} beats ${humanSelection} Computer wins!`; 
       } }
   

       function playGame () {
       console.log(playRound());
       console.log(playRound());
       console.log(playRound());
       console.log(playRound());
       console.log(playRound());

       if (computerScore>humanScore) {
        console.log('Last result = Computer Win');
        
       } else { 
        console.log('Last result = You win! Congratulation!');
        
       }
    ;}
  
    playGame();

     