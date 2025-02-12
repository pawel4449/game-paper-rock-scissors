
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

function GetComputerChoice(max) {                        
  let pCchoice= Math.floor(Math.random()*3)+1    ;

if (pCchoice===1) {
    return "rock";
} else if (pCchoice===2) {
    return "paper";
} else {
    return "scissors";
}                               
     }     
     
// function human choice, you can write 1,2,3 or rock, paper, scissors.
function GetHumanChoice(min)   {
    let hChoice= prompt('What do you choose ? Write 1 or "rock", 2 or "paper" , 3 or "scissors"');           
    
        if (hChoice===1||"rock") {  
    return "rock";}
          else if (hChoice===2||"paper") {
    return "paper";}
 else {
    return "scissors"};
}



         
 console.log(GetHumanChoice(2));
 
   
  



console.log(GetComputerChoice(2)); 
                 
                                          
                          
     
                                                            