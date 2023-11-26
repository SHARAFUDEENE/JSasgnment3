function printnumbers(n){
    let result="";
    for(let i= 1; i<=n;i++ ) {
        result+=i+"\n";
    }
        
        return result;
    
}
const readlineSync=require('readline-sync');
let n=parseInt(readlineSync.question("Please type a number : "))
let numbers=printnumbers(n);
console.log(numbers);
