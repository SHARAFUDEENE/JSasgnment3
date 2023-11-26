
function greetMessage(name) {
    return "Hello, "+name;
}

const readlineSync=require('readline-sync');
let userName= readlineSync.question("Please Enter your Name: ");
let greeting= greetMessage(userName);
console.log(greeting);  

    
 