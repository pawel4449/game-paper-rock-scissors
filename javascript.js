
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


 


function GetComputerChoice(max) {
    return Math.floor(Math.random()*3);
  }
           
   console.log(GetComputerChoice(3));                       
                        
