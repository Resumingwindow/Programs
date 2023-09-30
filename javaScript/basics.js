console.log("shubh@art");  //to print in console
let a = 65;                 // variable
console.log(a + 5);              //operation
a = "shubhart";
console.log(a + " " + 6);     // concatination
//Type conversion
let num = Number("123");
console.log(num, typeof num);

let x;                          // variable

//Type Coercion

console.log(x, typeof x);

x = 8
console.log(x, typeof x);

x = x + " ";
console.log(x, typeof x);
x = x - 2;
console.log(x, typeof x);
x = !x;
//Boolean 0,-0,UNDEFINED,NULL,NaN,0n," " is falsy value except this all other will return true
console.log(Boolean(0));
// x is string you can convert it by unary operator 
x = +x + 2;  // x is being converted into number
//if you have string starting with number you can extract number using parseint
let num2 = parseInt("123 Shubham");
console.log(num2);

// Arithmatic Operator
let op1 = 24;
let op2 = 2;
let result = op1 + op2;
console.log(result)
result = op1 - op2;
console.log(result)
result = op1 * op2;
console.log(result)
result = op1 / op2;
console.log(result)

op1 = true
op2 = true
result = op1 + op2
console.log(result)

op1 = 24;
op2 = 2;

op1 += 4;  // op1 = op1+4
op1++    // increment op1+1  pre increment ++op1 post increment
result = Math.pow(2, 3);     // 2 is actual value and 3 is power of 2 we can write it as below too
result = 2 ** 3;


//Relational Oprator   lessthan < ,greaterthan  > ,lessthan equal <= ,greaterthan equal >=, equality ==

let r = op1 > op2
console.log(op1 > op2);
console.log(r);
// === strict equality operatr , since if "3"==3 in js is equal the string 3 will be converted 
//but if you use === it will be equal if actually equal
console.log(3 == "3"); // true
console.log(3 === "3");  //false

//Logical OPerator  &&,||,!
x = 7, y = 8, z = 9
result = x > y && x > z;
console.log(result);
result = x > y || x > z;
console.log(result);
let n = !result;
console.log(result, n);

//Conditional Statemnt

let cond = 6;
let cond2 = 4
let cond3 = 9
if (cond > cond2 && cond > cond3) {
    console.log("Num1 is greater");
}
else if (cond2 > cond && cond2cond3) {
    console.log("num2 is greater");
}
else {
    console.log("num3 is greater");
}

console.log("Bye...");

//Ternery operator
num = 5;
result = num % 2 == 0 ? "Even" : "odd";
console.log(result);

// Switch Statement
let day = "Monday";
switch (day) {
    case 'Mondey':
        console.log("7am");
        break;
    case 'Tuesday':
        console.log("8am");
        break;
    case 'Wednesday':
        console.log("5am");
        break;
    case 'Thursday':
        console.log("4am");
        break;
    case 'Friday':
        console.log("6am");
        break;
    case 'Saturday':
        console.log("9am");
        break;
    case'Sunday':
        console.log("9am");
        break;
    default:
    console.log("Invalid day");
}
//Template Literals
result = num+num2;
console.log(`The addition of ${num} and ${num2} = ${result}`)

// Loops
//While Loop

let i = 1
while(i<=5){
    console.log("Hi");
    i++;
}

// For Loop
for(let i = 1; i<=5;i++){
    console.log("In for Loop");
    for(let j=1;j<=5;j++)
        console.log("In nexted Loop");
}

do{
    console.log("From do while");
}while(i<=5);

//To print indivisual value of number
num = 546754;

while(num>0){
    console.log(num%10);
    num=parseInt(num/10)
}



