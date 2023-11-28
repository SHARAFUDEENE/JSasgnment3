
function sumofsqre(){
    
    let sum=0
    for(let i=0;i<=num;i++){
        let Squre=i*i;
         sum+=Squre;
       
    }
    console.log("The SUM Of Squre is : "+ sum);
}

const readlineSync=require('readline-sync');
let num=parseInt(readlineSync.question("Please Enter A number : "))
sumofsqre();