

 function printEven(n){
    console.log("EVEN NUMBERS ARE")
    for(i=2;i<=number;i++){
        if(i%2===0){
        
          
           console.log(":"+i);
        }

    } 
    
}
const readlineSync = require('readline-sync');
let number=readlineSync.question('Enter a number : ');
numbers=printEven();
