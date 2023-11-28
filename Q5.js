function printpattern(){
    
 for (let i=1; i<=n; i++){
         let star="*"
        console.log(star.repeat(i));
    

 }
}
const readlineSync=require("readline-sync");
let n=parseInt(readlineSync.question("How many pattern star you think : "))

printpattern();
